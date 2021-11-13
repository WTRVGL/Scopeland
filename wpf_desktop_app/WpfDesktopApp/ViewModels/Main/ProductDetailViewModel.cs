using GalaSoft.MvvmLight.Messaging;
using Library;
using Prism.Commands;
using System.Windows.Input;
using WpfDesktopApp.Messenges;

namespace WpfDesktopApp.ViewModels.Main
{
    public class ProductDetailViewModel : ViewModelBase
    {
        private Product _product;
        private bool _isEditMode;

        public bool IsEditMode
        {
            get { return _isEditMode; }
            set { SetProperty(ref _isEditMode, value); }
        }

        public Product Product
        {
            get { return _product; }
            set { SetProperty(ref _product, value); }
        }

        public ProductDetailViewModel(Product product)
        {
            Product = product;
            IsEditMode = false;
        }

        public ICommand NavigateProductsPageCommand => 
            new DelegateCommand(() => Messenger.Default.Send<ChangePageMessage>(
                new ChangePageMessage
                {
                    SelectedViewModel = new ProductsViewModel()
                }));

        public ICommand ToggleEditModeCommand => new DelegateCommand(() => IsEditMode = true);
    }
}
