using GRE.Model;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace LoanManagementSystem.Model
{
    public class PaymentModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int PaymentId { get; set; }

        [Column(TypeName = "decimal(10,3)")] // Set the decimal data type with 10 total digits and 2 decimal places
        public decimal Amount { get; set; }
        public DateTime PaymentDate { get; set; }
        public int LoanId { get; set; }
        public virtual LoanModel Loan { get; set; }

    }
}
