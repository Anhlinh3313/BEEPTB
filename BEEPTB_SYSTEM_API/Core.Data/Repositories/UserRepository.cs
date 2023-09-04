using System;
using Core.Data.Abstract;
using Core.Data.Core;
using Core.Entity.Entities;

namespace Core.Data.Repositories
{
    public class UserRepository : EntityCRUDRepository<User>, IUserRepository
    {
        public UserRepository(ApplicationContext context) : base(context)
        {
        }
    }
}
