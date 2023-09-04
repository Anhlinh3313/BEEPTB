using AutoMapper;
using Core.Business.Services.Abstract;
using Core.Business.Services.Models;
using Core.Business.ViewModels;
using Core.Data.Abstract;
using Core.Entity.Entities;
using Core.Infrastructure.Http;
using Core.Infrastructure.Utils;
using Core.Infrastructure.ViewModels;
using Microsoft.Extensions.Options;
using System;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;

namespace Core.Business.Services
{
    public partial class ReasonService : BaseService, IReasonService
    {
        public ReasonService(Microsoft.Extensions.Logging.ILogger<dynamic> logger, IOptions<AppSettings> optionsAccessor, IUnitOfWork unitOfWork) : base(logger, optionsAccessor, unitOfWork)
        {
        }

        public ResponseViewModel CreateReason(ReasonViewModel viewModel)
        {
            Reason reason = Mapper.Map<Reason>(viewModel);
            _unitOfWork.RepositoryCRUD<Reason>().Insert(reason);
            _unitOfWork.Commit();

            if (viewModel.ReasonTypeIds != null && viewModel.ReasonTypeIds.Count > 0)
            {
                _unitOfWork.RepositoryCRUD<ReasonDetail>().DeleteWhere(r => r.ReasonId == viewModel.Id);

                foreach (int reasonTypeId in viewModel.ReasonTypeIds)
                {
                    ReasonDetail reasonDetail = new ReasonDetail();
                    reasonDetail.ReasonId = reason.Id;
                    reasonDetail.ReasonTypeId = reasonTypeId;
                    _unitOfWork.RepositoryCRUD<ReasonDetail>().Insert(reasonDetail);
                }
                _unitOfWork.Commit();
            }

            return ResponseViewModel.CreateSuccess(reason);
        }

        public ResponseViewModel UpdateReason(ReasonViewModel viewModel)
        {
            Reason reason = Mapper.Map<Reason>(viewModel);
            _unitOfWork.RepositoryCRUD<Reason>().Update(reason);
            _unitOfWork.Commit();

            _unitOfWork.RepositoryCRUD<ReasonDetail>().DeleteWhere(r => r.ReasonId == viewModel.Id);

            if (viewModel.ReasonTypeIds != null && viewModel.ReasonTypeIds.Count > 0)
            {
                foreach (int reasonTypeId in viewModel.ReasonTypeIds)
                {
                    ReasonDetail reasonDetail = new ReasonDetail();
                    reasonDetail.ReasonId = reason.Id;
                    reasonDetail.ReasonTypeId = reasonTypeId;
                    _unitOfWork.RepositoryCRUD<ReasonDetail>().Insert(reasonDetail);
                }
                _unitOfWork.Commit();
            }

            return ResponseViewModel.CreateSuccess(reason);
        }
    }
}
