/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function AddEditSale(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditSale screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Sale" type="msls.application.Sale">
        /// Gets or sets the sale for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditSale.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditSale", parameters);
    }

    function BrowseSales(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseSales screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Sales" type="msls.VisualCollection" elementType="msls.application.Sale">
        /// Gets the sales for this screen.
        /// </field>
        /// <field name="TotalCommision" type="String">
        /// Gets or sets the totalCommision for this screen.
        /// </field>
        /// <field name="MyPermissions" type="msls.VisualCollection" elementType="msls.application.UserPermission">
        /// Gets the myPermissions for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseSales.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseSales", parameters);
    }

    function ViewSale(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewSale screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Sale" type="msls.application.Sale">
        /// Gets or sets the sale for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewSale.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewSale", parameters);
    }

    function AddEditUser(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditUser screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="User" type="msls.application.User">
        /// Gets or sets the user for this screen.
        /// </field>
        /// <field name="UserPermissions" type="msls.VisualCollection" elementType="msls.application.UserPermission">
        /// Gets the userPermissions for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditUser.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditUser", parameters);
    }

    function ViewUser(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewUser screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="User" type="msls.application.User">
        /// Gets or sets the user for this screen.
        /// </field>
        /// <field name="UserPermissions" type="msls.VisualCollection" elementType="msls.application.UserPermission">
        /// Gets the userPermissions for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewUser.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewUser", parameters);
    }

    function BrowseUsers(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseUsers screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Users" type="msls.VisualCollection" elementType="msls.application.User">
        /// Gets the users for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseUsers.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseUsers", parameters);
    }

    function AddEditPermission(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditPermission screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Permission" type="msls.application.Permission">
        /// Gets or sets the permission for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditPermission.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditPermission", parameters);
    }

    function ViewPermission(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewPermission screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Permission" type="msls.application.Permission">
        /// Gets or sets the permission for this screen.
        /// </field>
        /// <field name="UserPermissions" type="msls.VisualCollection" elementType="msls.application.UserPermission">
        /// Gets the userPermissions for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewPermission.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewPermission", parameters);
    }

    function BrowsePermissions(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowsePermissions screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Permissions" type="msls.VisualCollection" elementType="msls.application.Permission">
        /// Gets the permissions for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowsePermissions.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowsePermissions", parameters);
    }

    function AddEditUserPermission(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditUserPermission screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="UserPermission" type="msls.application.UserPermission">
        /// Gets or sets the userPermission for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditUserPermission.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditUserPermission", parameters);
    }

    function ViewUserPermission(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewUserPermission screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="UserPermission" type="msls.application.UserPermission">
        /// Gets or sets the userPermission for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewUserPermission.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewUserPermission", parameters);
    }

    function BrowseUserPermissions(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseUserPermissions screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="UserPermissions" type="msls.VisualCollection" elementType="msls.application.UserPermission">
        /// Gets the userPermissions for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseUserPermissions.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseUserPermissions", parameters);
    }

    msls._addToNamespace("msls.application", {

        AddEditSale: $defineScreen(AddEditSale, [
            { name: "Sale", kind: "local", type: lightSwitchApplication.Sale }
        ], [
        ]),

        BrowseSales: $defineScreen(BrowseSales, [
            {
                name: "Sales", kind: "collection", elementType: lightSwitchApplication.Sale,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.Sales;
                }
            },
            { name: "TotalCommision", kind: "local", type: String },
            {
                name: "MyPermissions", kind: "collection", elementType: lightSwitchApplication.UserPermission,
                createQuery: function (PermissionName) {
                    return this.dataWorkspace.ApplicationData.MyPermissions(PermissionName).expand("Permission").expand("User");
                }
            }
        ], [
        ]),

        ViewSale: $defineScreen(ViewSale, [
            { name: "Sale", kind: "local", type: lightSwitchApplication.Sale }
        ], [
        ]),

        AddEditUser: $defineScreen(AddEditUser, [
            { name: "User", kind: "local", type: lightSwitchApplication.User },
            {
                name: "UserPermissions", kind: "collection", elementType: lightSwitchApplication.UserPermission,
                getNavigationProperty: function () {
                    if (this.owner.User) {
                        return this.owner.User.details.properties.UserPermissions;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("Permission").expand("User");
                }
            }
        ], [
        ]),

        ViewUser: $defineScreen(ViewUser, [
            { name: "User", kind: "local", type: lightSwitchApplication.User },
            {
                name: "UserPermissions", kind: "collection", elementType: lightSwitchApplication.UserPermission,
                getNavigationProperty: function () {
                    if (this.owner.User) {
                        return this.owner.User.details.properties.UserPermissions;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("Permission");
                }
            }
        ], [
        ]),

        BrowseUsers: $defineScreen(BrowseUsers, [
            {
                name: "Users", kind: "collection", elementType: lightSwitchApplication.User,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.Users;
                }
            }
        ], [
        ]),

        AddEditPermission: $defineScreen(AddEditPermission, [
            { name: "Permission", kind: "local", type: lightSwitchApplication.Permission }
        ], [
        ]),

        ViewPermission: $defineScreen(ViewPermission, [
            { name: "Permission", kind: "local", type: lightSwitchApplication.Permission },
            {
                name: "UserPermissions", kind: "collection", elementType: lightSwitchApplication.UserPermission,
                getNavigationProperty: function () {
                    if (this.owner.Permission) {
                        return this.owner.Permission.details.properties.UserPermissions;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("User");
                }
            }
        ], [
        ]),

        BrowsePermissions: $defineScreen(BrowsePermissions, [
            {
                name: "Permissions", kind: "collection", elementType: lightSwitchApplication.Permission,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.Permissions;
                }
            }
        ], [
        ]),

        AddEditUserPermission: $defineScreen(AddEditUserPermission, [
            { name: "UserPermission", kind: "local", type: lightSwitchApplication.UserPermission }
        ], [
        ]),

        ViewUserPermission: $defineScreen(ViewUserPermission, [
            { name: "UserPermission", kind: "local", type: lightSwitchApplication.UserPermission }
        ], [
        ]),

        BrowseUserPermissions: $defineScreen(BrowseUserPermissions, [
            {
                name: "UserPermissions", kind: "collection", elementType: lightSwitchApplication.UserPermission,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.UserPermissions.expand("Permission");
                }
            }
        ], [
        ]),

        showAddEditSale: $defineShowScreen(function showAddEditSale(Sale, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditSale screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditSale", parameters, options);
        }),

        showBrowseSales: $defineShowScreen(function showBrowseSales(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseSales screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseSales", parameters, options);
        }),

        showViewSale: $defineShowScreen(function showViewSale(Sale, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewSale screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewSale", parameters, options);
        }),

        showAddEditUser: $defineShowScreen(function showAddEditUser(User, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditUser screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditUser", parameters, options);
        }),

        showViewUser: $defineShowScreen(function showViewUser(User, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewUser screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewUser", parameters, options);
        }),

        showBrowseUsers: $defineShowScreen(function showBrowseUsers(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseUsers screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseUsers", parameters, options);
        }),

        showAddEditPermission: $defineShowScreen(function showAddEditPermission(Permission, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditPermission screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditPermission", parameters, options);
        }),

        showViewPermission: $defineShowScreen(function showViewPermission(Permission, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewPermission screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewPermission", parameters, options);
        }),

        showBrowsePermissions: $defineShowScreen(function showBrowsePermissions(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowsePermissions screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowsePermissions", parameters, options);
        }),

        showAddEditUserPermission: $defineShowScreen(function showAddEditUserPermission(UserPermission, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditUserPermission screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditUserPermission", parameters, options);
        }),

        showViewUserPermission: $defineShowScreen(function showViewUserPermission(UserPermission, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewUserPermission screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewUserPermission", parameters, options);
        }),

        showBrowseUserPermissions: $defineShowScreen(function showBrowseUserPermissions(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseUserPermissions screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseUserPermissions", parameters, options);
        })

    });

}(msls.application));
