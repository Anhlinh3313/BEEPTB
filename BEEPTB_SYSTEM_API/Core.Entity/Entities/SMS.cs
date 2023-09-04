using System;
namespace Core.Entity.Entities
{
    public class SMS : EntitySimple
    {
        public SMS()
        {
        }

        public string PhoneNumber { get; set; }
        public string Content { get; set; }
    }
}
