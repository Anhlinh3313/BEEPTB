using System;
using Core.Entity.Abstract;

namespace Core.Entity.Entities
{
    public class ModulePage : IEntityBase
    {
        public ModulePage()
        {
        }

        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public bool IsEnabled { get; set; }
    }
}
