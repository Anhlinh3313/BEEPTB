using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using Core.Entity.Abstract;

namespace Core.Entity.Entities
{
    public class IncurredFeeImages : IEntityBase
    {
        public IncurredFeeImages() { }

        public int Id { set; get; }
        public string ImagePath { get; set; }
        public bool IsEnabled { get; set; }
    }
}

