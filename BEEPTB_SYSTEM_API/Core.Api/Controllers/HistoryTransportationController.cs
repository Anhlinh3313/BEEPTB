using Core.Business.Services.Abstract;
using Core.Business.ViewModels.HistoryTransportation;
using Core.Data.Abstract;
using Core.Entity.Entities;
using Core.Infrastructure.Helper;
using Core.Infrastructure.Utils;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace Core.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HistoryTransportationController: BaseController
    {
        protected readonly IHistoryTransportationService _HistoryTransportationService;
        public HistoryTransportationController(
            Microsoft.Extensions.Logging.ILogger<dynamic> logger,
            IHistoryTransportationService iHistoryTransportationService,
            IUnitOfWork unitOfWork) : base(logger, unitOfWork)
        {
            _HistoryTransportationService = iHistoryTransportationService;
        }

        [HttpPost("Create")]
        public JsonResult Create([FromBody]HistoryTransportationViewModel viewModel)
        {
            return JsonUtil.Create(_HistoryTransportationService.CreateHistoryTransportation(viewModel));
        }

        [HttpPost("Update")]
        public JsonResult Update([FromBody]HistoryTransportationViewModel viewModel)
        {
            return JsonUtil.Create(_HistoryTransportationService.UpdateHistoryTransportation(viewModel));
        }

        [HttpPost("Delete")]
        public JsonResult Delete([FromBody]HistoryTransportationViewModel viewModel)
        {
            return JsonUtil.Create(_HistoryTransportationService.DeleteHistoryTransportation(viewModel));
        }
    }
}