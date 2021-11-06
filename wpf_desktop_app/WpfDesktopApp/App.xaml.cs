using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using System.Windows;
using WpfDesktopApp.Views;
using Core.Services;
using Library;
using WpfDesktopApp.ViewModels;
using WpfDesktopApp.Views.Login;
using Library.Services;

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
            var loginView = new LoginView();
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
