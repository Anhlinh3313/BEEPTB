import { Injectable } from '@angular/core';
import { GeneralService } from './general.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
//
import { ResponseModel } from '../../models-management/models/response.model';
import { MsgService } from '../locals/msg-message.service';
import { CustomerModel } from '../../models-management/models/customer.model';
import { UserModel } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends GeneralService {

  constructor(
    protected http: HttpClient,
    protected alertService: MsgService,
  ) {
    super(http, alertService, environment.apiCoreUrl, "Customer");
  }

  async CreateCustomer(model: CustomerModel): Promise<ResponseModel> {
    const res = await this.postCustomApi('CreateCustomer', model);
    return res;
  }

  async getCurrentCustomer(Id: string): Promise<ResponseModel>{
    let params = new HttpParams();
    params = params.append("userId", Id + '');
    const res = await this.getWithParams('GetCustomerByUserId', params);
    return res;
  }
  async CheckPhoneNumber(phoneNumber: string) {
    let params = new HttpParams();
    params = params.append("phoneNumber", phoneNumber + "");
    let res = await this.getWithParams("CheckPhoneNumber", params);
    if (!this.isValidResponse(res)) return;
    return res.data;
  }

  async updateCustomer(model: UserModel): Promise<ResponseModel>{
    const res = await this.postCustomApi('UpdateCustomer', model);
    return res;
  }
}  