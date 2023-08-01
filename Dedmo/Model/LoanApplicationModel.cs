using GRE.Model;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LoanManagementSystem.Model
{
    public class LoanApplicationModel
    {
        [Key]
        public int LoanApplicationId { get; set; }
        public string CustomerName { get; set; }
        public int UserId { get; set; }
        public decimal LoanAmount { get; set; }
        public DateTime? ApplicationDate { get; set; }
        public int LoanPeriod { get; set; }
        public string Email { get; set; }
        public string Contact { get; set; }
        public string Status { get; set; }
        public DateTime? CreatedOn { get; set; }
        public Boolean IsActive { get; set; }
        public int? ModifiedBy { get; set; }
        public DateTime? ModifiedOn { get; set; }
    }
}
