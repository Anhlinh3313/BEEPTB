using System;
using System.Collections.Generic;
using Core.Entity.Entities;

namespace Core.Business.ViewModels
{
    public class ReasonViewModel : SimpleViewModel<ReasonViewModel, Reason>
    {
        public ReasonViewModel()
        {
        }
        public string Note { get; set; }
        public List<int> ReasonTypeIds { get; set; }

    }
}
