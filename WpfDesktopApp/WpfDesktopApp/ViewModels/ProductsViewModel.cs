using Library;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WpfDesktopApp.ViewModels
{
    public class ProductsViewModel : BaseViewModel
    {
        public ProductsViewModel()
        {
            Data = new Database();
            Products = new ObservableCollection<Product>(Data.GetProducts());
        }
        
        public ObservableCollection<Product> Products { get; set; }
        public Database Data { get; set; }
    }
}
