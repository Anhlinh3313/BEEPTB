using Core.Business.Services.Abstract;
using Core.Business.Services.Models;
using Core.Business.ViewModels.Vehicles;
using Core.Data.Abstract;
using Core.Entity.Entities;
using Core.Entity.Procedures;
using Core.Infrastructure.Helper;
using Core.Infrastructure.ViewModels;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Core.Business.Services
{
    public class VehicleService : GeneralService<VehiclesViewModel, Vehicle>, IVehicleService
    {
        public VehicleService(Microsoft.Extensions.Logging.ILogger<dynamic> logger,
            IOptions<AppSettings> optionsAccessor,
            IUnitOfWork unitOfWork) : base(logger, optionsAccessor, unitOfWork)
        {
        }

        public ResponseViewModel VehicleSuggestion(int transportationId, int? branchId)
        {
            var transportation = _unitOfWork.RepositoryR<Transportation>().GetSingle(transportationId);
            if (transportation != null)
            {
                if (branchId != null)
                {
                    var vehicle = _unitOfWork.RepositoryR<Vehicle>().FindBy(x => x.VehicleTypeId == transportation.VehicleTypeId && x.VehicleStatusId == IdentityHelper.VehicleStatus.Free
                        && x.BranchId == branchId);
                    if(vehicle != null)
                    {
                       return ResponseViewModel.CreateSuccess(vehicle);
                    }
                    else
                    {
                        return ResponseViewModel.CreateError("Không tìm thấy xe phù hợp");
                    }
                }
                else
                {
                    var vehicle = _unitOfWork.RepositoryR<Vehicle>().FindBy(x => x.VehicleTypeId == transportation.VehicleTypeId && x.VehicleStatusId == IdentityHelper.VehicleStatus.Free);
                     if (vehicle != null)
                     {
                        return ResponseViewModel.CreateSuccess(vehicle);
                     }
                     else
                     {
                        return ResponseViewModel.CreateError("Không tìm thấy xe phù hợp");
                     }
                }
            }
            else
            {
                return ResponseViewModel.CreateError("Không tìm thấy chuyến xe");
            }
        }
    }
}
