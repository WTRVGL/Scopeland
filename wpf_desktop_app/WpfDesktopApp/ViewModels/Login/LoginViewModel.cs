using GalaSoft.MvvmLight.Command;
using GalaSoft.MvvmLight.Messaging;
using Library;
using Library.Services;
using Prism.Commands;
using System;
using System.Windows;
using System.Windows.Input;
using WpfDesktopApp.Messenges;
using WpfDesktopApp.Models;

namespace WpfDesktopApp.ViewModels.Login
{
    public class LoginViewModel : ViewModelBase
    {

        private LoginModel _loginModel;

        public LoginModel LoginModel
        {
            get { return _loginModel; }
            set { _loginModel= value; }
        }


        public LoginViewModel()
        {
            LoginModel = new LoginModel();
        }


        public ICommand VerifyLoginCommand
        {
            get
            {
                return new DelegateCommand<LoginModel>((model) =>
                {
                    LoginService loginService = new LoginService(model.LoginName, model.LoginPassword);

                    var result = loginService.authenticateUser();

                    Messenger.Default.Send<LoginResultMessage>(new LoginResultMessage
                    {
                        Authenticated = result,
                        CurrentUser = loginService.CurrentUser
                    });

                }, CanExecuteVerifyLoginCommand)
                    .ObservesProperty(() => LoginModel.LoginName) 
                    .ObservesProperty(() => LoginModel.LoginPassword);
            }
        }

        private bool CanExecuteVerifyLoginCommand(LoginModel model)
            {
            if (string.IsNullOrEmpty(LoginModel.LoginPassword) || string.IsNullOrEmpty(LoginModel.LoginName))
            {
                return false;

            }

            return true;
        }
    }
}
