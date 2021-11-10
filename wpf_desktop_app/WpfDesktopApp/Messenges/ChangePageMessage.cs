using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WpfDesktopApp.ViewModels;

namespace WpfDesktopApp.Messenges
{
    public class ChangePageMessage
    {
        public ViewModelBase SelectedViewModel { get; set; }
    }
}
