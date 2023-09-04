import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
import { CustomerModel } from 'src/app/shared/models-management/models/customer.model';
import { UserModel } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/apis/auth.service';
import { CustomerService } from 'src/app/shared/services/apis/customer.service';
import { LocalStorgeService } from 'src/app/shared/services/locals/local-storge.service';
import { MsgService } from 'src/app/shared/services/locals/msg-message.service';
import { ResetPasswordPage } from '../../signIn/reset-password/reset-password.page';
import { SignInPage } from '../../signIn/signIn.page';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html'
})
export class OTPPage implements OnInit {

  OTP: string;
  inputOTP: string;
  phoneNumber: string;
  userModel: UserModel = new UserModel();
  customerModel: CustomerModel = new CustomerModel();
  checkCreate: boolean = false;
  checkForgotPassWord: boolean = false;
  content: string;
  timeCountdown = 60;
  interVal: any;
  initTimeout: any;

  constructor(
    private modalController: ModalController,
    private localStorageService: LocalStorgeService,
    private navParams: NavParams,
    private authService: AuthService,
    private msgService: MsgService,
    private customerService: CustomerService,
    private router: Router

  ) {
    this.OTP = this.navParams.get('OTP');
    this.phoneNumber = this.navParams.get('PhoneNumber');
    this.checkForgotPassWord = this.navParams.get('checkForgotPassWord');
    this.customerModel = this.navParams.get('customerModel');
    this.checkCreate = this.navParams.get('checkCreate');
    this.content = this.navParams.get('content');

  }

  ngOnInit() {
    this.resendOTP();
  }

  close() {
    this.modalController.dismiss();
  }

  async save() {
    if (!this.isValidData()) return;
    let localOTP = this.localStorageService.get("otp");

    if (this.inputOTP == localOTP) {
      if (this.checkForgotPassWord) {
        this.userModel = await this.authService.getUserByPhoneNumber(this.phoneNumber);
        this.goToResetPassword(this.userModel);
      }
      if (this.checkCreate) {
        let res = await this.customerService.CreateCustomer(this.customerModel);
        if (res.isSuccess) {
          this.msgService.success("Đăng kí thành công");
          this.goToHome();
        } else {
          this.msgService.error(res.message || "Đăng kí không thành công");
        }
      }
      this.localStorageService.singleClear("otp");
      this.close();
    } else {
      this.msgService.error("Mã OTP không khớp");
    }
    //remoce otp
    this.removeExpireOPT();
  }

  isValidData() {
    if (!this.inputOTP) {
      this.msgService.error("Vui lòng nhập mã OTP");
      return false
    }

    return true;
  }

  async resendOTP() {
    if (this.checkForgotPassWord) {
      this.localStorageService.set("otp", this.OTP);
    }
    if (this.checkCreate) {
      this.localStorageService.set("otp", this.content);
    }
    this.removeExpireOPT();
    this.CountTime();
  }

  removeExpireOPT() {
    this.initTimeout = setTimeout(() => {
      this.localStorageService.singleClear("otp");
    }, 60000);
  }

  CountTime() {
    this.timeCountdown = 60;
    this.interVal = setInterval(() => {
      this.timeCountdown--;
      if (this.timeCountdown == 0) {
        clearInterval(this.interVal);
      }
    }, 1000)
  }

  async goToResetPassword(item) {
    //open modal
    const modal = await this.modalController.create({
      component: ResetPasswordPage,
      componentProps: {
        "userId": item.id,
      }
    });
    // close modal
    modal.onDidDismiss().then((res) => {
    });
    return await modal.present();
  }

  onOtpChange(event) {
    this.inputOTP = event;
  }

  async goToHome() {
    this.router.navigate(['/signIn']);
  }

  async sendTo() {
    clearInterval(this.interVal);
    clearTimeout(this.initTimeout)
    if (this.checkForgotPassWord) {
      let res = await this.authService.sendSMSUser(this.phoneNumber);
      if (res.isSuccess) {
        this.OTP = res.data.content;
        this.resendOTP();
      }
    }

    if (this.checkCreate) {
      let res = await this.authService.creeateCustomerSendSMS(this.customerModel.phoneNumber);
      if (res.isSuccess) {
        this.content = res.data.content;
        this.resendOTP();
      }
    }
  }
}
