using System;
using System.Collections.Generic;
using System.Linq;
using System.Security;
using System.Text;
using System.Threading.Tasks;

namespace WpfDesktopApp.Models
{
    /// <summary>
    /// LoginModel contains properties for the LoginViewModel
    /// </summary>
    public class RegistrationModel
    {
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Password { get; set; }
        public string PasswordRepeat { get; set; }
        public string PasswordVerified => Password == PasswordRepeat ? Password : null;
    }
}
