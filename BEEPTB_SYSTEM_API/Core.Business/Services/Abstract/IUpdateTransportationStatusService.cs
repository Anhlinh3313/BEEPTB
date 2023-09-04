using Core.Infrastructure.ViewModels;

namespace Core.Business.Services.Abstract
{
    public interface IUpdateTransportationStatusService
    {
        ResponseViewModel UpdateTransportationStatus(int transportationsId, int transportationStatusId);
    }
}
