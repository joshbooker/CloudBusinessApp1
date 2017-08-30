﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

// Original file name:
// Generation date: 8/30/2017 11:37:09 AM
namespace SharePointData.SharePointDataService
{
    
    /// <summary>
    /// There are no comments for AppCatalogDataContext in the schema.
    /// </summary>
    public partial class AppCatalogDataContext : global::System.Data.Services.Client.DataServiceContext
    {
        /// <summary>
        /// Initialize a new AppCatalogDataContext object.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public AppCatalogDataContext(global::System.Uri serviceRoot) : 
                base(serviceRoot)
        {
            this.ResolveName = new global::System.Func<global::System.Type, string>(this.ResolveNameFromType);
            this.ResolveType = new global::System.Func<string, global::System.Type>(this.ResolveTypeFromName);
            this.OnContextCreated();
        }
        partial void OnContextCreated();
        /// <summary>
        /// Since the namespace configured for this service reference
        /// in Visual Studio is different from the one indicated in the
        /// server schema, use type-mappers to map between the two.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        protected global::System.Type ResolveTypeFromName(string typeName)
        {
            global::System.Type resolvedType = this.DefaultResolveType(typeName, "Microsoft.SharePoint.DataService", "SharePointData.SharePointDataService");
            if ((resolvedType != null))
            {
                return resolvedType;
            }
            return null;
        }
        /// <summary>
        /// Since the namespace configured for this service reference
        /// in Visual Studio is different from the one indicated in the
        /// server schema, use type-mappers to map between the two.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        protected string ResolveNameFromType(global::System.Type clientType)
        {
            if (clientType.Namespace.Equals("SharePointData.SharePointDataService", global::System.StringComparison.Ordinal))
            {
                return string.Concat("Microsoft.SharePoint.DataService.", clientType.Name);
            }
            return null;
        }
        /// <summary>
        /// There are no comments for UserInformationList in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public global::System.Data.Services.Client.DataServiceQuery<UserInformationListItem> UserInformationList
        {
            get
            {
                if ((this._UserInformationList == null))
                {
                    this._UserInformationList = base.CreateQuery<UserInformationListItem>("UserInformationList");
                }
                return this._UserInformationList;
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private global::System.Data.Services.Client.DataServiceQuery<UserInformationListItem> _UserInformationList;
        /// <summary>
        /// There are no comments for UserInformationList in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public void AddToUserInformationList(UserInformationListItem userInformationListItem)
        {
            base.AddObject("UserInformationList", userInformationListItem);
        }
    }
    /// <summary>
    /// There are no comments for Microsoft.SharePoint.DataService.UserInformationListItem in the schema.
    /// </summary>
    /// <KeyProperties>
    /// Id
    /// </KeyProperties>
    [global::System.Data.Services.Common.EntityPropertyMappingAttribute("Name", global::System.Data.Services.Common.SyndicationItemProperty.Title, global::System.Data.Services.Common.SyndicationTextContentKind.Plaintext, true)]
    [global::System.Data.Services.Common.EntityPropertyMappingAttribute("Modified", global::System.Data.Services.Common.SyndicationItemProperty.Updated, global::System.Data.Services.Common.SyndicationTextContentKind.Plaintext, true)]
    [global::System.Data.Services.Common.DataServiceKeyAttribute("Id")]
    public partial class UserInformationListItem
    {
        /// <summary>
        /// Create a new UserInformationListItem object.
        /// </summary>
        /// <param name="ID">Initial value of Id.</param>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public static UserInformationListItem CreateUserInformationListItem(int ID)
        {
            UserInformationListItem userInformationListItem = new UserInformationListItem();
            userInformationListItem.Id = ID;
            return userInformationListItem;
        }
        /// <summary>
        /// There are no comments for Property ContentTypeID in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public string ContentTypeID
        {
            get
            {
                return this._ContentTypeID;
            }
            set
            {
                this.OnContentTypeIDChanging(value);
                this._ContentTypeID = value;
                this.OnContentTypeIDChanged();
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private string _ContentTypeID;
        partial void OnContentTypeIDChanging(string value);
        partial void OnContentTypeIDChanged();
        /// <summary>
        /// There are no comments for Property Name in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public string Name
        {
            get
            {
                return this._Name;
            }
            set
            {
                this.OnNameChanging(value);
                this._Name = value;
                this.OnNameChanged();
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private string _Name;
        partial void OnNameChanging(string value);
        partial void OnNameChanged();
        /// <summary>
        /// There are no comments for Property Account in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public string Account
        {
            get
            {
                return this._Account;
            }
            set
            {
                this.OnAccountChanging(value);
                this._Account = value;
                this.OnAccountChanged();
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private string _Account;
        partial void OnAccountChanging(string value);
        partial void OnAccountChanged();
        /// <summary>
        /// There are no comments for Property WorkEmail in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public string WorkEmail
        {
            get
            {
                return this._WorkEmail;
            }
            set
            {
                this.OnWorkEmailChanging(value);
                this._WorkEmail = value;
                this.OnWorkEmailChanged();
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private string _WorkEmail;
        partial void OnWorkEmailChanging(string value);
        partial void OnWorkEmailChanged();
        /// <summary>
        /// There are no comments for Property MobilePhone in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public string MobilePhone
        {
            get
            {
                return this._MobilePhone;
            }
            set
            {
                this.OnMobilePhoneChanging(value);
                this._MobilePhone = value;
                this.OnMobilePhoneChanged();
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private string _MobilePhone;
        partial void OnMobilePhoneChanging(string value);
        partial void OnMobilePhoneChanged();
        /// <summary>
        /// There are no comments for Property AboutMe in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public string AboutMe
        {
            get
            {
                return this._AboutMe;
            }
            set
            {
                this.OnAboutMeChanging(value);
                this._AboutMe = value;
                this.OnAboutMeChanged();
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private string _AboutMe;
        partial void OnAboutMeChanging(string value);
        partial void OnAboutMeChanged();
        /// <summary>
        /// There are no comments for Property SIPAddress in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public string SIPAddress
        {
            get
            {
                return this._SIPAddress;
            }
            set
            {
                this.OnSIPAddressChanging(value);
                this._SIPAddress = value;
                this.OnSIPAddressChanged();
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private string _SIPAddress;
        partial void OnSIPAddressChanging(string value);
        partial void OnSIPAddressChanged();
        /// <summary>
        /// There are no comments for Property IsSiteAdmin in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public global::System.Nullable<bool> IsSiteAdmin
        {
            get
            {
                return this._IsSiteAdmin;
            }
            set
            {
                this.OnIsSiteAdminChanging(value);
                this._IsSiteAdmin = value;
                this.OnIsSiteAdminChanged();
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private global::System.Nullable<bool> _IsSiteAdmin;
        partial void OnIsSiteAdminChanging(global::System.Nullable<bool> value);
        partial void OnIsSiteAdminChanged();
        /// <summary>
        /// There are no comments for Property Deleted in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public global::System.Nullable<bool> Deleted
        {
            get
            {
                return this._Deleted;
            }
            set
            {
                this.OnDeletedChanging(value);
                this._Deleted = value;
                this.OnDeletedChanged();
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private global::System.Nullable<bool> _Deleted;
        partial void OnDeletedChanging(global::System.Nullable<bool> value);
        partial void OnDeletedChanged();
        /// <summary>
        /// There are no comments for Property Hidden in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public global::System.Nullable<bool> Hidden
        {
            get
            {
                return this._Hidden;
            }
            set
            {
                this.OnHiddenChanging(value);
                this._Hidden = value;
                this.OnHiddenChanged();
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private global::System.Nullable<bool> _Hidden;
        partial void OnHiddenChanging(global::System.Nullable<bool> value);
        partial void OnHiddenChanged();
        /// <summary>
        /// There are no comments for Property Picture in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public string Picture
        {
            get
            {
                return this._Picture;
            }
            set
            {
                this.OnPictureChanging(value);
                this._Picture = value;
                this.OnPictureChanged();
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private string _Picture;
        partial void OnPictureChanging(string value);
        partial void OnPictureChanged();
        /// <summary>
        /// There are no comments for Property Department in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public string Department
        {
            get
            {
                return this._Department;
            }
            set
            {
                this.OnDepartmentChanging(value);
                this._Department = value;
                this.OnDepartmentChanged();
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private string _Department;
        partial void OnDepartmentChanging(string value);
        partial void OnDepartmentChanged();
        /// <summary>
        /// There are no comments for Property Title in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public string Title
        {
            get
            {
                return this._Title;
            }
            set
            {
                this.OnTitleChanging(value);
                this._Title = value;
                this.OnTitleChanged();
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private string _Title;
        partial void OnTitleChanging(string value);
        partial void OnTitleChanged();
        /// <summary>
        /// There are no comments for Property FirstName in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public string FirstName
        {
            get
            {
                return this._FirstName;
            }
            set
            {
                this.OnFirstNameChanging(value);
                this._FirstName = value;
                this.OnFirstNameChanged();
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private string _FirstName;
        partial void OnFirstNameChanging(string value);
        partial void OnFirstNameChanged();
        /// <summary>
        /// There are no comments for Property LastName in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public string LastName
        {
            get
            {
                return this._LastName;
            }
            set
            {
                this.OnLastNameChanging(value);
                this._LastName = value;
                this.OnLastNameChanged();
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private string _LastName;
        partial void OnLastNameChanging(string value);
        partial void OnLastNameChanged();
        /// <summary>
        /// There are no comments for Property WorkPhone in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public string WorkPhone
        {
            get
            {
                return this._WorkPhone;
            }
            set
            {
                this.OnWorkPhoneChanging(value);
                this._WorkPhone = value;
                this.OnWorkPhoneChanged();
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private string _WorkPhone;
        partial void OnWorkPhoneChanging(string value);
        partial void OnWorkPhoneChanged();
        /// <summary>
        /// There are no comments for Property UserName in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public string UserName
        {
            get
            {
                return this._UserName;
            }
            set
            {
                this.OnUserNameChanging(value);
                this._UserName = value;
                this.OnUserNameChanged();
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private string _UserName;
        partial void OnUserNameChanging(string value);
        partial void OnUserNameChanged();
        /// <summary>
        /// There are no comments for Property WebSite in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public string WebSite
        {
            get
            {
                return this._WebSite;
            }
            set
            {
                this.OnWebSiteChanging(value);
                this._WebSite = value;
                this.OnWebSiteChanged();
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private string _WebSite;
        partial void OnWebSiteChanging(string value);
        partial void OnWebSiteChanged();
        /// <summary>
        /// There are no comments for Property AskMeAbout in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public string AskMeAbout
        {
            get
            {
                return this._AskMeAbout;
            }
            set
            {
                this.OnAskMeAboutChanging(value);
                this._AskMeAbout = value;
                this.OnAskMeAboutChanged();
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private string _AskMeAbout;
        partial void OnAskMeAboutChanging(string value);
        partial void OnAskMeAboutChanged();
        /// <summary>
        /// There are no comments for Property Office in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public string Office
        {
            get
            {
                return this._Office;
            }
            set
            {
                this.OnOfficeChanging(value);
                this._Office = value;
                this.OnOfficeChanged();
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private string _Office;
        partial void OnOfficeChanging(string value);
        partial void OnOfficeChanged();
        /// <summary>
        /// There are no comments for Property PictureTimestamp in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public string PictureTimestamp
        {
            get
            {
                return this._PictureTimestamp;
            }
            set
            {
                this.OnPictureTimestampChanging(value);
                this._PictureTimestamp = value;
                this.OnPictureTimestampChanged();
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private string _PictureTimestamp;
        partial void OnPictureTimestampChanging(string value);
        partial void OnPictureTimestampChanged();
        /// <summary>
        /// There are no comments for Property PicturePlaceholderState in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public global::System.Nullable<int> PicturePlaceholderState
        {
            get
            {
                return this._PicturePlaceholderState;
            }
            set
            {
                this.OnPicturePlaceholderStateChanging(value);
                this._PicturePlaceholderState = value;
                this.OnPicturePlaceholderStateChanged();
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private global::System.Nullable<int> _PicturePlaceholderState;
        partial void OnPicturePlaceholderStateChanging(global::System.Nullable<int> value);
        partial void OnPicturePlaceholderStateChanged();
        /// <summary>
        /// There are no comments for Property PictureExchangeSyncState in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public global::System.Nullable<int> PictureExchangeSyncState
        {
            get
            {
                return this._PictureExchangeSyncState;
            }
            set
            {
                this.OnPictureExchangeSyncStateChanging(value);
                this._PictureExchangeSyncState = value;
                this.OnPictureExchangeSyncStateChanged();
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private global::System.Nullable<int> _PictureExchangeSyncState;
        partial void OnPictureExchangeSyncStateChanging(global::System.Nullable<int> value);
        partial void OnPictureExchangeSyncStateChanged();
        /// <summary>
        /// There are no comments for Property OtherMail in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public string OtherMail
        {
            get
            {
                return this._OtherMail;
            }
            set
            {
                this.OnOtherMailChanging(value);
                this._OtherMail = value;
                this.OnOtherMailChanged();
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private string _OtherMail;
        partial void OnOtherMailChanging(string value);
        partial void OnOtherMailChanged();
        /// <summary>
        /// There are no comments for Property Id in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public int Id
        {
            get
            {
                return this._Id;
            }
            set
            {
                this.OnIdChanging(value);
                this._Id = value;
                this.OnIdChanged();
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private int _Id;
        partial void OnIdChanging(int value);
        partial void OnIdChanged();
        /// <summary>
        /// There are no comments for Property ContentType in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public string ContentType
        {
            get
            {
                return this._ContentType;
            }
            set
            {
                this.OnContentTypeChanging(value);
                this._ContentType = value;
                this.OnContentTypeChanged();
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private string _ContentType;
        partial void OnContentTypeChanging(string value);
        partial void OnContentTypeChanged();
        /// <summary>
        /// There are no comments for Property Modified in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public global::System.Nullable<global::System.DateTime> Modified
        {
            get
            {
                return this._Modified;
            }
            set
            {
                this.OnModifiedChanging(value);
                this._Modified = value;
                this.OnModifiedChanged();
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private global::System.Nullable<global::System.DateTime> _Modified;
        partial void OnModifiedChanging(global::System.Nullable<global::System.DateTime> value);
        partial void OnModifiedChanged();
        /// <summary>
        /// There are no comments for Property Created in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public global::System.Nullable<global::System.DateTime> Created
        {
            get
            {
                return this._Created;
            }
            set
            {
                this.OnCreatedChanging(value);
                this._Created = value;
                this.OnCreatedChanged();
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private global::System.Nullable<global::System.DateTime> _Created;
        partial void OnCreatedChanging(global::System.Nullable<global::System.DateTime> value);
        partial void OnCreatedChanged();
        /// <summary>
        /// There are no comments for Property CreatedById in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public global::System.Nullable<int> CreatedById
        {
            get
            {
                return this._CreatedById;
            }
            set
            {
                this.OnCreatedByIdChanging(value);
                this._CreatedById = value;
                this.OnCreatedByIdChanged();
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private global::System.Nullable<int> _CreatedById;
        partial void OnCreatedByIdChanging(global::System.Nullable<int> value);
        partial void OnCreatedByIdChanged();
        /// <summary>
        /// There are no comments for Property ModifiedById in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public global::System.Nullable<int> ModifiedById
        {
            get
            {
                return this._ModifiedById;
            }
            set
            {
                this.OnModifiedByIdChanging(value);
                this._ModifiedById = value;
                this.OnModifiedByIdChanged();
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private global::System.Nullable<int> _ModifiedById;
        partial void OnModifiedByIdChanging(global::System.Nullable<int> value);
        partial void OnModifiedByIdChanged();
        /// <summary>
        /// There are no comments for Property Owshiddenversion in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public global::System.Nullable<int> Owshiddenversion
        {
            get
            {
                return this._Owshiddenversion;
            }
            set
            {
                this.OnOwshiddenversionChanging(value);
                this._Owshiddenversion = value;
                this.OnOwshiddenversionChanged();
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private global::System.Nullable<int> _Owshiddenversion;
        partial void OnOwshiddenversionChanging(global::System.Nullable<int> value);
        partial void OnOwshiddenversionChanged();
        /// <summary>
        /// There are no comments for Property Version in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public string Version
        {
            get
            {
                return this._Version;
            }
            set
            {
                this.OnVersionChanging(value);
                this._Version = value;
                this.OnVersionChanged();
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private string _Version;
        partial void OnVersionChanging(string value);
        partial void OnVersionChanged();
        /// <summary>
        /// There are no comments for Property Path in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public string Path
        {
            get
            {
                return this._Path;
            }
            set
            {
                this.OnPathChanging(value);
                this._Path = value;
                this.OnPathChanged();
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private string _Path;
        partial void OnPathChanging(string value);
        partial void OnPathChanged();
        /// <summary>
        /// There are no comments for CreatedBy in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public UserInformationListItem CreatedBy
        {
            get
            {
                return this._CreatedBy;
            }
            set
            {
                this._CreatedBy = value;
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private UserInformationListItem _CreatedBy;
        /// <summary>
        /// There are no comments for ModifiedBy in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public UserInformationListItem ModifiedBy
        {
            get
            {
                return this._ModifiedBy;
            }
            set
            {
                this._ModifiedBy = value;
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private UserInformationListItem _ModifiedBy;
    }
}