using Prism.Mvvm;
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
    public class LoginModel : BindableBase
    {
        private string _loginName;

        public string LoginName
        {
            get { return _loginName; }
            set 
            { 
                SetProperty(ref _loginName, value);
                RaisePropertyChanged();
            }
        }

        private string _loginPassword;

        public string LoginPassword
        {
            get { return _loginPassword; }
            set { SetProperty(ref _loginPassword, value); }
        }


    }
}
