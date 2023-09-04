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
    public class ServiceController : GeneralController<ServiceViewModel, Service>
    {
        public ServiceController(Microsoft.Extensions.Logging.ILogger<dynamic> logger, IOptions<AppSettings> optionsAccessor, IOptions<JwtIssuerOptions> jwtOptions, IUnitOfWork unitOfWork, IGeneralService<ServiceViewModel, Service> iGeneralService) : base(logger, optionsAccessor, jwtOptions, unitOfWork, iGeneralService)
        {
        }

        [AllowAnonymous]
        public override JsonResult GetAll(int? pageSize = null, int? pageNumber = null, string cols = null)
        {
            return base.GetAll(pageSize, pageNumber, cols);
        }

        [AllowAnonymous]
        [HttpGet("GetListService")]
        public JsonResult GetListService(string searchText, int? pageNumber, int? pageSize)
        {
            var data = _unitOfWork.Repository<Proc_GetListServices>()
                        .ExecProcedure(Proc_GetListServices.GetEntityProc(searchText, pageNumber, pageSize));
            return JsonUtil.Success(data);
        }
    }
}