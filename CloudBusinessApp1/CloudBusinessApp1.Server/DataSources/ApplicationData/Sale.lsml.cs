using Microsoft.LightSwitch;
using System.Text;
using System.Linq;
using System.Collections.Generic;
using System;

namespace LightSwitchApplication
{
    public partial class Sale
    {
        partial void Sale_Created()
        {
            this.User = this.Application.User.Name;
        }
    }
}