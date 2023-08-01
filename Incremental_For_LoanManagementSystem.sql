-- START: Nirmala Sharma, 7/19/2023 -- Incremental of Loan Management System ---
GO
-- Create Database --
CREATE Database Loan; 
GO
USE Loan;
GO
--- Table To Store User Credentials ---
CREATE TABLE user_credential (
    [UserId] [int] IDENTITY(1,1) NOT NULL,
    [UserName] [nvarchar](100) NOT NULL,
    [Password] [nvarchar](100) NOT NULL,
    [Email] [varchar](100) NOT NULL,
    [Name] [varchar](200) NOT NULL,
    [Address] [Varchar](200) NOT NULL,
    [Contact] [Varchar](50) NOT NULL,
    [CreatedBy] [int] NULL,
    [CreatedOn] [datetime] NOT NULL,
    [ModifiedBy] [int] NULL,
    [ModifiedOn] [datetime] NULL,
    [IsActive] [bit] NOT NULL
    CONSTRAINT DF_user_credential_IsActive DEFAULT 1,
    CONSTRAINT PK_user_credential_UserId PRIMARY KEY (UserId),
    CONSTRAINT UK_user_credential_Email UNIQUE (Email),
    CONSTRAINT UK_user_credential_UserName UNIQUE (UserName),
    CONSTRAINT FK_user_credential_CreatedBy_user_credential FOREIGN KEY (CreatedBy) REFERENCES user_credential(UserId),
    CONSTRAINT FK_user_credential_ModifiedBy_user_credential FOREIGN KEY (ModifiedBy) REFERENCES user_credential(UserId),
    );
    -- CreatedBy  and ModifiedBy is used in case if the account is created by any employee 
GO
-- This is for manual data insertion so running it multiple times will generate error as it has Key Constrainst
GO
INSERT INTO [dbo].[user_credential](
           [UserName]
           ,[Password]
           ,[Email]
           ,[Name]
           ,[Address],
           [Contact]
           ,[CreatedBy]
           ,[CreatedOn]
           ,[ModifiedBy]
           ,[ModifiedOn]
           ,[IsActive])
     VALUES
           (
           'Admin',
           '0EWlcbvqsb0=',
           'admin@gmail.com',
           'bibek',
           'DHN',
           '123345',
           NULL,
           '7-18-2023',
           NULL,
           NULL,
           1
           )
GO
--This Table is for inserting Roles like Admin,Client --
CREATE TABLE user_role(
    [RoleId] [int] IDENTITY(1,1) NOT NULL,
    [RoleName] [varchar](50) NOT NULL,
    [RoleDescription] [varchar](250) NULL,
    [IsSysAdmin] [bit] NULL,
    [IsActive] [bit] NOT NULL
    CONSTRAINT DF_user_role_IsActive DEFAULT 1,
    [CreatedBy] [int]  NULL,
    [CreatedOn] [datetime] NULL,
    [ModifiedBy] [int] NULL,
    [ModifiedOn] [datetime] NULL,
    [RoleType] [varchar](20) NULL,
    CONSTRAINT PK_user_role_RoleId PRIMARY KEY (RoleId),
    CONSTRAINT UK_user_role_RoleName UNIQUE (RoleName)
  )
  GO
  -- This table is for mapping of user and role
  CREATE TABLE user_map_role(
    [UserRoleMapId] [int] IDENTITY(1,1) NOT NULL,
    [UserId] [int] NULL,
    [RoleId] [int] NULL,
    [CreatedBy] [int] NULL,
    [CreatedOn] [datetime] NULL,
    [ModifiedBy] [int] NULL,
    [ModifiedOn] [datetime] NULL,
    [IsActive] [bit] NOT NULL
    CONSTRAINT DF_user_map_role_IsActive DEFAULT 1,
    CONSTRAINT PK_user_map_role_UserRoleMapId PRIMARY KEY (UserRoleMapId),
    CONSTRAINT FK_user_map_role_UserId_user_credential FOREIGN KEY (UserId) REFERENCES user_credential(UserId),
    CONSTRAINT FK_user_map_role_RoleId_user_role FOREIGN KEY (RoleId) REFERENCES user_role(RoleId),
    CONSTRAINT FK_user_map_role_CreatedBy_user_credential FOREIGN KEY (CreatedBy) REFERENCES user_credential(UserId),
    CONSTRAINT FK_user_map_role_ModifiedBy_user_credential FOREIGN KEY (ModifiedBy) REFERENCES user_credential(UserId)    )
