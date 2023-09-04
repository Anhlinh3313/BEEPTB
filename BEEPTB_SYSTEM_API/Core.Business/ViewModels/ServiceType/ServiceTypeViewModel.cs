using System;
using Core.Entity.Abstract;
using Core.Entity.Entities;

namespace Core.Business.ViewModels
{
    public class ServiceTypeViewModel : IEntityBase
    {
        public ServiceTypeViewModel()
        {
        }
        public int Id { get; set; }
        public bool IsEnabled { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
    }
}
