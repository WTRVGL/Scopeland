using Library;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WpfDesktopApp.ViewModels
{
    public class HomeViewModel : BaseViewModel
    {
        private Gebruiker _currentUser;

        public Gebruiker CurrentUser
        {
            get { return _currentUser; }
            set { SetProperty(ref _currentUser, value); }
        }


        public HomeViewModel()
        {
            CurrentUser = (Gebruiker)App.Current.Properties["CurrentAuthenticatedUser"];
        }
    }
}
