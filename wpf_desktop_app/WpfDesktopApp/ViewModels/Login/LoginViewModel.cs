using Library;
using Library.Services;
using Prism.Commands;
using System;
using System.Windows;
using System.Windows.Input;
using WpfDesktopApp.Models;

namespace WpfDesktopApp.ViewModels.Login
{
    public class LoginViewModel : ViewModelBase
    {

        private LoginModel _loginModel;

        public LoginModel LoginModel
        {
            get { return _loginModel; }
            set { SetProperty(ref _loginModel, value); }
        }



        public LoginViewModel()
        {
            LoginModel = new LoginModel();
        }

    }
}
