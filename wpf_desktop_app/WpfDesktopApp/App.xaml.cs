using System.Windows;
using Library;
using WpfDesktopApp.ViewModels;
using WpfDesktopApp.Views.Login;

namespace WpfDesktopApp
{
    /// <summary>
    /// Interaction logic for App.xaml
    /// </summary>
    public partial class App : Application
    {
        public Gebruiker AuthenticatedUser { get; set; }

        private void AppStartup(object sender, StartupEventArgs e)
        {
            this.MainWindow = new MainWindow();
            var loginView = new LoginMainWindow();
            var result = loginView.ShowDialog();

            if (result == false)
            {
                App.Current.Shutdown();
            }
            
            MainWindow.DataContext = new MainWindowViewModel
            {
                CurrentUser = (Gebruiker)App.Current.Properties["CurrentAuthenticatedUser"]
            };

            MainWindow.ShowDialog();
        }
    }
}
