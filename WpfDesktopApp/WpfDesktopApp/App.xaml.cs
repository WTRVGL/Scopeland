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

            ///TEST SECTION
            var x = new RegistrationService().createNewUser("yo", "Wouter", "Vangeel", "lol");
            //new DataContext().CreateUser("11303010@student.pxl.be", "Wouter", "Vangeel", "lol");
            //new LoginMainWindow().ShowDialog();

            //TEST SECTION

            this.MainWindow = new MainWindow();

            var loginView = new LoginView();
            var result = loginView.ShowDialog();
            loginView.Close();

            if (result == false)
            {
                App.Current.Shutdown();
            }
            else
                
                MainWindow.DataContext = new MainWindowViewModel
                {
                    CurrentUser = (Gebruiker)App.Current.Properties["CurrentAuthenticatedUser"]
                };

            MainWindow.ShowDialog();
            
            
            
        }
    }
}
