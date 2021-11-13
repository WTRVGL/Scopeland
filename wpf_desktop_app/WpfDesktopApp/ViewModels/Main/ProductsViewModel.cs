using GalaSoft.MvvmLight.Messaging;
using Library;
using Prism.Commands;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;
using WpfDesktopApp.Messenges;

namespace WpfDesktopApp.ViewModels.Main
{
    public class ProductsViewModel : ViewModelBase
    {
        private Product _selectedProduct;
        private readonly DataContext _data;

        public Product SelectedProduct
        {
            get { return _selectedProduct; }
            set { SetProperty(ref _selectedProduct, value); }
        }

        public ObservableCollection<Product> Products { get; set; }


        public ProductsViewModel()
        {
            _data = new DataContext();
            Products = new ObservableCollection<Product>(_data.GetProducts());
        }

        public ICommand ShowAddProductViewCommand =>
            new DelegateCommand(() => Messenger.Default.Send<ChangePageMessage>(
                new ChangePageMessage
                { 
                    SelectedViewModel = new AddProductViewModel() 
                }));

    }
}
