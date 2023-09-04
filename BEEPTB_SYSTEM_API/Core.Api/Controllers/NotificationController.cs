using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Business.Services;
using Core.Business.Services.Abstract;
using Core.Business.Services.Models;
using Core.Business.ViewModels;
using Core.Business.ViewModels.General;
using Core.Data.Abstract;
using Core.Entity.Entities;
using Core.Entity.Procedures;
using Core.Infrastructure.Helper;
using Core.Infrastructure.Utils;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Options;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Core.Api.Controllers
{
    [Route("api/[controller]")]
    public class NotificationController : GeneralController<NotificationViewModel, NotificationInfoViewModel, Notification>
    {
        private ISignalRHubService _signalRHub;
        private readonly IHubContext<SignalRHubService> _hubContext;

        public NotificationController(Microsoft.Extensions.Logging.ILogger<dynamic> logger,
            IOptions<AppSettings> optionsAccessor,
            IOptions<JwtIssuerOptions> jwtOptions,
            IUnitOfWork unitOfWork,
            ISignalRHubService signalRHub,
            IHubContext<SignalRHubService> hubContext,
            IGeneralService<NotificationViewModel, NotificationInfoViewModel, Notification> iGeneralService) : base(logger, optionsAccessor, jwtOptions, unitOfWork, iGeneralService)
        {
            _signalRHub = signalRHub;
            _hubContext = hubContext;
        }

        [HttpGet("GetListNotification")]
        public JsonResult GetListNotification(int? pageNum, int?pageSize, int? notificationTypeId, bool? seen)
        {
            var result = _unitOfWork.Repository<Proc_GetListNotification>()
                .ExecProcedure(Proc_GetListNotification.GetEntityProc(GetCurrentUserId(), pageNum, pageSize, notificationTypeId, seen));
            return JsonUtil.Success(result);
        }

        [HttpGet("UpdateSeenNotificationApp")]
        public JsonResult GetListNotification(int? notificationId)
        {
            if (notificationId != null)
            {
                var data = _unitOfWork.RepositoryCRUD<Notification>().GetSingle(x => x.Id == notificationId && x.NotificationTypeId == 2);
                if(data == null)
                {
                    return JsonUtil.Error("Không tìm thấy thông báo");
                }

                data.Seen = true;
                _unitOfWork.Commit();
            }
            else
            {
                int userId = GetCurrentUserId();
                var data = _unitOfWork.RepositoryCRUD<Notification>().FindBy(x => x.UserId == userId && x.NotificationTypeId == 2 && x.Seen == false);

                foreach(var item in data)
                {
                    item.Seen = true;
                }
                _unitOfWork.Commit();
            }
            return JsonUtil.Success("Cập nhật thành công");
        }
        
    }
}
