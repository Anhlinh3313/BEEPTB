using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using Core.Entity.Abstract;

namespace Core.Entity.Entities
{
    public class TermsCondition :  EntitySimple
    {
        public TermsCondition()
        {
        }
        public string Title { get; set; }
        public string Content { get; set; }
    }
}
