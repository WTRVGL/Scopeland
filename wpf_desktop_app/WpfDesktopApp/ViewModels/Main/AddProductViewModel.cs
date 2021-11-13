using GalaSoft.MvvmLight.Messaging;
using Library;
using Prism.Commands;
using System;
using System.Windows.Input;
using WpfDesktopApp.Messenges;

namespace WpfDesktopApp.ViewModels.Main
{
    public class AddProductViewModel : ViewModelBase
    {
        private Product _product;
        private readonly DataContext _data;

        public Product Product
        {
            get { return _product; }
            set { SetProperty(ref _product, value); }
        }

        public AddProductViewModel()
        {
            Product = new Product { DateFirstStockage = DateTime.Now, DateLastSale = DateTime.Now };
            _data = new DataContext();
        }

        public ICommand CreateProductCommand =>
            new DelegateCommand<Product>(HandleCreateProductCommand);

        private void HandleCreateProductCommand(Product product)
        {
            _data.CreateProduct(product);
            Messenger.Default.Send<ChangePageMessage>(new ChangePageMessage { SelectedViewModel = new ProductsViewModel() });
        }
    }
}