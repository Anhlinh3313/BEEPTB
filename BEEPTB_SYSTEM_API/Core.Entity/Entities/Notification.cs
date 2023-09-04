using System;
namespace Core.Entity.Entities
{
    public class Notification : EntityBasic
    {
        public Notification()
        {
        }
        public string Title { get; set; }
        public string Content { get; set; }
        public bool? Seen { get; set; }
        public int? UserId { get; set; }
        public int? NotificationTypeId { get; set; }
    }
}
