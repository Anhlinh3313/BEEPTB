using Core.Business.Core.Helpers;
using Core.Business.Services.Abstract;
using Core.Business.Services.Models;
using Core.Business.ViewModels.Locations;
using Core.Business.ViewModels.Supports;
using Core.Data.Abstract;
using Core.Entity.Entities;
using Core.Infrastructure.Helper;
using Core.Infrastructure.Utils;
using Core.Infrastructure.ViewModels;
using Microsoft.Extensions.Options;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Business.Services
{
    public class LocationService : GeneralService<SupportsViewModel, Support>, ILocationService
    {
        public LocationService(Microsoft.Extensions.Logging.ILogger<dynamic> logger,
            IOptions<AppSettings> optionsAccessor,
            IUnitOfWork unitOfWork) : base(logger, optionsAccessor, unitOfWork)
        {
        }

        public ResponseViewModel GetInfoLocation(string provinceName = null, string districtName = null, string wardName = null)
        {
            LocationInfoViewModel locationInfoViewModel = new LocationInfoViewModel();

            if (!Util.IsNull(provinceName))
            {
                provinceName = provinceName.ToLower().Replace("null", "").Replace("undefined", "");

                var provinces = _unitOfWork.RepositoryR<Province>().GetAll();
                var dataProvinceId = StringHelper.GetBestMatches(provinces, "Id", "Name", provinceName, null, StringHelper._REPLACES_LOCATION_NAME);
                if (Util.IsInt(dataProvinceId))
                {
                    locationInfoViewModel.ProvinceId = (int)dataProvinceId;
                    locationInfoViewModel.ProvinceName = provinces.FirstOrDefault(x => x.Id == locationInfoViewModel.ProvinceId).Name;
                }
            }

            if (!Util.IsNull(districtName) && locationInfoViewModel.ProvinceId != 0)
            {
                districtName = districtName.ToLower().Replace("null", "").Replace("undefined", "");

                var districts = _unitOfWork.RepositoryR<District>().FindBy(o => o.ProvinceId == locationInfoViewModel.ProvinceId);
                var dataDistrictId = StringHelper.GetBestMatches(districts, "Id", "Name", districtName, null, StringHelper._REPLACES_LOCATION_NAME);
                if (Util.IsInt(dataDistrictId))
                {
                    locationInfoViewModel.DistrictId = (int)dataDistrictId;
                    locationInfoViewModel.DistrictName = districts.FirstOrDefault(x => x.Id == locationInfoViewModel.DistrictId).Name;
                }
            }

            if (!Util.IsNull(wardName) && locationInfoViewModel.DistrictId > 0)
            {
                wardName = wardName.ToLower().Replace("null", "").Replace("undefined", "");

                var wards = _unitOfWork.RepositoryR<Ward>().FindBy(o => o.DistrictId == locationInfoViewModel.DistrictId);
                var dataWardId = StringHelper.GetBestMatches(wards, "Id", "Name", wardName, null, StringHelper._REPLACES_LOCATION_NAME);
                if (Util.IsInt(dataWardId))
                {
                    locationInfoViewModel.WardId = (int)dataWardId;
                    locationInfoViewModel.WardName = wards.FirstOrDefault(x => x.Id == locationInfoViewModel.WardId).Name;
                }
            }

            return ResponseViewModel.CreateSuccess(locationInfoViewModel);
        }
    }
}
