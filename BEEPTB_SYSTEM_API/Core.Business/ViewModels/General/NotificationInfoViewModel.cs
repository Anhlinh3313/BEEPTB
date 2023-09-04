using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Business.ViewModels.General
{
    public class NotificationInfoViewModel : SimpleViewModel
    {
        public NotificationInfoViewModel()
        {

        }

        public string Title { get; set; }
        public string Content { get; set; }
        public bool? Seen { get; set; }
        public int? UserId { get; set; }
        public int? NotificationTypeId { get; set; }
    }
}
