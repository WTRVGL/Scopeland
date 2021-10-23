using Library;
using Library.Services;
using Prism.Commands;
using System;
using System.Windows;
using System.Windows.Input;

namespace WpfDesktopApp.ViewModels.Login
{
    public class LoginViewModel : ViewModelBase
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


        public LoginViewModel()
        {

        }


        public ICommand VerifyLoginCommand { get
            {
                return new DelegateCommand(() =>
                {
                    LoginService loginService = new LoginService(LoginName, LoginPassword);
                    
                    ///TODO: Make a custom response object that contains the authenticated user.
                    var result = loginService.authenticateUser();

                    if (result)
                    {
                        App.Current.Properties["CurrentAuthenticatedUser"] = loginService.CurrentUser;
                        DialogResult = true;   
                    }
                });
            }
        }
    }
}
