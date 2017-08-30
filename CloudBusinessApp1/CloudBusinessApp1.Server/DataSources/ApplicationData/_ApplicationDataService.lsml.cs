using Microsoft.LightSwitch.Security.Server;
using Microsoft.LightSwitch;
using System.Text;
using System.Linq;
using System.Collections.Generic;
using System;
using Microsoft.LightSwitch.Framework.Server;

namespace LightSwitchApplication
{
    public partial class ApplicationDataService
    {
        partial void Sales_Inserting(Sale entity)
        {
            entity.User = Application.User.Email;
        }

        partial void Sales_CanInsert(ref bool result)
        {
            string email = Application.User.Email;
            IDataServiceQueryable<UserPermission> query;
            query = from up in this.DataWorkspace.ApplicationData.UserPermissions
                                 where up.User.Email == email && up.Permission.Name == "Sales.CanInsert"
                                 select up;
            //c = this.DataWorkspace.ApplicationData.UserPermissions.Where(up => up.User.Email == Application.User.Email && up.Permission.Name == "Sales.CanInsert").Count();
            if (query.SingleOrDefault() == null)
            {
                result = false;
            }
            else
            {
                result = true;
            }

        }

        partial void Users_Updating(User entity)
        {
            //O365PersonInfo owner = entity.SharePointUser;
            entity.Email = entity.SharePointUser;
        }

    }
}