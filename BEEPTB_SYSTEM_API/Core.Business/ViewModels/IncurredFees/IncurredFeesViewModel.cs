using System;
using Core.Entity.Entities;

namespace Core.Business.ViewModels
{
    public class IncurredFeesViewModel : SimpleViewModel<IncurredFeesViewModel, IncurredFee>
    {
        public IncurredFeesViewModel()
        {
        }
        public double? Fee { get; set; }

    }
}
