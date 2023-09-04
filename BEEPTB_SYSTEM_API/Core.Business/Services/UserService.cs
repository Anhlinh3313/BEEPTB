using System;
using System.Collections.Generic;
using System.Linq;
using Core.Business.Services.Abstract;
using Core.Business.Services.Models;
using Core.Data.Abstract;
using Core.Entity.Entities;
using Core.Infrastructure.ViewModels;
using Microsoft.Extensions.Options;

namespace Core.Business.Services
{
    public class UserService : BaseService, IUserService
    {
        public UserService(Microsoft.Extensions.Logging.ILogger<dynamic> logger, IOptions<AppSettings> optionsAccessor, IUnitOfWork unitOfWork) : base(logger, optionsAccessor, unitOfWork)
        {

        }
    }
}
