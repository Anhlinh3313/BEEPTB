using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using Core.Entity.Abstract;

namespace Core.Entity.Entities
{
    public class Reason :  EntitySimple
    {
        public Reason()
        {
        }
        public string Note { get; set; }
    }
}
