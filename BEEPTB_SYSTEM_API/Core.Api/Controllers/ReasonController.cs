using Core.Business.Services.Abstract;
using Core.Business.Services.Models;
using Core.Business.ViewModels;
using Core.Business.ViewModels.Accounts;
using Core.Data.Abstract;
using Core.Entity.Entities;
using Core.Entity.Procedures;
using Core.Infrastructure.Helper;
using Core.Infrastructure.Utils;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860
namespace Core.Api.Controllers
{
    [Route("api/[controller]")]
    public class ReasonController : GeneralController<ReasonViewModel, Reason>
    {
        private readonly IReasonService _iReasonService;
        private readonly IEncryptionService _iEncryptionService;

        public IGeneralService _igeneralRawService { get; }

        public ReasonController(
            Microsoft.Extensions.Logging.ILogger<dynamic> logger,
            IOptions<AppSettings> optionsAccessor,
            IOptions<JwtIssuerOptions> jwtOptions, IUnitOfWork unitOfWork,
            IGeneralService<ReasonViewModel, Reason> iGeneralService,
            IReasonService iReasonService,
            IEncryptionService iEncryptionService,
            IGeneralService igeneralRawService
            )
            : base(logger, optionsAccessor, jwtOptions, unitOfWork, iGeneralService)
        {
            _iReasonService = iReasonService;
            _igeneralRawService = igeneralRawService;
            _iEncryptionService = iEncryptionService;
        }

        [HttpPost("Create")]
        public override async Task<JsonResult> Create([FromBody]ReasonViewModel viewModel)
        {
            return JsonUtil.Create(_iReasonService.CreateReason(viewModel));

        }


        public override async Task<JsonResult> Update([FromBody]ReasonViewModel viewModel)
        {
            return JsonUtil.Create(_iReasonService.UpdateReason(viewModel));
        }

        [HttpPost("GetListReason")]
        public JsonResult GetListReason([FromBody]FilterViewModel model)
        {
            var result = _unitOfWork.Repository<Proc_GetListReason>().
                ExecProcedure(Proc_GetListReason.GetEntityProc(model.SearchText, model.PageNumber, model.PageSize));
            return JsonUtil.Success(result);
        }
    }
}
