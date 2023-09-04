using System;
using System.Threading.Tasks;
using Core.Infrastructure.ViewModels;

namespace Core.Business.Services.Abstract
{
    public interface ISMSService
    {
        Task<ResponseViewModel> SendSMS(string phoneNumber, string content);
    }
}
