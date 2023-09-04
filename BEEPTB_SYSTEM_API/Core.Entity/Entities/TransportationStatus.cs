using System;
using Core.Entity.Abstract;

namespace Core.Entity.Entities
{
    public class TransportationStatus : IEntityBase
    {
        public TransportationStatus()
        {
        }

        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public bool IsEnabled { get; set; }
    }
}
