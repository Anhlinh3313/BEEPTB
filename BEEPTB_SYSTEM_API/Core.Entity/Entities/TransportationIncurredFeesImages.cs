using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using Core.Entity.Abstract;

namespace Core.Entity.Entities
{
    public class TransportationIncurredFeesImages : IEntityBase
    {
        public TransportationIncurredFeesImages() { }

        public int Id { set; get; }
        public int TransportationIncurredFeeId { get; set; }
        public int IncurredFeesImageId { get; set; }
        public bool IsEnabled { get; set; }
    }
}

