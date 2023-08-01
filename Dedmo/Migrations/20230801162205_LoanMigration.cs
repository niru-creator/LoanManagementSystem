using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace LoanManagementSystem.Migrations
{
    public partial class LoanMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "user_credential",
                columns: table => new
                {
                    UserId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserName = table.Column<string>(maxLength: 100, nullable: true),
                    Password = table.Column<string>(maxLength: 100, nullable: true),
                    Email = table.Column<string>(maxLength: 100, nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Contact = table.Column<string>(maxLength: 50, nullable: true),
                    Address = table.Column<string>(maxLength: 100, nullable: true),
                    CreatedBy = table.Column<int>(nullable: true),
                    CreatedOn = table.Column<DateTime>(nullable: true),
                    ModifiedOn = table.Column<DateTime>(nullable: true),
                    ModifiedBy = table.Column<int>(nullable: true),
                    IsActive = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User_UserId", x => x.UserId);
                });

            migrationBuilder.CreateTable(
                name: "LoanApplication",
                columns: table => new
                {
                    LoanApplicationId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CustomerName = table.Column<string>(maxLength: 100, nullable: true),
                    UserId = table.Column<int>(nullable: false),
                    LoanAmount = table.Column<decimal>(type: "decimal(10,3)", nullable: false),
                    ApplicationDate = table.Column<DateTime>(nullable: true),
                    LoanPeriod = table.Column<int>(nullable: false),
                    Email = table.Column<string>(maxLength: 100, nullable: true),
                    Contact = table.Column<string>(nullable: true),
                    Status = table.Column<string>(nullable: true),
                    CreatedOn = table.Column<DateTime>(nullable: true),
                    IsActive = table.Column<bool>(nullable: false),
                    ModifiedBy = table.Column<int>(nullable: true),
                    ModifiedOn = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LoanApplication_LoanApplicationId", x => x.LoanApplicationId);
                    table.ForeignKey(
                        name: "FK_user_credential_UserId_LoanApplication",
                        column: x => x.UserId,
                        principalTable: "user_credential",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "user_role",
                columns: table => new
                {
                    RoleId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RoleName = table.Column<string>(maxLength: 100, nullable: true),
                    RoleDescription = table.Column<string>(nullable: true),
                    IsSysAdmin = table.Column<bool>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    CreatedBy = table.Column<int>(nullable: true),
                    CreatedOn = table.Column<DateTime>(nullable: true),
                    ModifiedBy = table.Column<int>(nullable: true),
                    ModifiedOn = table.Column<DateTime>(nullable: true),
                    RoleType = table.Column<string>(nullable: true),
                    UserId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_user_role_RoleId", x => x.RoleId);
                    table.ForeignKey(
                        name: "FK_user_role_user_credential_UserId",
                        column: x => x.UserId,
                        principalTable: "user_credential",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Loan",
                columns: table => new
                {
                    LoanId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Amount = table.Column<decimal>(type: "decimal(10,3)", nullable: false),
                    InterestRate = table.Column<decimal>(type: "decimal(10,2)", nullable: false),
                    StartDate = table.Column<DateTime>(nullable: false),
                    EndDate = table.Column<DateTime>(nullable: false),
                    Status = table.Column<string>(nullable: true),
                    LoanApplicationId = table.Column<int>(nullable: false),
                    Email = table.Column<string>(maxLength: 100, nullable: true),
                    CreatedBy = table.Column<int>(nullable: false),
                    CreatedOn = table.Column<DateTime>(nullable: false),
                    ModifiedBy = table.Column<int>(nullable: true),
                    ModifiedOn = table.Column<DateTime>(nullable: true),
                    BalanceAmount = table.Column<decimal>(type: "decimal(10,3)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Loan_LoanId", x => x.LoanId);
                    table.ForeignKey(
                        name: "FK_Loan_LoanApplicationId_LoanApplication",
                        column: x => x.LoanApplicationId,
                        principalTable: "LoanApplication",
                        principalColumn: "LoanApplicationId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Loan_ModifiedBy_user_credential",
                        column: x => x.ModifiedBy,
                        principalTable: "user_credential",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "user_map_role",
                columns: table => new
                {
                    UserRoleMapId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<int>(nullable: false),
                    RoleId = table.Column<int>(nullable: false),
                    CreatedBy = table.Column<int>(nullable: true),
                    CreatedOn = table.Column<DateTime>(nullable: true),
                    ModifiedBy = table.Column<int>(nullable: true),
                    ModifiedOn = table.Column<DateTime>(nullable: true),
                    IsActive = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_user_map_role_UserRoleMapId", x => x.UserRoleMapId);
                    table.ForeignKey(
                        name: "FK_user_map_role_ModifiedBy_user_credential",
                        column: x => x.ModifiedBy,
                        principalTable: "user_credential",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_user_map_role_RoleId_user_role",
                        column: x => x.RoleId,
                        principalTable: "user_role",
                        principalColumn: "RoleId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Payment",
                columns: table => new
                {
                    PaymentId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Amount = table.Column<decimal>(type: "decimal(10,3)", nullable: false),
                    PaymentDate = table.Column<DateTime>(nullable: false),
                    LoanId = table.Column<int>(nullable: false),
                    LoanModelLoanId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Payment_PaymentId", x => x.PaymentId);
                    table.ForeignKey(
                        name: "FK_Payment_LoanId_Loan",
                        column: x => x.LoanId,
                        principalTable: "Loan",
                        principalColumn: "LoanId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Payment_Loan_LoanModelLoanId",
                        column: x => x.LoanModelLoanId,
                        principalTable: "Loan",
                        principalColumn: "LoanId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Loan_LoanApplicationId",
                table: "Loan",
                column: "LoanApplicationId");

            migrationBuilder.CreateIndex(
                name: "IX_Loan_ModifiedBy",
                table: "Loan",
                column: "ModifiedBy");

            migrationBuilder.CreateIndex(
                name: "IX_LoanApplication_UserId",
                table: "LoanApplication",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Payment_LoanId",
                table: "Payment",
                column: "LoanId");

            migrationBuilder.CreateIndex(
                name: "IX_Payment_LoanModelLoanId",
                table: "Payment",
                column: "LoanModelLoanId");

            migrationBuilder.CreateIndex(
                name: "UK_User_Email",
                table: "user_credential",
                column: "Email",
                unique: true,
                filter: "[Email] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "UK_User_UserName",
                table: "user_credential",
                column: "UserName",
                unique: true,
                filter: "[UserName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_user_map_role_ModifiedBy",
                table: "user_map_role",
                column: "ModifiedBy");

            migrationBuilder.CreateIndex(
                name: "IX_user_map_role_RoleId",
                table: "user_map_role",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "IX_user_role_UserId",
                table: "user_role",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Payment");

            migrationBuilder.DropTable(
                name: "user_map_role");

            migrationBuilder.DropTable(
                name: "Loan");

            migrationBuilder.DropTable(
                name: "user_role");

            migrationBuilder.DropTable(
                name: "LoanApplication");

            migrationBuilder.DropTable(
                name: "user_credential");
        }
    }
}
