using LoanManagementSystem.Model;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace GRE.Model
{
    public class LoanModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int LoanId { get; set; }

        [Column(TypeName = "decimal(10,3)")] // Set the decimal data type with 10 total digits and 2 decimal places
        public decimal Amount { get; set; }

        [Column(TypeName = "decimal(10,2)")]
        public decimal InterestRate { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Status { get; set; }  // InProgress, Accepted , Rejected
        public int LoanApplicationId { get; set; }

        [StringLength(100)] // Set the maximum length of the CustomerName column to 100
        public string Email { get; set; }
        public int CreatedBy { get; set; }
        public DateTime CreatedOn { get; set; }
        public int? ModifiedBy { get; set; }
        public DateTime? ModifiedOn { get; set; }

        [Column(TypeName = "decimal(10,3)")] 
        public decimal BalanceAmount { get; set; }
        public virtual LoanApplicationModel LoanApplication { get; set; }
        public virtual List<PaymentModel> Payments { get; set; }
        public virtual UserModel User { get; set;}

    }
}
