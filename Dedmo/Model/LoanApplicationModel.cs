using GRE.Model;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace LoanManagementSystem.Model
{
    public class LoanApplicationModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int LoanApplicationId { get; set; }

        [StringLength(100)] // Set the maximum length of the CustomerName column to 100
        public string CustomerName { get; set; }
        public int UserId { get; set; }

        [Column(TypeName = "decimal(10,3)")] // Set the decimal data type with 10 total digits and 2 decimal places
        public decimal LoanAmount { get; set; }
        public DateTime? ApplicationDate { get; set; }
        public int LoanPeriod { get; set; }

        [StringLength(100)] // Set the maximum length of the CustomerName column to 100
        public string Email { get; set; }
        public string Contact { get; set; }
        public string Status { get; set; }
        public DateTime? CreatedOn { get; set; }
        public Boolean IsActive { get; set; }
        public int? ModifiedBy { get; set; }
        public DateTime? ModifiedOn { get; set; }
        public virtual UserModel User { get; set; }
    }
}
