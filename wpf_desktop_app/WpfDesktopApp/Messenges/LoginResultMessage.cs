using Library;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WpfDesktopApp.Messenges
{
    public class LoginResultMessage
    {
        public bool Authenticated { get; set; }
        public Gebruiker CurrentUser{ get; set; }
    }
}
