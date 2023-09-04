using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Core.Business.Services.Abstract;
using Core.Data.Abstract;
using Core.Entity.Entities;
using Core.Infrastructure.ViewModels;
using Newtonsoft.Json.Linq;

namespace Core.Business.Services
{
    public class SMSService : ISMSService
    {
        readonly private IUnitOfWork _unitOfWork;

        public SMSService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<ResponseViewModel> SendSMS(string phoneNumber, string content)
        {
            HttpClient httpClient = new HttpClient();

            HttpRequestMessage httpRequestMessage = new HttpRequestMessage();
            httpRequestMessage.Method = HttpMethod.Post;
            httpRequestMessage.RequestUri = new Uri("http://app.sms.fpt.net/oauth2/token");

            var session_id = RandomString();

            var parameters = new List<KeyValuePair<string, string>>();
            parameters.Add(new KeyValuePair<string, string>("grant_type", "client_credentials"));
            parameters.Add(new KeyValuePair<string, string>("client_id", "78b2c4E7cfFe111fe356d5328aa05ad4b1739db1"));
            parameters.Add(new KeyValuePair<string, string>("client_secret", "c1d612f559d8B4c094c04502bc8Ddee40e865fd00d35dCe097765d3d3c59a57E56fb49c1"));
            parameters.Add(new KeyValuePair<string, string>("scope", "send_brandname_otp"));
            parameters.Add(new KeyValuePair<string, string>("session_id", session_id));

            FormUrlEncodedContent formUrlEncodedContent = new FormUrlEncodedContent(parameters);
            httpRequestMessage.Content = formUrlEncodedContent;

            // Thực hiện Post
            var response = await httpClient.SendAsync(httpRequestMessage);

            var responseContent = await response.Content.ReadAsStringAsync();
            var res = JObject.Parse(responseContent);

            if (res["error"] != null)
            {
                var message = res["error_description"].ToString();
                return new ResponseViewModel { IsSuccess = false, Message = message, Data = null };
            }
            else
            {
                var token = res["access_token"].ToString();

                httpClient = new HttpClient();
                httpRequestMessage = new HttpRequestMessage();

                httpRequestMessage.Method = HttpMethod.Post;
                httpRequestMessage.RequestUri = new Uri("http://app.sms.fpt.net/api/push-brandname-otp");

                var message = Convert.ToBase64String(Encoding.UTF8.GetBytes(content));

                parameters = new List<KeyValuePair<string, string>>();
                parameters.Add(new KeyValuePair<string, string>("access_token", token));
                parameters.Add(new KeyValuePair<string, string>("session_id", session_id));
                parameters.Add(new KeyValuePair<string, string>("BrandName", "FTI"));
                parameters.Add(new KeyValuePair<string, string>("Phone", phoneNumber));
                parameters.Add(new KeyValuePair<string, string>("Message", message));

                formUrlEncodedContent = new FormUrlEncodedContent(parameters);
                httpRequestMessage.Content = formUrlEncodedContent;

                // Thực hiện Post
                response = await httpClient.SendAsync(httpRequestMessage);

                responseContent = await response.Content.ReadAsStringAsync();
                res = JObject.Parse(responseContent);

                if (res["error"] != null)
                {
                    return new ResponseViewModel { IsSuccess = false, Message = message, Data = null };
                }
                else
                {
                    SMS sms = new SMS();
                    sms.PhoneNumber = phoneNumber;
                    sms.Content = content;
                    _unitOfWork.RepositoryCRUD<SMS>().Insert(sms);
                    _unitOfWork.Commit();
                    return new ResponseViewModel { IsSuccess = true, Message = null, Data = sms };
                }
            }
        }

        private string RandomString()
        {
            Random random = new Random();
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            return new string(Enumerable.Repeat(chars, 30)
              .Select(s => s[random.Next(s.Length)]).ToArray());
        } 
    }
}
