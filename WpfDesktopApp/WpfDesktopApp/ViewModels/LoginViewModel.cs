using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;

namespace WpfDesktopApp.ViewModels
{
    public class LoginViewModel : BaseViewModel
    {
        public string LoginName { get; set; }
        public string LoginPassword { get; set; }

        public LoginViewModel()
        {

        }
    }
}
