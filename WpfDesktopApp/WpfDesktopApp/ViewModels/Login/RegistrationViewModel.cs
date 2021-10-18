using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WpfDesktopApp.ViewModels.Login
{
    public class RegistrationViewModel : ViewModelBase
    {
        private string _email;
        private string _firstName;
        private string _lastName;
        private string _password;
        private string _passwordRepeat;


        public string Email
        {
            get { return _email; }
            set { SetProperty(ref _email, value); }
        }

        public string FirstName
        {
            get { return _firstName; }
            set { SetProperty(ref _firstName, value); }
        }

        public string LastName
        {
            get { return _lastName; }
            set { SetProperty(ref _lastName, value); }
        }

        public string Password
        {
            get { return _password; }
            set { SetProperty(ref _password, value); }
        }

        public string PasswordRepeat
        {
            get { return _passwordRepeat; }
            set { SetProperty(ref _passwordRepeat, value); }
        }



    }
}
