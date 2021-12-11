using GalaSoft.MvvmLight.Messaging;
using Library;
using Prism.Commands;
using System;
using System.Collections.ObjectModel;
using System.Windows.Forms;
using System.Windows.Input;
using WpfDesktopApp.Messenges;

namespace WpfDesktopApp.ViewModels.Main
{
    public class MainWindowViewModel : ViewModelBase
    {

        private ViewModelBase _selectedViewModel;
        private Gebruiker _currentUser;

        public Gebruiker CurrentUser
        {
            get { return _currentUser; }
            set { SetProperty(ref _currentUser, value); }
        }

        public ViewModelBase SelectedViewModel
        {
            get { return _selectedViewModel; }
            set { SetProperty(ref _selectedViewModel, value); }
        }

        public ICommand ShowProductsCommand => new DelegateCommand(() => SelectedViewModel = new ProductsViewModel());
        public ICommand ShowProductDetailCommand => new DelegateCommand<Product>(product => SelectedViewModel = new ProductDetailViewModel(product));
        public ICommand ShowHomeCommand => new DelegateCommand(() => SelectedViewModel = new HomeViewModel());
        public ICommand ShowUsersCommand => new DelegateCommand(() => SelectedViewModel = new UsersViewModel());

        public MainWindowViewModel()
        {
            SelectedViewModel = new HomeViewModel();
            Messenger.Default.Register<ChangePageMessage>(this, ChangeSelectedViewModel);
        }

        private void ChangeSelectedViewModel(ChangePageMessage message)
        {
            SelectedViewModel = message.SelectedViewModel;
        }
    }
}