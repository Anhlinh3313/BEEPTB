using System;
using Core.Entity.Entities;

namespace Core.Business.ViewModels
{
    public class RoleViewModel : SimpleViewModel<RoleViewModel, Role>
    {
        public RoleViewModel()
        {
        }

        public int? ParrentRoleId { get; set; }
        public int UserTypeId { get; set; }
    }
}