GO
-- Since there is no Interface for roles insertion so this is manual insertion.As it has Unique Key constrainst so run it only one time
INSERT INTO user_role
           ([RoleName]
           ,[RoleDescription]
           ,[IsSysAdmin]
           ,[IsActive]
           ,[CreatedBy]
           ,[CreatedOn]
           ,[ModifiedBy]
           ,[ModifiedOn]
           ,[RoleType])
     VALUES
           (
           'Admin',
           'SystemAdministrator',
           1,
           1,
           1,
           '7-18-2023',
           NULL,
           NULL,
           'custom'
           )
GO
INSERT INTO user_role
           ([RoleName]
           ,[RoleDescription]
           ,[IsSysAdmin]
           ,[IsActive]
           ,[CreatedBy]
           ,[CreatedOn]
           ,[ModifiedBy]
           ,[ModifiedOn]
           ,[RoleType])
     VALUES
           (
           'Client',
           'Customer',
           0,
           1,
           1,
           '7-18-2023',
           NULL,
           NULL,
           'custom'
           )
GO
Declare @UserId int = (SELECT UserId from user_credential WHERE UserName = 'Admin')
Declare @RoleId int = (SELECT RoleId from user_role WHERE RoleName = 'Admin') 
INSERT INTO [dbo].[user_map_role]
           ([UserId]
           ,[RoleId]
           ,[CreatedBy]
           ,[CreatedOn]
           ,[ModifiedBy]
           ,[ModifiedOn]
           ,[IsActive])
     VALUES
           (
           @UserId,
           @RoleId,
           @UserId,
           '7-18-2023',
           NULL,
           NULL,
           1
           )
GO
--When Client Apply for the Loan the data will be store in LoanApplication table
CREATE TABLE LoanApplication(
LoanApplicationId int IDENTITY(1,1) NOT NULL,
CONSTRAINT PK_LoanApplication_LoanApplicationId PRIMARY KEY (LoanApplicationId),
CustomerName Varchar(100),
LoanAmount decimal(10,3),
ApplicationDate DateTime,
LoanPeriod int NOT NULL,
Email Varchar(100) NOT NULL,
Contact Varchar(50) NOT NULL,
Status Varchar(150),          -- InProgress, Accepted , Rejected
CreatedOn DateTime NOT NULL,
ModifiedBy int NULL,
UserId int NOT NULL,
ModifiedOn DateTime NULL,
IsActive bit NOT NULL
CONSTRAINT DF_LoanApplication_IsActive DEFAULT 1,
CONSTRAINT FK_LoanApplication_UserId_user_credential FOREIGN KEY (UserId) REFERENCES user_credential(UserId),
CONSTRAINT FK_LoanApplication_ModifiedBy_user_credential FOREIGN KEY (ModifiedBy) REFERENCES user_credential(UserId)
)
GO
--Once Loan is approved the detail of the loan is stored in this table for the further processing ---
CREATE TABLE Loan (
LoanId int IDENTITY(1,1) NOT NULL,
CONSTRAINT PK_Loan_LoanId PRIMARY KEY (LoanId),
Amount decimal(10,4) NOT NULL,
InterestRate decimal(10,4),
StartDate DateTime NOT NULL,
EndDate DateTime NOT NULL,
Status Varchar(100) NOT NULL,
LoanApplicationId int NOT NULL,
CreatedBy int NOT NULL,
CreatedOn DateTime NOT NULL,
ModifiedBy int NULL,
ModifiedOn DateTime NULL,
Email Varchar(100) NOT NULL,
BalanceAmount decimal(10,4) NOT NULL,
CONSTRAINT FK_Loan_CreatedBy_user_credential FOREIGN KEY (CreatedBy) REFERENCES user_credential(UserId),
CONSTRAINT FK_Loan_ModifiedBy_user_credential FOREIGN KEY (ModifiedBy) REFERENCES user_credential(UserId),
CONSTRAINT FK_Loan_LoanApplicationId_LoanApplication FOREIGN KEY (LoanApplicationId) REFERENCES LoanApplication(LoanApplicationId)
)
GO
-- Payment Related Information after the loan period started will be stored here ----
CREATE TABLE Payment(
PaymentId INT IDENTITY(1,1) NOT NULL,
CONSTRAINT PK_Payment_PaymentId PRIMARY KEY (PaymentId),
Amount decimal(10,4) NOT NULL,
PaymentDate DateTime NOT NULL,
LoanId int NOT NULL,
CONSTRAINT FK_Payment_LoanId_Loan FOREIGN KEY (LoanId) REFERENCES Loan (LoanId)
)
GO
-- END: Nirmala Sharma, 7/19/2023 -- Incremental of Loan Management System ---