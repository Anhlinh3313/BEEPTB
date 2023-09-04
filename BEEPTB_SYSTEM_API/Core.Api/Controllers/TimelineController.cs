using System;
using Core.Business.ViewModels.TimeLine;
using Core.Data.Abstract;
using Core.Entity.Entities;
using Core.Infrastructure.Utils;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Core.Api.Controllers
{
    [Route("api/[controller]")]
    public class TimelineController : BaseController
    {
        public TimelineController(ILogger<dynamic> logger,
            IUnitOfWork unitOfWork) : base(logger, unitOfWork)
        { }

        [HttpGet("GetAll")]
        public JsonResult GetAll()
        {
            var modulePages = _unitOfWork.RepositoryR<Timeline>().GetAll();

            return JsonUtil.Success(modulePages);
        }


        [HttpGet("Get")]
        public JsonResult Get(int id)
        {
            var timeline = _unitOfWork.RepositoryR<Timeline>().GetSingle(id);

            return JsonUtil.Success(timeline);
        }

        [HttpPost("Update")]
        public JsonResult Update([FromBody] TimelineViewModel model)
        {
            var timeline = _unitOfWork.RepositoryR<Timeline>().GetSingle(model.Id);
            var timelineAfter = _unitOfWork.RepositoryR<Timeline>().GetSingle(model.Id+1);
            if (timeline == null)
            {
                return JsonUtil.Error("Không tìm thấy mốc thời gian");
            }
            else
            {
                timeline.ValueTo = model.ValueTo;
                timelineAfter.ValueFrom = model.ValueTo;
                _unitOfWork.Commit();
                return JsonUtil.Success(timeline);
            }

        }
    }
}
