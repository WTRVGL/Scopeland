using System;
using System.Collections.Generic;
using System.Linq;
using System.Security;
using System.Text;
using System.Threading.Tasks;
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

        

    }
}
