using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace LoanManagementSystem.Model
{
    public class RolesModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int RoleId { get; set; }

        [StringLength(100)] // Set the maximum length of the RoleName column to 100
        public string RoleName { get; set; }
        public string RoleDescription { get; set; }
        public Boolean IsSysAdmin { get; set; }
        public Boolean IsActive { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime? CreatedOn { get; set; }
        public int? ModifiedBy { get; set; }
        public DateTime? ModifiedOn { get; set; }
        public string RoleType { get; set; }
        public virtual UserModel User { get; set; }

    }
}
