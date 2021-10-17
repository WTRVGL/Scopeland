using Core.Services;
using Library;
using Library.Services;
using Prism.Commands;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Input;
using WpfDesktopApp.Models;

namespace WpfDesktopApp.ViewModels
{
    public class LoginViewModel : BaseViewModel
    {
        private string _LoginName;
        private string _LoginPassword;
        private bool? _dialogResult;

        public bool? DialogResult
        {
            get { return _dialogResult; }
            set { SetProperty(ref _dialogResult, value); }
        }


        public string LoginName
        {
            get { return _LoginName; }
            set { SetProperty(ref _LoginName, value); }
        }


        public string LoginPassword
        {
            get { return _LoginPassword; }
            set { SetProperty(ref _LoginPassword, value); }
        }

        public Login LoginToken { get; set; }


        public ICommand VerifyLoginCommand { get
            {
                return new DelegateCommand(() =>
                {
                    LoginService loginService = new LoginService(LoginName, LoginPassword);
                    var result = loginService.authenticateUser();

                    if (result)
                    {
                        DialogResult = true;   
                    }
                });
            }
            
            
        }

        public LoginViewModel()
        {
        }

        public Action<string, string> LoginUser = (username, password) =>
        {
            
            var authenticateService = new LoginService(username, password);
            var result = authenticateService.authenticateUser();
            if (result)
            {
                MessageBox.Show("Authenticated");
            }
        };

    }
}
