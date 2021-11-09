using GalaSoft.MvvmLight.Messaging;
using Library.Services;
using Prism.Commands;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;
using WpfDesktopApp.Messenges;
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

        public LoginMainWindowViewModel()
        {
            SelectedViewModel = new LoginViewModel();
            Messenger.Default.Register<LoginResultMessage>(this, handleLogin);
        }

        /// <summary>
        /// Method called when a message is recieved.
        /// </summary>
        /// <param name="message"></param>
        private void handleLogin(LoginResultMessage message)
        {
            if (!message.Authenticated)
            {
                return;
            }

            DialogResult = message.Authenticated;

            if (DialogResult == true)
            {
                App.Current.Properties["CurrentAuthenticatedUser"] = message.CurrentUser;
            }
            
        }

    }
}
