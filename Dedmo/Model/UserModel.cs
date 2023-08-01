using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace LoanManagementSystem.Model
{
    public class UserModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int UserId { get; set; }

        [StringLength(100)] // Set the maximum length of the UserName column to 100
        public string UserName { get; set; }

        [StringLength(100)]
        public string Password { get; set; }

        [StringLength(100)]
        public string Email { get; set; }
        public string Name { get; set; }

        [StringLength(50)]
        public string Contact { get; set; }

        [StringLength(100)]
        public string Address { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime? CreatedOn { get; set; }
        public DateTime? ModifiedOn { get; set; }
        public int? ModifiedBy { get; set; }
        public Boolean IsActive { get; set; }
    }
}
