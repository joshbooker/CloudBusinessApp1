/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.AddEditSale.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditSale
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditSale,
            data: lightSwitchApplication.AddEditSale,
            value: lightSwitchApplication.AddEditSale
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditSale,
            data: lightSwitchApplication.AddEditSale,
            value: lightSwitchApplication.Sale
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditSale,
            data: lightSwitchApplication.Sale,
            value: lightSwitchApplication.Sale
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditSale,
            data: lightSwitchApplication.Sale,
            value: String
        },
        Price: {
            _$class: msls.ContentItem,
            _$name: "Price",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditSale,
            data: lightSwitchApplication.Sale,
            value: String
        },
        Commision: {
            _$class: msls.ContentItem,
            _$name: "Commision",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditSale,
            data: lightSwitchApplication.Sale,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditSale,
            data: lightSwitchApplication.Sale,
            value: lightSwitchApplication.Sale
        },
        SaleDate: {
            _$class: msls.ContentItem,
            _$name: "SaleDate",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditSale,
            data: lightSwitchApplication.Sale,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditSale
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditSale, {
        /// <field>
        /// Called when a new AddEditSale screen is created.
        /// <br/>created(msls.application.AddEditSale screen)
        /// </field>
        created: [lightSwitchApplication.AddEditSale],
        /// <field>
        /// Called before changes on an active AddEditSale screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditSale screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditSale],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditSale().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditSale().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditSale().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditSale().findContentItem("Name"); }],
        /// <field>
        /// Called after the Price content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Price_postRender: [$element, function () { return new lightSwitchApplication.AddEditSale().findContentItem("Price"); }],
        /// <field>
        /// Called after the Commision content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Commision_postRender: [$element, function () { return new lightSwitchApplication.AddEditSale().findContentItem("Commision"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditSale().findContentItem("right"); }],
        /// <field>
        /// Called after the SaleDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SaleDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditSale().findContentItem("SaleDate"); }]
    });

    lightSwitchApplication.BrowseSales.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseSales
        },
        SaleList: {
            _$class: msls.ContentItem,
            _$name: "SaleList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseSales,
            data: lightSwitchApplication.BrowseSales,
            value: lightSwitchApplication.BrowseSales
        },
        Sales: {
            _$class: msls.ContentItem,
            _$name: "Sales",
            _$parentName: "SaleList",
            screen: lightSwitchApplication.BrowseSales,
            data: lightSwitchApplication.BrowseSales,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseSales,
                _$entry: {
                    elementType: lightSwitchApplication.Sale
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Sales",
            screen: lightSwitchApplication.BrowseSales,
            data: lightSwitchApplication.Sale,
            value: lightSwitchApplication.Sale
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseSales,
            data: lightSwitchApplication.Sale,
            value: String
        },
        Id: {
            _$class: msls.ContentItem,
            _$name: "Id",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseSales,
            data: lightSwitchApplication.Sale,
            value: Number
        },
        Price: {
            _$class: msls.ContentItem,
            _$name: "Price",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseSales,
            data: lightSwitchApplication.Sale,
            value: String
        },
        Commision: {
            _$class: msls.ContentItem,
            _$name: "Commision",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseSales,
            data: lightSwitchApplication.Sale,
            value: String
        },
        User: {
            _$class: msls.ContentItem,
            _$name: "User",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseSales,
            data: lightSwitchApplication.Sale,
            value: String
        },
        TotalCommision: {
            _$class: msls.ContentItem,
            _$name: "TotalCommision",
            _$parentName: "SaleList",
            screen: lightSwitchApplication.BrowseSales,
            data: lightSwitchApplication.BrowseSales,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseSales
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseSales, {
        /// <field>
        /// Called when a new BrowseSales screen is created.
        /// <br/>created(msls.application.BrowseSales screen)
        /// </field>
        created: [lightSwitchApplication.BrowseSales],
        /// <field>
        /// Called before changes on an active BrowseSales screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseSales screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseSales],
        /// <field>
        /// Called after the SaleList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SaleList_postRender: [$element, function () { return new lightSwitchApplication.BrowseSales().findContentItem("SaleList"); }],
        /// <field>
        /// Called after the Sales content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Sales_postRender: [$element, function () { return new lightSwitchApplication.BrowseSales().findContentItem("Sales"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseSales().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.BrowseSales().findContentItem("Name"); }],
        /// <field>
        /// Called after the Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_postRender: [$element, function () { return new lightSwitchApplication.BrowseSales().findContentItem("Id"); }],
        /// <field>
        /// Called after the Price content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Price_postRender: [$element, function () { return new lightSwitchApplication.BrowseSales().findContentItem("Price"); }],
        /// <field>
        /// Called after the Commision content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Commision_postRender: [$element, function () { return new lightSwitchApplication.BrowseSales().findContentItem("Commision"); }],
        /// <field>
        /// Called after the User content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        User_postRender: [$element, function () { return new lightSwitchApplication.BrowseSales().findContentItem("User"); }],
        /// <field>
        /// Called after the TotalCommision content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TotalCommision_postRender: [$element, function () { return new lightSwitchApplication.BrowseSales().findContentItem("TotalCommision"); }]
    });

    lightSwitchApplication.ViewSale.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewSale
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewSale,
            data: lightSwitchApplication.ViewSale,
            value: lightSwitchApplication.ViewSale
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewSale,
            data: lightSwitchApplication.ViewSale,
            value: lightSwitchApplication.Sale
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewSale,
            data: lightSwitchApplication.Sale,
            value: lightSwitchApplication.Sale
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewSale,
            data: lightSwitchApplication.Sale,
            value: String
        },
        Price: {
            _$class: msls.ContentItem,
            _$name: "Price",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewSale,
            data: lightSwitchApplication.Sale,
            value: String
        },
        Commision: {
            _$class: msls.ContentItem,
            _$name: "Commision",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewSale,
            data: lightSwitchApplication.Sale,
            value: String
        },
        SaleDate: {
            _$class: msls.ContentItem,
            _$name: "SaleDate",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewSale,
            data: lightSwitchApplication.Sale,
            value: Date
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewSale,
            data: lightSwitchApplication.Sale,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewSale,
            data: lightSwitchApplication.Sale,
            value: lightSwitchApplication.Sale
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewSale,
            data: lightSwitchApplication.Sale,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewSale,
            data: lightSwitchApplication.Sale,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewSale,
            data: lightSwitchApplication.Sale,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewSale
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewSale, {
        /// <field>
        /// Called when a new ViewSale screen is created.
        /// <br/>created(msls.application.ViewSale screen)
        /// </field>
        created: [lightSwitchApplication.ViewSale],
        /// <field>
        /// Called before changes on an active ViewSale screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewSale screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewSale],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewSale().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewSale().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewSale().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.ViewSale().findContentItem("Name"); }],
        /// <field>
        /// Called after the Price content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Price_postRender: [$element, function () { return new lightSwitchApplication.ViewSale().findContentItem("Price"); }],
        /// <field>
        /// Called after the Commision content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Commision_postRender: [$element, function () { return new lightSwitchApplication.ViewSale().findContentItem("Commision"); }],
        /// <field>
        /// Called after the SaleDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SaleDate_postRender: [$element, function () { return new lightSwitchApplication.ViewSale().findContentItem("SaleDate"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewSale().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewSale().findContentItem("right"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.ViewSale().findContentItem("Created"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewSale().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.ViewSale().findContentItem("Modified"); }]
    });

    lightSwitchApplication.AddEditUser.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditUser
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditUser,
            data: lightSwitchApplication.AddEditUser,
            value: lightSwitchApplication.AddEditUser
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditUser,
            data: lightSwitchApplication.AddEditUser,
            value: lightSwitchApplication.User
        },
        SharePointUser: {
            _$class: msls.ContentItem,
            _$name: "SharePointUser",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditUser,
            data: lightSwitchApplication.User,
            value: String
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditUser,
            data: lightSwitchApplication.User,
            value: lightSwitchApplication.User
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditUser,
            data: lightSwitchApplication.User,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditUser,
            data: lightSwitchApplication.User,
            value: lightSwitchApplication.User
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditUser,
            data: lightSwitchApplication.User,
            value: String
        },
        UserPermissions: {
            _$class: msls.ContentItem,
            _$name: "UserPermissions",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditUser,
            data: lightSwitchApplication.AddEditUser,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditUser,
                _$entry: {
                    elementType: lightSwitchApplication.UserPermission
                }
            }
        },
        UserPermissionsTemplate: {
            _$class: msls.ContentItem,
            _$name: "UserPermissionsTemplate",
            _$parentName: "UserPermissions",
            screen: lightSwitchApplication.AddEditUser,
            data: lightSwitchApplication.UserPermission,
            value: lightSwitchApplication.UserPermission
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditUser
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditUser, {
        /// <field>
        /// Called when a new AddEditUser screen is created.
        /// <br/>created(msls.application.AddEditUser screen)
        /// </field>
        created: [lightSwitchApplication.AddEditUser],
        /// <field>
        /// Called before changes on an active AddEditUser screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditUser screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditUser],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditUser().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditUser().findContentItem("columns"); }],
        /// <field>
        /// Called after the SharePointUser content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SharePointUser_postRender: [$element, function () { return new lightSwitchApplication.AddEditUser().findContentItem("SharePointUser"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditUser().findContentItem("left"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.AddEditUser().findContentItem("Email"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditUser().findContentItem("right"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditUser().findContentItem("Name"); }],
        /// <field>
        /// Called after the UserPermissions content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserPermissions_postRender: [$element, function () { return new lightSwitchApplication.AddEditUser().findContentItem("UserPermissions"); }],
        /// <field>
        /// Called after the UserPermissionsTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserPermissionsTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditUser().findContentItem("UserPermissionsTemplate"); }]
    });

    lightSwitchApplication.ViewUser.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewUser
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewUser,
            data: lightSwitchApplication.ViewUser,
            value: lightSwitchApplication.ViewUser
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewUser,
            data: lightSwitchApplication.ViewUser,
            value: lightSwitchApplication.User
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewUser,
            data: lightSwitchApplication.User,
            value: lightSwitchApplication.User
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewUser,
            data: lightSwitchApplication.User,
            value: String
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewUser,
            data: lightSwitchApplication.User,
            value: String
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewUser,
            data: lightSwitchApplication.User,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewUser,
            data: lightSwitchApplication.User,
            value: lightSwitchApplication.User
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewUser,
            data: lightSwitchApplication.User,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewUser,
            data: lightSwitchApplication.User,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewUser,
            data: lightSwitchApplication.User,
            value: Date
        },
        UserPermissions: {
            _$class: msls.ContentItem,
            _$name: "UserPermissions",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewUser,
            data: lightSwitchApplication.ViewUser,
            value: lightSwitchApplication.ViewUser
        },
        UserPermissions1: {
            _$class: msls.ContentItem,
            _$name: "UserPermissions1",
            _$parentName: "UserPermissions",
            screen: lightSwitchApplication.ViewUser,
            data: lightSwitchApplication.ViewUser,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ViewUser,
                _$entry: {
                    elementType: lightSwitchApplication.UserPermission
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "UserPermissions1",
            screen: lightSwitchApplication.ViewUser,
            data: lightSwitchApplication.UserPermission,
            value: lightSwitchApplication.UserPermission
        },
        UserID: {
            _$class: msls.ContentItem,
            _$name: "UserID",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewUser,
            data: lightSwitchApplication.UserPermission,
            value: String
        },
        PermissionID: {
            _$class: msls.ContentItem,
            _$name: "PermissionID",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewUser,
            data: lightSwitchApplication.UserPermission,
            value: String
        },
        Permission: {
            _$class: msls.ContentItem,
            _$name: "Permission",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewUser,
            data: lightSwitchApplication.UserPermission,
            value: lightSwitchApplication.Permission
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewUser
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewUser, {
        /// <field>
        /// Called when a new ViewUser screen is created.
        /// <br/>created(msls.application.ViewUser screen)
        /// </field>
        created: [lightSwitchApplication.ViewUser],
        /// <field>
        /// Called before changes on an active ViewUser screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewUser screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewUser],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewUser().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewUser().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewUser().findContentItem("left"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.ViewUser().findContentItem("Email"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.ViewUser().findContentItem("Name"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewUser().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewUser().findContentItem("right"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.ViewUser().findContentItem("Created"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewUser().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.ViewUser().findContentItem("Modified"); }],
        /// <field>
        /// Called after the UserPermissions content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserPermissions_postRender: [$element, function () { return new lightSwitchApplication.ViewUser().findContentItem("UserPermissions"); }],
        /// <field>
        /// Called after the UserPermissions1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserPermissions1_postRender: [$element, function () { return new lightSwitchApplication.ViewUser().findContentItem("UserPermissions1"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.ViewUser().findContentItem("rows"); }],
        /// <field>
        /// Called after the UserID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserID_postRender: [$element, function () { return new lightSwitchApplication.ViewUser().findContentItem("UserID"); }],
        /// <field>
        /// Called after the PermissionID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PermissionID_postRender: [$element, function () { return new lightSwitchApplication.ViewUser().findContentItem("PermissionID"); }],
        /// <field>
        /// Called after the Permission content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Permission_postRender: [$element, function () { return new lightSwitchApplication.ViewUser().findContentItem("Permission"); }]
    });

    lightSwitchApplication.BrowseUsers.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseUsers
        },
        UserList: {
            _$class: msls.ContentItem,
            _$name: "UserList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseUsers,
            data: lightSwitchApplication.BrowseUsers,
            value: lightSwitchApplication.BrowseUsers
        },
        Users: {
            _$class: msls.ContentItem,
            _$name: "Users",
            _$parentName: "UserList",
            screen: lightSwitchApplication.BrowseUsers,
            data: lightSwitchApplication.BrowseUsers,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseUsers,
                _$entry: {
                    elementType: lightSwitchApplication.User
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Users",
            screen: lightSwitchApplication.BrowseUsers,
            data: lightSwitchApplication.User,
            value: lightSwitchApplication.User
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseUsers,
            data: lightSwitchApplication.User,
            value: String
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseUsers,
            data: lightSwitchApplication.User,
            value: String
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseUsers,
            data: lightSwitchApplication.User,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseUsers
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseUsers, {
        /// <field>
        /// Called when a new BrowseUsers screen is created.
        /// <br/>created(msls.application.BrowseUsers screen)
        /// </field>
        created: [lightSwitchApplication.BrowseUsers],
        /// <field>
        /// Called before changes on an active BrowseUsers screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseUsers screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseUsers],
        /// <field>
        /// Called after the UserList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserList_postRender: [$element, function () { return new lightSwitchApplication.BrowseUsers().findContentItem("UserList"); }],
        /// <field>
        /// Called after the Users content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Users_postRender: [$element, function () { return new lightSwitchApplication.BrowseUsers().findContentItem("Users"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseUsers().findContentItem("rows"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.BrowseUsers().findContentItem("Email"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.BrowseUsers().findContentItem("Name"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.BrowseUsers().findContentItem("CreatedBy"); }]
    });

    lightSwitchApplication.AddEditPermission.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditPermission
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditPermission,
            data: lightSwitchApplication.AddEditPermission,
            value: lightSwitchApplication.AddEditPermission
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditPermission,
            data: lightSwitchApplication.AddEditPermission,
            value: lightSwitchApplication.Permission
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditPermission,
            data: lightSwitchApplication.Permission,
            value: lightSwitchApplication.Permission
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPermission,
            data: lightSwitchApplication.Permission,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditPermission,
            data: lightSwitchApplication.Permission,
            value: lightSwitchApplication.Permission
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditPermission
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditPermission, {
        /// <field>
        /// Called when a new AddEditPermission screen is created.
        /// <br/>created(msls.application.AddEditPermission screen)
        /// </field>
        created: [lightSwitchApplication.AddEditPermission],
        /// <field>
        /// Called before changes on an active AddEditPermission screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditPermission screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditPermission],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditPermission().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditPermission().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditPermission().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditPermission().findContentItem("Name"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditPermission().findContentItem("right"); }]
    });

    lightSwitchApplication.ViewPermission.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewPermission
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewPermission,
            data: lightSwitchApplication.ViewPermission,
            value: lightSwitchApplication.ViewPermission
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewPermission,
            data: lightSwitchApplication.ViewPermission,
            value: lightSwitchApplication.Permission
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewPermission,
            data: lightSwitchApplication.Permission,
            value: lightSwitchApplication.Permission
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewPermission,
            data: lightSwitchApplication.Permission,
            value: String
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewPermission,
            data: lightSwitchApplication.Permission,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewPermission,
            data: lightSwitchApplication.Permission,
            value: Date
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewPermission,
            data: lightSwitchApplication.Permission,
            value: lightSwitchApplication.Permission
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewPermission,
            data: lightSwitchApplication.Permission,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewPermission,
            data: lightSwitchApplication.Permission,
            value: Date
        },
        UserPermissions: {
            _$class: msls.ContentItem,
            _$name: "UserPermissions",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewPermission,
            data: lightSwitchApplication.ViewPermission,
            value: lightSwitchApplication.ViewPermission
        },
        UserPermissions1: {
            _$class: msls.ContentItem,
            _$name: "UserPermissions1",
            _$parentName: "UserPermissions",
            screen: lightSwitchApplication.ViewPermission,
            data: lightSwitchApplication.ViewPermission,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ViewPermission,
                _$entry: {
                    elementType: lightSwitchApplication.UserPermission
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "UserPermissions1",
            screen: lightSwitchApplication.ViewPermission,
            data: lightSwitchApplication.UserPermission,
            value: lightSwitchApplication.UserPermission
        },
        UserID: {
            _$class: msls.ContentItem,
            _$name: "UserID",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewPermission,
            data: lightSwitchApplication.UserPermission,
            value: String
        },
        PermissionID: {
            _$class: msls.ContentItem,
            _$name: "PermissionID",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewPermission,
            data: lightSwitchApplication.UserPermission,
            value: String
        },
        User: {
            _$class: msls.ContentItem,
            _$name: "User",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewPermission,
            data: lightSwitchApplication.UserPermission,
            value: lightSwitchApplication.User
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewPermission
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewPermission, {
        /// <field>
        /// Called when a new ViewPermission screen is created.
        /// <br/>created(msls.application.ViewPermission screen)
        /// </field>
        created: [lightSwitchApplication.ViewPermission],
        /// <field>
        /// Called before changes on an active ViewPermission screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewPermission screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewPermission],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewPermission().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewPermission().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewPermission().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.ViewPermission().findContentItem("Name"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewPermission().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.ViewPermission().findContentItem("Created"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewPermission().findContentItem("right"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewPermission().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.ViewPermission().findContentItem("Modified"); }],
        /// <field>
        /// Called after the UserPermissions content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserPermissions_postRender: [$element, function () { return new lightSwitchApplication.ViewPermission().findContentItem("UserPermissions"); }],
        /// <field>
        /// Called after the UserPermissions1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserPermissions1_postRender: [$element, function () { return new lightSwitchApplication.ViewPermission().findContentItem("UserPermissions1"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.ViewPermission().findContentItem("rows"); }],
        /// <field>
        /// Called after the UserID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserID_postRender: [$element, function () { return new lightSwitchApplication.ViewPermission().findContentItem("UserID"); }],
        /// <field>
        /// Called after the PermissionID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PermissionID_postRender: [$element, function () { return new lightSwitchApplication.ViewPermission().findContentItem("PermissionID"); }],
        /// <field>
        /// Called after the User content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        User_postRender: [$element, function () { return new lightSwitchApplication.ViewPermission().findContentItem("User"); }]
    });

    lightSwitchApplication.BrowsePermissions.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowsePermissions
        },
        PermissionList: {
            _$class: msls.ContentItem,
            _$name: "PermissionList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowsePermissions,
            data: lightSwitchApplication.BrowsePermissions,
            value: lightSwitchApplication.BrowsePermissions
        },
        Permissions: {
            _$class: msls.ContentItem,
            _$name: "Permissions",
            _$parentName: "PermissionList",
            screen: lightSwitchApplication.BrowsePermissions,
            data: lightSwitchApplication.BrowsePermissions,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowsePermissions,
                _$entry: {
                    elementType: lightSwitchApplication.Permission
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Permissions",
            screen: lightSwitchApplication.BrowsePermissions,
            data: lightSwitchApplication.Permission,
            value: lightSwitchApplication.Permission
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowsePermissions,
            data: lightSwitchApplication.Permission,
            value: String
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowsePermissions,
            data: lightSwitchApplication.Permission,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowsePermissions,
            data: lightSwitchApplication.Permission,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowsePermissions
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowsePermissions, {
        /// <field>
        /// Called when a new BrowsePermissions screen is created.
        /// <br/>created(msls.application.BrowsePermissions screen)
        /// </field>
        created: [lightSwitchApplication.BrowsePermissions],
        /// <field>
        /// Called before changes on an active BrowsePermissions screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowsePermissions screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowsePermissions],
        /// <field>
        /// Called after the PermissionList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PermissionList_postRender: [$element, function () { return new lightSwitchApplication.BrowsePermissions().findContentItem("PermissionList"); }],
        /// <field>
        /// Called after the Permissions content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Permissions_postRender: [$element, function () { return new lightSwitchApplication.BrowsePermissions().findContentItem("Permissions"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowsePermissions().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.BrowsePermissions().findContentItem("Name"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.BrowsePermissions().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.BrowsePermissions().findContentItem("Created"); }]
    });

    lightSwitchApplication.AddEditUserPermission.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditUserPermission
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditUserPermission,
            data: lightSwitchApplication.AddEditUserPermission,
            value: lightSwitchApplication.AddEditUserPermission
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditUserPermission,
            data: lightSwitchApplication.AddEditUserPermission,
            value: lightSwitchApplication.UserPermission
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditUserPermission,
            data: lightSwitchApplication.UserPermission,
            value: lightSwitchApplication.UserPermission
        },
        UserID: {
            _$class: msls.ContentItem,
            _$name: "UserID",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditUserPermission,
            data: lightSwitchApplication.UserPermission,
            value: String
        },
        PermissionID: {
            _$class: msls.ContentItem,
            _$name: "PermissionID",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditUserPermission,
            data: lightSwitchApplication.UserPermission,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditUserPermission,
            data: lightSwitchApplication.UserPermission,
            value: lightSwitchApplication.UserPermission
        },
        Permission: {
            _$class: msls.ContentItem,
            _$name: "Permission",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditUserPermission,
            data: lightSwitchApplication.UserPermission,
            value: lightSwitchApplication.Permission
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Permission",
            screen: lightSwitchApplication.AddEditUserPermission,
            data: lightSwitchApplication.Permission,
            value: lightSwitchApplication.Permission
        },
        User: {
            _$class: msls.ContentItem,
            _$name: "User",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditUserPermission,
            data: lightSwitchApplication.UserPermission,
            value: lightSwitchApplication.User
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "User",
            screen: lightSwitchApplication.AddEditUserPermission,
            data: lightSwitchApplication.User,
            value: lightSwitchApplication.User
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditUserPermission
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditUserPermission, {
        /// <field>
        /// Called when a new AddEditUserPermission screen is created.
        /// <br/>created(msls.application.AddEditUserPermission screen)
        /// </field>
        created: [lightSwitchApplication.AddEditUserPermission],
        /// <field>
        /// Called before changes on an active AddEditUserPermission screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditUserPermission screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditUserPermission],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditUserPermission().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditUserPermission().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditUserPermission().findContentItem("left"); }],
        /// <field>
        /// Called after the UserID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserID_postRender: [$element, function () { return new lightSwitchApplication.AddEditUserPermission().findContentItem("UserID"); }],
        /// <field>
        /// Called after the PermissionID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PermissionID_postRender: [$element, function () { return new lightSwitchApplication.AddEditUserPermission().findContentItem("PermissionID"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditUserPermission().findContentItem("right"); }],
        /// <field>
        /// Called after the Permission content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Permission_postRender: [$element, function () { return new lightSwitchApplication.AddEditUserPermission().findContentItem("Permission"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditUserPermission().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the User content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        User_postRender: [$element, function () { return new lightSwitchApplication.AddEditUserPermission().findContentItem("User"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditUserPermission().findContentItem("RowTemplate1"); }]
    });

    lightSwitchApplication.ViewUserPermission.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewUserPermission
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewUserPermission,
            data: lightSwitchApplication.ViewUserPermission,
            value: lightSwitchApplication.ViewUserPermission
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewUserPermission,
            data: lightSwitchApplication.ViewUserPermission,
            value: lightSwitchApplication.UserPermission
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewUserPermission,
            data: lightSwitchApplication.UserPermission,
            value: lightSwitchApplication.UserPermission
        },
        UserID: {
            _$class: msls.ContentItem,
            _$name: "UserID",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewUserPermission,
            data: lightSwitchApplication.UserPermission,
            value: String
        },
        PermissionID: {
            _$class: msls.ContentItem,
            _$name: "PermissionID",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewUserPermission,
            data: lightSwitchApplication.UserPermission,
            value: String
        },
        Permission: {
            _$class: msls.ContentItem,
            _$name: "Permission",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewUserPermission,
            data: lightSwitchApplication.UserPermission,
            value: lightSwitchApplication.Permission
        },
        User: {
            _$class: msls.ContentItem,
            _$name: "User",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewUserPermission,
            data: lightSwitchApplication.UserPermission,
            value: lightSwitchApplication.User
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewUserPermission,
            data: lightSwitchApplication.UserPermission,
            value: lightSwitchApplication.UserPermission
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewUserPermission,
            data: lightSwitchApplication.UserPermission,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewUserPermission,
            data: lightSwitchApplication.UserPermission,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewUserPermission,
            data: lightSwitchApplication.UserPermission,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewUserPermission,
            data: lightSwitchApplication.UserPermission,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewUserPermission
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewUserPermission, {
        /// <field>
        /// Called when a new ViewUserPermission screen is created.
        /// <br/>created(msls.application.ViewUserPermission screen)
        /// </field>
        created: [lightSwitchApplication.ViewUserPermission],
        /// <field>
        /// Called before changes on an active ViewUserPermission screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewUserPermission screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewUserPermission],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewUserPermission().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewUserPermission().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewUserPermission().findContentItem("left"); }],
        /// <field>
        /// Called after the UserID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserID_postRender: [$element, function () { return new lightSwitchApplication.ViewUserPermission().findContentItem("UserID"); }],
        /// <field>
        /// Called after the PermissionID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PermissionID_postRender: [$element, function () { return new lightSwitchApplication.ViewUserPermission().findContentItem("PermissionID"); }],
        /// <field>
        /// Called after the Permission content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Permission_postRender: [$element, function () { return new lightSwitchApplication.ViewUserPermission().findContentItem("Permission"); }],
        /// <field>
        /// Called after the User content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        User_postRender: [$element, function () { return new lightSwitchApplication.ViewUserPermission().findContentItem("User"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewUserPermission().findContentItem("right"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewUserPermission().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.ViewUserPermission().findContentItem("Created"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewUserPermission().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.ViewUserPermission().findContentItem("Modified"); }]
    });

    lightSwitchApplication.BrowseUserPermissions.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseUserPermissions
        },
        UserPermissionList: {
            _$class: msls.ContentItem,
            _$name: "UserPermissionList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseUserPermissions,
            data: lightSwitchApplication.BrowseUserPermissions,
            value: lightSwitchApplication.BrowseUserPermissions
        },
        UserPermissions: {
            _$class: msls.ContentItem,
            _$name: "UserPermissions",
            _$parentName: "UserPermissionList",
            screen: lightSwitchApplication.BrowseUserPermissions,
            data: lightSwitchApplication.BrowseUserPermissions,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseUserPermissions,
                _$entry: {
                    elementType: lightSwitchApplication.UserPermission
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "UserPermissions",
            screen: lightSwitchApplication.BrowseUserPermissions,
            data: lightSwitchApplication.UserPermission,
            value: lightSwitchApplication.UserPermission
        },
        UserID: {
            _$class: msls.ContentItem,
            _$name: "UserID",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseUserPermissions,
            data: lightSwitchApplication.UserPermission,
            value: String
        },
        PermissionID: {
            _$class: msls.ContentItem,
            _$name: "PermissionID",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseUserPermissions,
            data: lightSwitchApplication.UserPermission,
            value: String
        },
        Permission: {
            _$class: msls.ContentItem,
            _$name: "Permission",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseUserPermissions,
            data: lightSwitchApplication.UserPermission,
            value: lightSwitchApplication.Permission
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseUserPermissions
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseUserPermissions, {
        /// <field>
        /// Called when a new BrowseUserPermissions screen is created.
        /// <br/>created(msls.application.BrowseUserPermissions screen)
        /// </field>
        created: [lightSwitchApplication.BrowseUserPermissions],
        /// <field>
        /// Called before changes on an active BrowseUserPermissions screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseUserPermissions screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseUserPermissions],
        /// <field>
        /// Called after the UserPermissionList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserPermissionList_postRender: [$element, function () { return new lightSwitchApplication.BrowseUserPermissions().findContentItem("UserPermissionList"); }],
        /// <field>
        /// Called after the UserPermissions content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserPermissions_postRender: [$element, function () { return new lightSwitchApplication.BrowseUserPermissions().findContentItem("UserPermissions"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseUserPermissions().findContentItem("rows"); }],
        /// <field>
        /// Called after the UserID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserID_postRender: [$element, function () { return new lightSwitchApplication.BrowseUserPermissions().findContentItem("UserID"); }],
        /// <field>
        /// Called after the PermissionID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PermissionID_postRender: [$element, function () { return new lightSwitchApplication.BrowseUserPermissions().findContentItem("PermissionID"); }],
        /// <field>
        /// Called after the Permission content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Permission_postRender: [$element, function () { return new lightSwitchApplication.BrowseUserPermissions().findContentItem("Permission"); }]
    });

}(msls.application));