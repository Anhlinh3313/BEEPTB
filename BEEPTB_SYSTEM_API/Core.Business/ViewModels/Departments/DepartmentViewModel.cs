using Core.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Business.ViewModels.Departments
{
    public class DepartmentViewModel : SimpleViewModel<DepartmentViewModel, Department>
    {
        public int? UserTypeId { get; set; }
    }
}
