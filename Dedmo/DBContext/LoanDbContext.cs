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
            //Fluent API

            modelBuilder.Entity<UserModel>().ToTable("user_credential");
            modelBuilder.Entity<RolesModel>().ToTable("user_role");
            modelBuilder.Entity<UserRoleMapModel>().ToTable("user_map_role");
            modelBuilder.Entity<LoanApplicationModel>().ToTable("LoanApplication");
            modelBuilder.Entity<PaymentModel>().ToTable("Payment");
            modelBuilder.Entity<LoanModel>().ToTable("Loan");

            //Add Constrainst
            modelBuilder.Entity<LoanModel>()
           .HasKey(p => p.LoanId)
           .HasName("PK_Loan_LoanId"); // Set the custom primary key constraint name


            modelBuilder.Entity<LoanModel>()
           .HasOne(o => o.LoanApplication)
           .WithMany()
           .HasForeignKey(o => o.LoanApplicationId).HasConstraintName("FK_Loan_LoanApplicationId_LoanApplication");//set custom name of foreign key

            modelBuilder.Entity<LoanModel>()
           .HasOne(o => o.User)
           .WithMany()
           .HasForeignKey(o => o.CreatedBy).HasConstraintName("FK_Loan_CreatedBy_user_credential");//set custom name of foreign key

            modelBuilder.Entity<LoanModel>()
           .HasOne(o => o.User)
           .WithMany()
           .HasForeignKey(o => o.ModifiedBy).HasConstraintName("FK_Loan_ModifiedBy_user_credential");//set custom name of foreign key


            modelBuilder.Entity<PaymentModel>()
            .HasKey(p => p.PaymentId)
            .HasName("PK_Payment_PaymentId"); // Set the custom primary key constraint name


            modelBuilder.Entity<PaymentModel>()
               .HasOne(o => o.Loan)
               .WithMany()
               .HasForeignKey(o => o.LoanId).HasConstraintName("FK_Payment_LoanId_Loan");//set custom name of foreign key

            modelBuilder.Entity<UserModel>()
           .HasKey(p => p.UserId)
           .HasName("PK_User_UserId"); // Set the custom primary key constraint name


            modelBuilder.Entity<UserModel>()
               .HasIndex(p => p.UserName)
               .IsUnique()
               .HasName("UK_User_UserName");  // Set the custom unique key name

            modelBuilder.Entity<UserModel>()
           .HasIndex(p => p.Email)
           .IsUnique()
           .HasName("UK_User_Email");

            modelBuilder.Entity<RolesModel>()
           .HasKey(p => p.RoleId)
           .HasName("PK_user_role_RoleId"); // Set the custom primary key constraint name

            modelBuilder.Entity<UserRoleMapModel>()
           .HasKey(p => p.UserRoleMapId)
           .HasName("PK_user_map_role_UserRoleMapId"); // Set the custom primary key constraint name 

            modelBuilder.Entity<UserRoleMapModel>()
            .HasOne(o => o.User)
            .WithMany()
            .HasForeignKey(o => o.UserId).HasConstraintName("FK_user_map_role_UserId_user_role");//set custom name of foreign key


            modelBuilder.Entity<UserRoleMapModel>()
              .HasOne(o => o.Role)
              .WithMany()
              .HasForeignKey(o => o.RoleId).HasConstraintName("FK_user_map_role_RoleId_user_role");//set custom name of foreign key

            modelBuilder.Entity<UserRoleMapModel>()
           .HasOne(o => o.User)
           .WithMany()
           .HasForeignKey(o => o.CreatedBy).HasConstraintName("FK_user_map_role_CreatedBy_user_credential");//set custom name of foreign key

            modelBuilder.Entity<UserRoleMapModel>()
           .HasOne(o => o.User)
           .WithMany()
           .HasForeignKey(o => o.ModifiedBy).HasConstraintName("FK_user_map_role_ModifiedBy_user_credential");//set custom name of foreign key

            modelBuilder.Entity<LoanApplicationModel>()
           .HasKey(p => p.LoanApplicationId)
           .HasName("PK_LoanApplication_LoanApplicationId"); // Set the custom primary key constraint name


            modelBuilder.Entity<LoanApplicationModel>()
           .HasOne(o => o.User)
           .WithMany()
           .HasForeignKey(o => o.ModifiedBy).HasConstraintName("FK_LoanApplication_ModifiedBy_user_credential");//set custom name of foreign key

            modelBuilder.Entity<LoanApplicationModel>()
            .HasOne(o => o.User)
            .WithMany()
            .HasForeignKey(o => o.UserId).HasConstraintName("FK_user_credential_UserId_LoanApplication");//set custom name of foreign key
        }
        public DbSet<UserModel> users { get; set; }
        public DbSet<RolesModel> roles { get; set; }
        public DbSet<UserRoleMapModel> userRoleMap { get; set; }
        public DbSet<LoanApplicationModel> appliedLoan { get; set; }
        public DbSet<PaymentModel> payment { get; set; }
        public DbSet<LoanModel> loan { get; set; }

    }
}
