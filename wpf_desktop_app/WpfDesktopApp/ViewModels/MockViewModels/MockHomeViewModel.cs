using Library;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WpfDesktopApp.ViewModels.MockViewModels
{
    public class MockHomeViewModel : ViewModelBase
    {
        public Gebruiker CurrentUser { get; set; }

        public MockHomeViewModel()
        {
            CurrentUser = new Gebruiker { FirstName = "Wouter" };
        }
    }
}
