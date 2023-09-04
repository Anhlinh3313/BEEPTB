using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Core.Business.Services.Abstract;
using Core.Business.Services.Models;
using Core.Business.ViewModels;
using Core.Business.ViewModels.Pages;
using Core.Data.Abstract;
using Core.Entity.Entities;
using Core.Entity.Procedures;
using Core.Infrastructure.Helper;
using Core.Infrastructure.Utils;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Core.Api.Controllers
{
    [Route("api/[controller]")]
    public class PageController : GeneralController<PageViewModel, PageInfoViewModel, Page>
    {
        public PageController(
            Microsoft.Extensions.Logging.ILogger<dynamic> logger,
            IOptions<AppSettings> optionsAccessor,
            IOptions<JwtIssuerOptions> jwtOptions,
            IUnitOfWork unitOfWork,
            IGeneralService<PageViewModel, PageInfoViewModel, Page> iGeneralService) : base(logger, optionsAccessor, jwtOptions, unitOfWork, iGeneralService)
        {
        }

        [HttpPost("GetListPages")]
        public JsonResult GetListPages([FromBody] PageFilterViewModel model)
        {
            var pages = _unitOfWork.Repository<Proc_GetListPages>()
                .ExecProcedure(Proc_GetListPages.GetEntityProc(model.ModulePageId, model.SearchText, model.PageNumber, model.PageSize)).ToList();
            return JsonUtil.Success(pages);
        }

        [HttpGet("GetListParentPages")]
        public JsonResult GetListParentPages(int? modulePageId)
        {
            var pages = _unitOfWork.RepositoryR<Page>().FindBy(x => x.ParentPageId == null && (!modulePageId.HasValue || x.ModulePageId == modulePageId.Value));
            return JsonUtil.Success(pages);
        }

        [HttpGet("GetMenuByModuleId")]
        public JsonResult GetMenuByModuleId(int id)
        {
            var currentUser = GetCurrentUser();
            var pages = _unitOfWork.Repository<Proc_GetMenuByUser>()
                .ExecProcedure(Proc_GetMenuByUser.GetEntityProc(id, currentUser.Id)).ToList();
            return JsonUtil.Success(pages);
        }

        public override Task<JsonResult> Delete([FromBody] BasicViewModel viewModel)
        {
            _unitOfWork.RepositoryCRUD<RolePage>().DeleteWhere(f => f.PageId == viewModel.Id);
            return base.Delete(viewModel);
        }
    }
}
