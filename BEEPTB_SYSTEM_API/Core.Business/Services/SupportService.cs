using Core.Business.Services.Abstract;
using Core.Business.Services.Models;
using Core.Business.ViewModels.Supports;
using Core.Data.Abstract;
using Core.Entity.Entities;
using Core.Infrastructure.Helper;
using Core.Infrastructure.Utils;
using Core.Infrastructure.ViewModels;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Options;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Core.Business.Services
{
    public class SupportService : GeneralService<SupportsViewModel, Support>, ISupportService
    {
        private ISignalRHubService _signalRHub;
        private readonly IHubContext<SignalRHubService> _hubContext;

        public SupportService(Microsoft.Extensions.Logging.ILogger<dynamic> logger,
            IOptions<AppSettings> optionsAccessor,
            ISignalRHubService signalRHub,
            IHubContext<SignalRHubService> hubContext,
            IUnitOfWork unitOfWork) : base(logger, optionsAccessor, unitOfWork)
        {
            _signalRHub = signalRHub;
            _hubContext = hubContext;
        }


        public ResponseViewModel CreateSupport(SupportsViewModel viewModel)
        {
            var supports = new Support();
            supports.EmployeeId = null;
            supports.ContentHandle = null;
            supports.SupportStatusId = SupportsStatusHelper.NEW;
            supports.SupportTypeId = viewModel.SupportTypeId;
            supports.ContentSupport = viewModel.ContentSupport;
            supports.CustomerId = viewModel.CustomerId;
            supports.SupplierId = 1;
            _unitOfWork.RepositoryCRUD<Support>().Insert(supports);
            _unitOfWork.Commit();

            string sp = $"P{RandomUtil.GetCodeNumber(supports.Id, 7)}";
            supports.Code = sp;
            supports.Name = sp;

            _unitOfWork.RepositoryCRUD<Support>().Update(supports);
            _unitOfWork.Commit();

            var dataSupportType = _unitOfWork.RepositoryCRUD<SupportType>().GetSingle(x => x.Id == viewModel.SupportTypeId);

            var dataUsers = _unitOfWork.RepositoryCRUD<User>().FindBy(x => x.UserTypeId == UserTypeHelper.ADMIN);
            var listUserId = new List<string>();
            if (dataSupportType != null && dataUsers != null)
            {
                foreach (var i in dataUsers)
                {
                    listUserId.Add(i.Id + "");
                    Notification notifi = new Notification
                    {
                        Title = "Thông báo hỗ trợ " + dataSupportType.Name,
                        Content = viewModel.ContentSupport,
                        UserId = i.Id,
                        Seen = false,
                        NotificationTypeId = 1
                    };
                    _unitOfWork.RepositoryCRUD<Notification>().Insert(notifi);

                }
                _unitOfWork.Commit();
            }

            var obj = new { title = "Thông báo hỗ trợ " + dataSupportType.Name, Content = viewModel.ContentSupport };

            _signalRHub.SendNotifications(listUserId,dataSupportType.Name, obj);

            return ResponseViewModel.CreateSuccess(supports);
        }
    }
}
