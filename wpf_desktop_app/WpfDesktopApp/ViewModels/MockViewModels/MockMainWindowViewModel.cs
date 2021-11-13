using Library;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WpfDesktopApp.ViewModels.Main;

namespace WpfDesktopApp.ViewModels.MockViewModels
{
    public class MockMainWindowViewModel
    {
        public Gebruiker CurrentUser { get; set; }
        public ViewModelBase SelectedViewModel { get; set; }

        public MockMainWindowViewModel()
        {
            CurrentUser = new Gebruiker { FirstName = "Wouter", LastName = "Vangeel" };
            SelectedViewModel = new ProductsViewModel();
        }
    }
}
