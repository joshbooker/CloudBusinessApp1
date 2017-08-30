/// <reference path="../Scripts/msls.js" />

window.myapp = msls.application;

(function (lightSwitchApplication) {

    var $Entity = msls.Entity,
        $DataService = msls.DataService,
        $DataWorkspace = msls.DataWorkspace,
        $defineEntity = msls._defineEntity,
        $defineDataService = msls._defineDataService,
        $defineDataWorkspace = msls._defineDataWorkspace,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString;

    function Sale(entitySet) {
        /// <summary>
        /// Represents the Sale entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sale.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this sale.
        /// </field>
        /// <field name="Price" type="String">
        /// Gets or sets the price for this sale.
        /// </field>
        /// <field name="Commision" type="String">
        /// Gets or sets the commision for this sale.
        /// </field>
        /// <field name="SaleDate" type="Date">
        /// Gets or sets the saleDate for this sale.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this sale.
        /// </field>
        /// <field name="User" type="String">
        /// Gets or sets the user for this sale.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this sale.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this sale.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this sale.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this sale.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this sale.
        /// </field>
        /// <field name="details" type="msls.application.Sale.Details">
        /// Gets the details for this sale.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function User(entitySet) {
        /// <summary>
        /// Represents the User entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this user.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this user.
        /// </field>
        /// <field name="Email" type="String">
        /// Gets or sets the email for this user.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this user.
        /// </field>
        /// <field name="UserPermissions" type="msls.EntityCollection" elementType="msls.application.UserPermission">
        /// Gets the userPermissions for this user.
        /// </field>
        /// <field name="SharePointUser" type="String">
        /// Gets or sets the sharePointUser for this user.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this user.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this user.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this user.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this user.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this user.
        /// </field>
        /// <field name="details" type="msls.application.User.Details">
        /// Gets the details for this user.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Permission(entitySet) {
        /// <summary>
        /// Represents the Permission entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this permission.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this permission.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this permission.
        /// </field>
        /// <field name="UserPermissions" type="msls.EntityCollection" elementType="msls.application.UserPermission">
        /// Gets the userPermissions for this permission.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this permission.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this permission.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this permission.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this permission.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this permission.
        /// </field>
        /// <field name="details" type="msls.application.Permission.Details">
        /// Gets the details for this permission.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function UserPermission(entitySet) {
        /// <summary>
        /// Represents the UserPermission entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this userPermission.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this userPermission.
        /// </field>
        /// <field name="UserID" type="String">
        /// Gets or sets the userID for this userPermission.
        /// </field>
        /// <field name="PermissionID" type="String">
        /// Gets or sets the permissionID for this userPermission.
        /// </field>
        /// <field name="Permission" type="msls.application.Permission">
        /// Gets or sets the permission for this userPermission.
        /// </field>
        /// <field name="User" type="msls.application.User">
        /// Gets or sets the user for this userPermission.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this userPermission.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this userPermission.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this userPermission.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this userPermission.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this userPermission.
        /// </field>
        /// <field name="details" type="msls.application.UserPermission.Details">
        /// Gets the details for this userPermission.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ApplicationData(dataWorkspace) {
        /// <summary>
        /// Represents the ApplicationData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="Sales" type="msls.EntitySet">
        /// Gets the Sales entity set.
        /// </field>
        /// <field name="Users" type="msls.EntitySet">
        /// Gets the Users entity set.
        /// </field>
        /// <field name="Permissions" type="msls.EntitySet">
        /// Gets the Permissions entity set.
        /// </field>
        /// <field name="UserPermissions" type="msls.EntitySet">
        /// Gets the UserPermissions entity set.
        /// </field>
        /// <field name="details" type="msls.application.ApplicationData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };
    function DataWorkspace() {
        /// <summary>
        /// Represents the data workspace.
        /// </summary>
        /// <field name="ApplicationData" type="msls.application.ApplicationData">
        /// Gets the ApplicationData data service.
        /// </field>
        /// <field name="details" type="msls.application.DataWorkspace.Details">
        /// Gets the details for this data workspace.
        /// </field>
        $DataWorkspace.call(this);
    };

    msls._addToNamespace("msls.application", {

        Sale: $defineEntity(Sale, [
            { name: "Id", type: Number },
            { name: "Price", type: String },
            { name: "Commision", type: String },
            { name: "SaleDate", type: Date },
            { name: "Name", type: String },
            { name: "User", type: String },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        User: $defineEntity(User, [
            { name: "Id", type: Number },
            { name: "Email", type: String },
            { name: "Name", type: String },
            { name: "UserPermissions", kind: "collection", elementType: UserPermission },
            { name: "SharePointUser", type: String },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Permission: $defineEntity(Permission, [
            { name: "Id", type: Number },
            { name: "Name", type: String },
            { name: "UserPermissions", kind: "collection", elementType: UserPermission },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        UserPermission: $defineEntity(UserPermission, [
            { name: "Id", type: Number },
            { name: "UserID", type: String },
            { name: "PermissionID", type: String },
            { name: "Permission", kind: "reference", type: Permission },
            { name: "User", kind: "reference", type: User },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ApplicationData: $defineDataService(ApplicationData, lightSwitchApplication.rootUri + "/ApplicationData.svc", [
            { name: "Sales", elementType: Sale },
            { name: "Users", elementType: User },
            { name: "Permissions", elementType: Permission },
            { name: "UserPermissions", elementType: UserPermission }
        ], [
            {
                name: "Sales_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Sales },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Sales(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Users_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Users },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Users(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Permissions_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Permissions },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Permissions(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "UserPermissions_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.UserPermissions },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/UserPermissions(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "MyPermissions", value: function (PermissionName) {
                    return new $DataServiceQuery({ _entitySet: this.UserPermissions },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/MyPermissions()",
                        {
                            PermissionName: $toODataString(PermissionName, "String?")
                        });
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "ApplicationData", type: ApplicationData }
        ])

    });

}(msls.application));
