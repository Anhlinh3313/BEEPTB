using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Business.Services.Abstract;
using Core.Business.Services.Models;
using Core.Business.ViewModels.Permissions;
using Core.Business.ViewModels.RolePages;
using Core.Data.Abstract;
using Core.Entity.Entities;
using Core.Entity.Procedures;
using Core.Infrastructure.Helper;
using Core.Infrastructure.Utils;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Core.Api.Controllers
{
    [Route("api/[controller]")]
    public class PermissionController : BaseController
    {
        private readonly IPermissionService _iPermissionService;

        public PermissionController(
            Microsoft.Extensions.Logging.ILogger<dynamic> logger,
            IOptions<AppSettings> optionsAccessor,
            IOptions<JwtIssuerOptions> jwtOptions,
            IUnitOfWork unitOfWork,
            IPermissionService iPermissionService) : base(logger, optionsAccessor, jwtOptions, unitOfWork)
        {
            _iPermissionService = iPermissionService;
        }

        [HttpGet("CheckUserPermission")]
        public JsonResult CheckUserPermission(int userId, string aliasPath)
        {
            return JsonUtil.Success(_iPermissionService.CheckUserPermission(userId, aliasPath));
        }

        [HttpGet]
        public JsonResult GetPermissionByRoleId(int roleId)
        {
            return _iPermissionService.GetPermissionByRoleId(roleId);
        }

        [HttpGet("CheckPermission")]
        public JsonResult CheckPermission(string aliasPath)
        {
            return JsonUtil.Success(_iPermissionService.CheckUserPermission(GetCurrentUserId(), aliasPath));
        }

        [HttpGet("CheckPermissionDetail")]
        public JsonResult CheckPermissionDetail(string aliasPath, int moduleId)
        {
            var data = _unitOfWork.Repository<Proc_PermissionDetail>()
                          .ExecProcedureSingle(Proc_PermissionDetail.GetEntityProc(GetCurrentUserId(), aliasPath, moduleId));
            return JsonUtil.Success(data);
        }

        [HttpGet("GetByRoleId")]
        public JsonResult GetByRoleId(int roleId)
        {
            return JsonUtil.Success(_unitOfWork.RepositoryR<RolePage>().FindBy(x => x.RoleId == roleId));
        }

        [HttpPost("UpdatePermission")]
        public JsonResult UpdatePermission([FromBody] RolePageViewModel model)
        {
            var result = _unitOfWork.Repository<Proc_UpdatePermission>().
                ExecProcedure(Proc_UpdatePermission.GetEntityProc(model.ModuleId, model.RolePages));

            return JsonUtil.Success(result);
        }
    }
}
