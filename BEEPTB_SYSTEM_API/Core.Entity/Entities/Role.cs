using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using Core.Entity.Abstract;

namespace Core.Entity.Entities
{
    public class Role :  EntitySimple
    {
        public Role()
        {
        }

        public int? ParrentRoleId { get; set; }
        public int UserTypeId { get; set; }
    }
}
