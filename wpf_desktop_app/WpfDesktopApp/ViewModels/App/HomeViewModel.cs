using Library;
namespace WpfDesktopApp.ViewModels
{
    public class HomeViewModel : ViewModelBase
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
