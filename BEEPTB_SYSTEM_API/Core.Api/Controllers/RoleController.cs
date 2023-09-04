using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Core.Business.Services.Abstract;
using Core.Business.Services.Models;
using Core.Business.ViewModels;
using Core.Business.ViewModels.Accounts;
using Core.Data.Abstract;
using Core.Entity.Entities;
using Core.Entity.Procedures;
using Core.Infrastructure.Helper;
using Core.Infrastructure.Utils;
using LinqKit;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Core.Api.Controllers
{
    [Route("api/[controller]")]
    public class RoleController : GeneralController<RoleViewModel, Role>
    {
        public RoleController(Microsoft.Extensions.Logging.ILogger<dynamic> logger, IOptions<AppSettings> optionsAccessor, IOptions<JwtIssuerOptions> jwtOptions, IUnitOfWork unitOfWork, IGeneralService<RoleViewModel, Role> iGeneralService) : base(logger, optionsAccessor, jwtOptions, unitOfWork, iGeneralService)
        {
        }

        [HttpGet("GetRoleByUserType")]
        public JsonResult GetRoleByUsertype(int? userTypeId)
        {
            var result = _unitOfWork.Repository<Proc_GetListRole>().
                 ExecProcedure(Proc_GetListRole.GetEntityProc(null, null, 1, 999999));
            return JsonUtil.Success(result);
        }

        [HttpPost("GetListRole")]
        public JsonResult GetListRole([FromBody] SearchViewModel model)
        {
            var result = _unitOfWork.Repository<Proc_GetListRole>().
                 ExecProcedure(Proc_GetListRole.GetEntityProc(null, model.SearchText, model.PageNumber, model.PageSize));
            return JsonUtil.Success(result);
        }
    }
}
