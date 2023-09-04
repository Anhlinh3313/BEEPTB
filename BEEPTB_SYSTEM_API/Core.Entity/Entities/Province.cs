using System;
using Core.Entity.Abstract;

namespace Core.Entity.Entities
{
    public class Province : EntitySimple
    {
        public Province()
        {
        }

        public int CountryId { get; set; }
        public string FullName { get; set; }
        public string Level { get; set; }
    }
}
