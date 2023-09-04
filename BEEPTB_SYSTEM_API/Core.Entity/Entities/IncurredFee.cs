using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using Core.Entity.Abstract;

namespace Core.Entity.Entities
{
    public class IncurredFee :  EntitySimple
    {
        public IncurredFee()
        {
        }
        public double? Fee { get; set; }

    }
}
