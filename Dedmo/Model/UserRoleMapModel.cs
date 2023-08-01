using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace LoanManagementSystem.Model
{
    public class UserRoleMapModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int UserRoleMapId { get; set; }
        public int UserId { get; set; }
        public int RoleId { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime? CreatedOn { get; set; }
        public int? ModifiedBy { get; set; }
        public DateTime? ModifiedOn { get; set; }
        public Boolean IsActive { get; set; }
        public virtual UserModel User { get; set; }
        public virtual RolesModel Role { get; set; }
    }
}
