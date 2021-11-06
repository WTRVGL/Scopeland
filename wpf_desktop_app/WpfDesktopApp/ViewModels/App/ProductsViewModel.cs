using Library;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WpfDesktopApp.ViewModels
{
    public class ProductsViewModel : ViewModelBase
    {
        private Product _selectedProduct;

        public Product SelectedProduct
        {
            get { return _selectedProduct; }
            set { SetProperty(ref _selectedProduct, value); }
        }

        public ObservableCollection<Product> Products { get; set; }

        public DataContext Data { get; set; }


        public ProductsViewModel()
        {
            Data = new DataContext();
            Products = new ObservableCollection<Product>(Data.GetProducts());
        }
        
        
    }
}
