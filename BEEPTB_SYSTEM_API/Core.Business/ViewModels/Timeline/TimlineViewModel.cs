using Core.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Business.ViewModels.TimeLine
{
    public class TimelineViewModel : EntitySimple
    {
        public TimelineViewModel()
        {
        }
        public double ValueFrom { get; set; }
        public double ValueTo { get; set; }
    }
}
