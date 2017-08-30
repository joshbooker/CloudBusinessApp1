/// <reference path="data.js" />

(function (lightSwitchApplication) {

    msls._addEntryPoints(lightSwitchApplication.Sale, {
        /// <field>
        /// Called when a new sale is created.
        /// <br/>created(msls.application.Sale entity)
        /// </field>
        created: [lightSwitchApplication.Sale]
    });

    msls._addEntryPoints(lightSwitchApplication.User, {
        /// <field>
        /// Called when a new user is created.
        /// <br/>created(msls.application.User entity)
        /// </field>
        created: [lightSwitchApplication.User]
    });

    msls._addEntryPoints(lightSwitchApplication.Permission, {
        /// <field>
        /// Called when a new permission is created.
        /// <br/>created(msls.application.Permission entity)
        /// </field>
        created: [lightSwitchApplication.Permission]
    });

    msls._addEntryPoints(lightSwitchApplication.UserPermission, {
        /// <field>
        /// Called when a new userPermission is created.
        /// <br/>created(msls.application.UserPermission entity)
        /// </field>
        created: [lightSwitchApplication.UserPermission]
    });

}(msls.application));
