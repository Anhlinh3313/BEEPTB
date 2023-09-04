import { HttpClient, HttpParams } from "@angular/common/http";
import { MsgService } from '../locals/msg-message.service';
import { ResponseModel } from '../../models-management/models/response.model';

export class BaseService {

  constructor(protected httpClient: HttpClient,
    protected alertService: MsgService,
    protected apiUrl: string,
    protected apiName: string) { }

  async get(method: string): Promise<any> {
    return await this.httpClient.get(`${this.apiUrl}/${this.apiName}/${method}`).toPromise();
  }

  async getWithParams(method: string, params: HttpParams): Promise<any> {

    return await this.httpClient.get(`${this.apiUrl}/${this.apiName}/${method}`, { params: params }).toPromise() as any;
  }

  async post(method: string, model: any): Promise<any> {
    return await this.httpClient.post(`${this.apiUrl}/${this.apiName}/${method}`, model).toPromise() as any;
  }

  async Post(apiUrl: string, method: string, model: any): Promise<any> {
    return await this.httpClient.post(`${this.apiUrl}/${this.apiName}/${method}`, model).toPromise() as any;
  }

  async postCustomApi(apiMethod: string, model: any): Promise<ResponseModel> {
    return await this.httpClient.post<ResponseModel>(`${this.apiUrl}/${this.apiName}/${apiMethod}`, model).toPromise();
  }

  isValidResponse(res: any) {
    if (res.isSuccess) {
      return res;
    }
    else {
      this.alertService.error(res.message || "Có lỗi xảy ra, vui lòng thử lại sau");
      return false;
    }
  }
}
