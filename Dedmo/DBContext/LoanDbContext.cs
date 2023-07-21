using GRE.Model;
using LoanManagementSystem.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LoanManagementSystem.DBContext
{
    public class LoanDbContext : DbContext
    {
        public LoanDbContext(DbContextOptions<LoanDbContext> connection) : base(connection)
        { }

        public LoanDbContext()
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserModel>().ToTable("user_credential");
            modelBuilder.Entity<RolesModel>().ToTable("user_role");
            modelBuilder.Entity<UserRoleMapModel>().ToTable("user_map_role");
            modelBuilder.Entity<LoanApplicationModel>().ToTable("LoanApplication");
            modelBuilder.Entity<PaymentModel>().ToTable("Payment");
            modelBuilder.Entity<LoanModel>().ToTable("Loan");
        }
        public DbSet<UserModel> users { get; set; }
        public DbSet<RolesModel> roles { get; set; }
        public DbSet<UserRoleMapModel> userRoleMap { get; set; }
        public DbSet<LoanApplicationModel> appliedLoan { get; set; }
        public DbSet<PaymentModel> payment { get; set; }
        public DbSet<LoanModel> loan { get; set; }

    }
}
