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

namespace WpfDesktopApp
{
    /// <summary>
    /// Interaction logic for App.xaml
    /// </summary>
    public partial class App : Application
    {
        private void AppStartup(object sender, StartupEventArgs e)
        {
            new LoginView().ShowDialog();
            new MainWindow().ShowDialog();
            
        }
    }
}
