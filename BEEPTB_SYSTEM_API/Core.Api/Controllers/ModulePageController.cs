using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Business.Services.Abstract;
using Core.Business.Services.Models;
using Core.Data.Abstract;
using Core.Entity.Entities;
using Core.Infrastructure.Helper;
using Core.Infrastructure.Utils;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Core.Api.Controllers
{
    [Route("api/[controller]")]
    public class ModulePageController
    {
        protected readonly IUnitOfWork _unitOfWork;
        public ModulePageController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet("GetAll")]
        public JsonResult GetAll()
        {
            var modulePages = _unitOfWork.RepositoryR<ModulePage>().GetAll();

            return JsonUtil.Success(modulePages);
        }
    }
}
