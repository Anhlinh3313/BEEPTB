import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/shared/services/apis/auth.service';
import { MsgService } from 'src/app/shared/services/locals/msg-message.service';
import { OTPPage } from '../../signup/otp/otp.page';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html'
})
export class ForgotPasswordPage implements OnInit {

  phoneNumber: string;

  constructor(
    private modalController: ModalController,
    private authService: AuthService,
    private msgService: MsgService,
  ) { }

  ngOnInit() {
  }

  close() {
    this.modalController.dismiss();
  }

  async signUp() {
    if (!this.isValidData()) return;
    let res = await this.authService.sendSMSUser(this.phoneNumber);
    if (res.isSuccess) {
      this.close();
      await this.goToOTPPage(res.data);
    } else {
      this.msgService.error(res.message || "Số điện thoại không chính sách lui lòng kiểm tra lại");
    }
  }

  isValidData() {
    if (!this.phoneNumber) {
      this.msgService.error("Vui lòng nhập số điện thoại");
      return false
    }

    return true;
  }

  async goToOTPPage(item) {
    //open modal
    const modal = await this.modalController.create({
      component: OTPPage,
      componentProps: {
        "OTP": item.content,
        "PhoneNumber": item.phoneNumber,
        "checkForgotPassWord": true,
      }
    });
    // close modal
    modal.onDidDismiss().then((res) => {
    });
    return await modal.present();
  }

}
