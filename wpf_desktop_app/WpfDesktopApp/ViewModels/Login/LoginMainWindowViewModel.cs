using Library.Services;
using Prism.Commands;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;
using WpfDesktopApp.Models;
using static WpfDesktopApp.ViewModels.Login.LoginViewModel;

namespace WpfDesktopApp.ViewModels.Login
{
    public class LoginMainWindowViewModel : ViewModelBase
    {
        private bool? _dialogResult;
        private ViewModelBase _selectedViewModel;

        public bool? DialogResult
        {
            get { return _dialogResult; }
            set { SetProperty(ref _dialogResult, value); }
        }
        
        public ViewModelBase SelectedViewModel
        {
            get { return _selectedViewModel; }
            set { SetProperty(ref _selectedViewModel, value); }
        }


        public ICommand ShowLoginCommand => new DelegateCommand(() => SelectedViewModel = new LoginViewModel());
        public ICommand ShowRegistrationCommand => new DelegateCommand(() => SelectedViewModel = new RegistrationViewModel());
        public ICommand VerifyLoginCommand
        {
            get
            {
                return new DelegateCommand<LoginModel>((model) =>
                {
                    
                    LoginService loginService = new LoginService(model.LoginName, model.LoginPassword);

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

        public ICommand VerifyRegistrationCommand
        {
            get
            {
                return new DelegateCommand<RegistrationModel>((model) =>
                {

                    if (model.PasswordVerified == null)
                    {
                        return;
                    }

                    RegistrationService registrationService = new RegistrationService();

                    var result = registrationService.createNewUser(model.Email, model.FirstName, model.LastName, model.Password);
                   
                    if (!result)
                    {
                        return;
                    }
                    
                    SelectedViewModel = new LoginViewModel();
                });
            }
        }

        public LoginMainWindowViewModel()
        {
            SelectedViewModel = new LoginViewModel();
        }

       
    }
}
