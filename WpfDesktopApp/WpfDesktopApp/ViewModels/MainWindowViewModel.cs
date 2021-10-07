using Library;
using System.Collections.ObjectModel;

namespace WpfDesktopApp.ViewModels
{
    public class MainWindowViewModel
    {
        public MainWindowViewModel()
        {
            Data = new Database();
            Products = new ObservableCollection<Product>(Data.GetProducts());
        }

        public ObservableCollection<Product> Products { get; set; }
        public Database Data { get; set; }
    }
}