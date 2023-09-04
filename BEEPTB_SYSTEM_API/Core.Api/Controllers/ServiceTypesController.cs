using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Core.Entity.Entities;
using Core.Business.ViewModels;
using Core.Business.Services.Abstract;
using Core.Business.Services.Models;
using Core.Data.Abstract;
using Core.Infrastructure.Helper;
using Microsoft.Extensions.Options;
using Core.Entity.Procedures;
using Core.Infrastructure.Utils;
using Microsoft.AspNetCore.Authorization;

namespace Core.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServiceTypesController
    {
        protected readonly IUnitOfWork _unitOfWork;
        public ServiceTypesController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet("GetListServiceTypes")]
        public JsonResult GetListServiceTypes()
        {
            var data = _unitOfWork.RepositoryR<ServiceTypes>().GetAll();
            return JsonUtil.Success(data);
        }
    }
}