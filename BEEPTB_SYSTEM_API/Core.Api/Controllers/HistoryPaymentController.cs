using Core.Business.Services.Abstract;
using Core.Business.Services.Models;
using Core.Business.ViewModels.HistoryPayments;
using Core.Data.Abstract;
using Core.Entity.Entities;
using Core.Infrastructure.Helper;
using Core.Infrastructure.Utils;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace Core.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HistoryPaymentController : GeneralController<HistoryPaymentViewModel, HistoryPayment>
    {
        private readonly IHistoryPaymentService _iHistoryPaymentService;

        public HistoryPaymentController(Microsoft.Extensions.Logging.ILogger<dynamic> logger,
            IOptions<AppSettings> optionsAccessor,
            IOptions<JwtIssuerOptions> jwtOptions,
            IHistoryPaymentService iHistoryPaymentService,
            IUnitOfWork unitOfWork, IGeneralService<HistoryPaymentViewModel,
            HistoryPayment> iGeneralService) : base(logger, optionsAccessor, jwtOptions, unitOfWork, iGeneralService)
        {
            _iHistoryPaymentService = iHistoryPaymentService;
        }

        [HttpPost("CreateHistoryPayment")]
        public JsonResult CreateHistoryPayment([FromBody]HistoryPaymentViewModel viewModel)
        {
            return JsonUtil.Create(_iHistoryPaymentService.CreateHistoryPayment(viewModel));
        }
    }
}