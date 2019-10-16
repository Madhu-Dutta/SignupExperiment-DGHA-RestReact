CREATE TABLE [dbo].[MemberLogin](    

    [Id] [int] IDENTITY(1,1) NOT NULL,    

	[FirstName] [varchar](MAX) NOT NULL,    

    [LastName] VARCHAR(MAX) NOT NULL,  

	[UserName] VARCHAR(MAX) NOT NULL, 

    [Email] NVARCHAR(MAX) NOT NULL,    

    [Password] NVARCHAR(MAX) NOT NULL, 

    CONSTRAINT [PK_MemberLogin] PRIMARY KEY CLUSTERED ([Id] ASC),

)