using System;
using Core.Entity.Entities;

namespace Core.Business.ViewModels
{
    public class TermsConditionsViewModel : EntitySimple
    {
        public TermsConditionsViewModel()
        {
        }
        public string Title { get; set; }
        public string Content { get; set; }
    }
}
