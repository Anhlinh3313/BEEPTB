import { Injectable } from '@angular/core';
import { GeneralService } from './general.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

import { ResponseModel } from '../../models-management/models/response.model';
import { LocalStorgeService } from '../locals/local-storge.service';
import { Constant } from '../../infrastructure/constant';
import { SignInModel } from '../../models-management/models/signIn.model';
import { MsgService } from '../locals/msg-message.service';
import { ChangePasswordModel } from '../../models/changePassword.model';
import { ChangePasswordForgotModel } from '../../models/change-password.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends GeneralService {

  constructor(
    protected http: HttpClient,
    protected alertService: MsgService,
    private localStorgeService: LocalStorgeService,

  ) {
    super(http, alertService, environment.apiCoreUrl, "Account");
  }

  public isLogged(): boolean {
    var isLogged = this.localStorgeService.get(Constant.auths.isLoginIn);
    if (isLogged === 'true') {
      return true;
    }
    return false;
  }

  async login(model: SignInModel): Promise<ResponseModel> {
    const res = await this.postCustomApi('SignIn', model);
    if (res.isSuccess) {
      this.localStorgeService.set(Constant.auths.expires, res.data.expires);
      this.localStorgeService.set(Constant.auths.isLoginIn, 'true');
      this.localStorgeService.set(Constant.auths.userId, res.data.userId);
      this.localStorgeService.set(Constant.auths.userName, res.data.userName);
      this.localStorgeService.set(Constant.auths.token, res.data.token);
      this.localStorgeService.set(Constant.auths.tokenNIC, res.data.tokenNIC);
    }
    return res;
  }

  async changePassword(model: ChangePasswordModel){
    const res = await this.postCustomApi('ChangePassWord', model);
    return res;
  }

  public logout() {
    this.localStorgeService.clear();
  }

  async sendSMSUser(phoneNumber: string): Promise<ResponseModel>{
    let params = new HttpParams();
    params = params.append("phoneNumber", phoneNumber + '');
    const res = await this.getWithParams('SendSMSUser', params);
    return res;
  }

  async creeateCustomerSendSMS(phoneNumber: string): Promise<ResponseModel>{
    let params = new HttpParams();
    params = params.append("phoneNumber", phoneNumber + '');
    const res = await this.getWithParams('CreeateCustomerSendSMS', params);
    return res;
  }

  async getUserByPhoneNumber(phoneNumber: string) {
    let params = new HttpParams();
    params = params.append("phoneNumber", phoneNumber + "");
    let res = await this.getWithParams("GetUserByPhoneNumber", params);
    if (!this.isValidResponse(res)) return;
    return res.data;
  }

  async changePassWordForgotPassword(model: ChangePasswordForgotModel): Promise<ResponseModel> {
    const res = await this.postCustomApi('ChangePassWordForgotPassword', model);
    return res;
  }

}
