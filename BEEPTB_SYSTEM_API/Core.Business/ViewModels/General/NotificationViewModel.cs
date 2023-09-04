using System;
using Core.Entity.Entities;

namespace Core.Business.ViewModels
{
    public class NotificationViewModel : SimpleViewModel
    {
        public NotificationViewModel()
        {
        }

        public string Title { get; set; }
        public string Content { get; set; }
        public bool? Seen { get; set; }
        public int? UserId { get; set; }
        public int? NotificationTypeId { get; set; }
    }
}
