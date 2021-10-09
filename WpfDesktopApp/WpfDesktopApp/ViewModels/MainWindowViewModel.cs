using Library;
using System.Collections.ObjectModel;

namespace WpfDesktopApp.ViewModels
{
    public class MainWindowViewModel : BaseViewModel
    {
        public MainWindowViewModel()
        {
            SelectedViewModel = new ProductsViewModel();
        }

        
        public BaseViewModel SelectedViewModel { get; set; }
    }
}