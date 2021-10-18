using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WpfDesktopApp.ViewModels.Login
{
    public class LoginMainWindowViewModel : ViewModelBase
    {
        public ViewModelBase SelectedViewModel { get; set; }

        public LoginMainWindowViewModel()
        {
            SelectedViewModel = new RegistrationViewModel();
        }
    }
}
