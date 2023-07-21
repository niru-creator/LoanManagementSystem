using LoanManagementSystem.Model;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GRE.Model
{
    public class LoanModel
    {
        [Key]
        public int LoanId { get; set; }
        public decimal Amount { get; set; }
        public decimal InterestRate { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Status { get; set; }  // InProgress, Accepted , Rejected
        public int LoanApplicationId { get; set; }
        public string Email { get; set; }
        public int CreatedBy { get; set; }
        public DateTime CreatedOn { get; set; }
        public int? ModifiedBy { get; set; }
        public DateTime? ModifiedOn { get; set; }
        public decimal BalanceAmount { get; set; }
        public virtual LoanApplicationModel LoanApplication { get; set; }
        public virtual List<PaymentModel> Payments { get; set; }

    }
}
