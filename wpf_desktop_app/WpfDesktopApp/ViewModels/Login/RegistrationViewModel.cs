using Library.Services;
using Prism.Commands;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;
using WpfDesktopApp.Models;

namespace WpfDesktopApp.ViewModels.Login
{
    public class RegistrationViewModel : ViewModelBase
    {

        private RegistrationModel _RegistrationModel;

        public RegistrationModel RegistrationModel
        {
            get { return _RegistrationModel; }
            set { SetProperty(ref _RegistrationModel, value); }
        }

        public RegistrationViewModel()
        {
            RegistrationModel = new RegistrationModel();
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

                    //SelectedViewModel = new LoginViewModel();
                });
            }
        }


    }
}
