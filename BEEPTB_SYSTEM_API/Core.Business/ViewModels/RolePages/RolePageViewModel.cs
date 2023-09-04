using Core.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Business.ViewModels.RolePages
{
    public class RolePageViewModel
    {
        public int ModuleId { get; set; }
        public List<RolePage> RolePages { get; set; }
    }
}
