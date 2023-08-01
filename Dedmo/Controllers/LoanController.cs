using GRE.CommonClass;
using GRE.Model;
using LoanManagementSystem.CommonClass;
using LoanManagementSystem.DBContext;
using LoanManagementSystem.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace Dedmo.Controllers
{
    public class LoanController : Controller
    {
        private readonly LoanDbContext _loanDbContext;
        LoanHttpResponse<object> responseData = new LoanHttpResponse<object>();

        // private readonly NotificationService _notificationService;
        // private static IHubContext<MessageHub, IMessageHubClient> messageHub;
        //MessageHubController c = new MessageHubController(messageHub);
        public LoanController(LoanDbContext context)
        {
            _loanDbContext = context;
        }
        [HttpGet]
        [Route("~/api/Loan/RolesList")]
        public IActionResult GetRoles()
        {
            var roles = (from role in _loanDbContext.roles.Where(r => r.IsActive == true)
                         select new RolesModel
                         {
                             RoleId = role.RoleId,
                             RoleName = role.RoleName,
                             RoleDescription = role.RoleDescription,
                             RoleType = role.RoleType
                         }).ToList();
            responseData.Status = "OK";
            responseData.Results = roles;
            return Ok(responseData);
        }
        [HttpGet]
        [Route("~/api/Loan/RoleByUserId")]
        public IActionResult GetRoleByUserId(int UserId)
        {
            var userDetail = (
                from map in _loanDbContext.userRoleMap.Where(u => u.UserId == UserId)
                join user in _loanDbContext.users on map.UserId equals user.UserId
                join role in _loanDbContext.roles on map.RoleId equals role.RoleId
                select new
                {
                    RoleId = role.RoleId,
                    RoleName = role.RoleName,
                    RoleDescription = role.RoleDescription,
                    UserName = user.UserName
                }
                ).FirstOrDefault();
            responseData.Status = "OK";
            responseData.Results = userDetail;
            return Ok(responseData);
        }
        [HttpPost]
        [Route("~/api/Loan/UserAuthentication")]
        public IActionResult VerifyUser([FromBody] UserModel user)
        {
            string encryptedPass= Security.EncryptPassword(user.Password);
            int userId = _loanDbContext.users.Where(u => u.Password == encryptedPass && u.UserName == user.UserName).Select(r => r.UserId).FirstOrDefault();
            if (userId > 0)
            {
                user.UserId = userId;
                responseData.Status = "OK";
                responseData.Results = user;
            }
            else
            {
                responseData.Status = "Failed";
                responseData.ErrorMessage = "Invalid Credentials,Please try again!";
            }
            return Ok(responseData);
        }
        [HttpPost]
        [Route("~/api/Loan/LoanApplied")]
        public IActionResult PostLoanApplied([FromBody] LoanApplicationModel loan)
        {
            using (var loanTransaction = _loanDbContext.Database.BeginTransaction())
            {
                try
                {

                    loan.CreatedOn = DateTime.Now;
                    loan.ApplicationDate = DateTime.Now;
                    loan.Status = "InProgress";
                    _loanDbContext.appliedLoan.Add(loan);
                    _loanDbContext.SaveChanges();
                    loanTransaction.Commit();
                    responseData.Status = "OK";
                    responseData.Results = loan;
                }
                catch (Exception ex)
                {
                    loanTransaction.Rollback();
                    responseData.Status = "Failed";
                    responseData.ErrorMessage = "Failed To Apply Loan So, Please Try Again!";
                }
            }
            return Ok(responseData);
        }
        [HttpGet]
        [Route("~/api/Loan/LoanApplications")]
        public IActionResult GetLoanApplications()
        {
            var loanApplications = (
                from loan in _loanDbContext.appliedLoan
                join user in _loanDbContext.users on loan.UserId equals user.UserId
                select new
                {
                    LoanApplicationId = loan.LoanApplicationId,
                    CreatedBy = user.UserId,
                    CustomerName = loan.CustomerName != null ? loan.CustomerName : user.UserName,
                    Address = user.Address,
                    Email = loan.Email,
                    ApplicationDate = loan.ApplicationDate,
                    LoanAmount = loan.LoanAmount,
                    LoanPeriod = loan.LoanPeriod,
                    Status = loan.Status
                }).OrderByDescending(d => d.ApplicationDate).ToList();
            responseData.Status = "OK";
            responseData.Results = loanApplications;
            return Ok(responseData);
        }
        [HttpGet]
        [Route("~/api/Loan/LoanApplicationsByUserId")]
        public IActionResult GetLoanApplicationsByUserId(int UserId)
        {
            //LINQ : Query Syntax
            var loanApplications = (
                from loan in _loanDbContext.appliedLoan
                join user in _loanDbContext.users on loan.UserId equals user.UserId
                where loan.UserId == UserId
                select new
                {
                    LoanApplicationId = loan.LoanApplicationId,
                    CustomerName = loan.CustomerName != null ? loan.CustomerName : user.UserName,
                    Address = user.Address,
                    Email = loan.Email,
                    ApplicationDate = loan.ApplicationDate,
                    LoanAmount = loan.LoanAmount,
                    LoanPeriod = loan.LoanPeriod,
                    Status = loan.Status,
                    UserId = user.UserId
                }).OrderByDescending(d => d.ApplicationDate).ToList();
            responseData.Status = "OK";
            responseData.Results = loanApplications;
            return Ok(responseData);

        }
        [HttpPut]
        [Route("~/api/Loan/ApproveLoanApplication")]
        public IActionResult ApproveLoanApplicationStatus(int UserId, int LoanApplicationId)
        {
            using (var dbContextTransaction = _loanDbContext.Database.BeginTransaction())
            {
                try
                {
                    // Refactor: Extract Method for Clean Code and increase Readability

                    LoanApplicationModel loanApplication = UpdateApplicationStatus(UserId, LoanApplicationId);
                    LoanSavedAfterApproved(UserId, loanApplication);
                    dbContextTransaction.Commit();
                    if (loanApplication != null)
                    {
                        LoanApplicationModel loanApplicationData = JsonConvert.DeserializeObject<LoanApplicationModel>(JsonConvert.SerializeObject(loanApplication));
                        responseData.Results = loanApplicationData;

                        responseData.Status = "OK";
                    }
                }
                catch (Exception ex)
                {
                    dbContextTransaction.Rollback();
                    responseData.Status = "Failed";
                    responseData.ErrorMessage = "Failed To Update Loan Status So, Please Try Again!";
                }
                return Ok(responseData);
            }
        }

        private void LoanSavedAfterApproved(int UserId, LoanApplicationModel loanApplication)
        {
            LoanModel loan = new LoanModel();
            loan.Status = loanApplication.Status;
            loan.StartDate = DateTime.Now;
            loan.EndDate = loan.StartDate.AddYears(loanApplication.LoanPeriod); //As LoanPeriod is in years so EndDate of loan is calcaulated by Adding Current date to the loanPeriod
            loan.LoanApplicationId = loanApplication.LoanApplicationId;
            loan.InterestRate = (loanApplication.LoanAmount * loanApplication.LoanPeriod * 7) / 100;
            loan.Amount = loanApplication.LoanAmount;
            loan.BalanceAmount = loanApplication.LoanAmount;
            loan.CreatedBy = UserId;
            loan.CreatedOn = DateTime.Now;
            loan.Email = loanApplication.Email;
            _loanDbContext.loan.Add(loan);
            _loanDbContext.SaveChanges();
        }

        private LoanApplicationModel UpdateApplicationStatus(int UserId, int LoanApplicationId)
        {
            var loanApplication = _loanDbContext.appliedLoan.Where(l => l.LoanApplicationId == LoanApplicationId).FirstOrDefault();
            loanApplication.Status = "Approved";
            loanApplication.ModifiedBy = UserId;
            loanApplication.ModifiedOn = DateTime.Now;
            _loanDbContext.appliedLoan.Attach(loanApplication);
            _loanDbContext.Entry(loanApplication).State = EntityState.Modified;
            _loanDbContext.Entry(loanApplication).Property(x => x.ModifiedOn).IsModified = true;
            _loanDbContext.Entry(loanApplication).Property(x => x.ModifiedBy).IsModified = true;
            _loanDbContext.Entry(loanApplication).Property(x => x.Status).IsModified = true;
            _loanDbContext.SaveChanges();
            return loanApplication;
        }

        [HttpPut]
        [Route("~/api/Loan/RejectLoanApplication")]
        public IActionResult RejectLoanApplicationStatus(int UserId, int LoanApplicationId)
        {
            try
            {
                var loanApplication = _loanDbContext.appliedLoan.Where(l => l.LoanApplicationId == LoanApplicationId).FirstOrDefault();
                loanApplication.Status = "Rejected";
                loanApplication.ModifiedBy = UserId;
                loanApplication.ModifiedOn = DateTime.Now;
                loanApplication.IsActive = false;
                _loanDbContext.appliedLoan.Attach(loanApplication);
                _loanDbContext.Entry(loanApplication).State = EntityState.Modified;
                _loanDbContext.Entry(loanApplication).Property(x => x.ModifiedOn).IsModified = true;
                _loanDbContext.Entry(loanApplication).Property(x => x.ModifiedBy).IsModified = true;
                _loanDbContext.Entry(loanApplication).Property(x => x.Status).IsModified = true;
                _loanDbContext.Entry(loanApplication).Property(x => x.IsActive).IsModified = true;
                _loanDbContext.SaveChanges();
                responseData.Status = "OK";
                responseData.Results = loanApplication;
            }
            catch (Exception ex)
            {
                responseData.Status = "Failed";
                responseData.ErrorMessage = "Failed To Update Loan Status So, Please Try Again!";
            }
            return Ok(responseData);
        }
        [HttpPost]
        [Route("~/api/Loan/UserRegistration")]
        public IActionResult PostUserRegistration([FromBody] UserModel user)
        {
            using (var userRegistrationTransaction = _loanDbContext.Database.BeginTransaction())
            {
                try
                {
                    user.CreatedOn = DateTime.Now;
                    string encryptedPassword = Security.EncryptPassword(user.Password);
                    user.Password = encryptedPassword;
                    _loanDbContext.users.Add(user);
                    _loanDbContext.SaveChanges();

                    int RoleId = _loanDbContext.roles.Where(r => r.RoleName == "Client").FirstOrDefault().RoleId;
                    var userMapRole = new UserRoleMapModel();
                    userMapRole.RoleId = RoleId;
                    userMapRole.UserId = user.UserId;
                    userMapRole.IsActive = true;
                    userMapRole.CreatedBy = user.CreatedBy;
                    userMapRole.CreatedOn = DateTime.Now;
                    _loanDbContext.Add(userMapRole);
                    _loanDbContext.SaveChanges();
                    userRegistrationTransaction.Commit();
                    responseData.Status = "OK";
                    responseData.Results = user;
                }
                catch (Exception ex)
                {
                    userRegistrationTransaction.Rollback();
                    responseData.Status = "Failed";
                    responseData.ErrorMessage = "Failed To Register So, Please Try Again!";
                }
            }
            return Ok(responseData);
        }

    }
}
