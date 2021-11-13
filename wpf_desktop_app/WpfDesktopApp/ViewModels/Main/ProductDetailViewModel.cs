using GalaSoft.MvvmLight.Messaging;
using Library;
using Prism.Commands;
using System;
using System.ComponentModel;
using System.Windows.Input;
using WpfDesktopApp.Messenges;

namespace WpfDesktopApp.ViewModels.Main
{
    public class ProductDetailViewModel : ViewModelBase
    {
        private Product _product;
        private bool _isEditMode;
        private Product _originalProduct;
                
        public Product OriginalProduct
        {
            get { return _originalProduct; }
            set { SetProperty(ref _originalProduct,  value); }
        }


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

        public ICommand EnableEditModeCommand => new DelegateCommand(HandleEnableEditMode);

        private void HandleEnableEditMode()
        {
            IsEditMode = true;
            OriginalProduct = (Product)Product.Clone;

        }

        public ICommand DisableEditModeCommand => new DelegateCommand(HandleDisableEditMode);

        private void HandleDisableEditMode()
        {       
            IsEditMode = false;
            Product = (Product)OriginalProduct.Clone;
        }

        public ICommand SaveProductChangesCommand => new DelegateCommand(HandleSaveProductChangesCommand);

        private void HandleSaveProductChangesCommand()
        {
            //Update DB
            IsEditMode = false;

        }
    }
}
