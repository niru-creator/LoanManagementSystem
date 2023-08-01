-- START: Nirmala Sharma, 7/19/2023 -- Incremental of Loan Management System ---
GO
-- Create Database --
CREATE Database LoanDatabase; 
GO
USE LoanDatabase;
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
           '0EWlcbvqsb0=',   --sharma
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
--There are two roles Admin and Client
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
-- Manually doing mapping of User and Role of Admin
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
-- END: Nirmala Sharma, 7/19/2023 -- Incremental of Loan Management System ---