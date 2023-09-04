import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
import { ChangePasswordForgotModel } from 'src/app/shared/models/change-password.model';
import { IonInputModel } from 'src/app/shared/models/ionInput.model';
import { AuthService } from 'src/app/shared/services/apis/auth.service';
import { MsgService } from 'src/app/shared/services/locals/msg-message.service';
import { environment } from 'src/environments/environment';
import { SignInPage } from '../signIn.page';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html'
})
export class ResetPasswordPage implements OnInit {

  userId: number;
  changePasswordModel: ChangePasswordForgotModel = new ChangePasswordForgotModel();
  passWordConfirm: string;
  eyeShow = environment.eyeShow;
  eyeHide = environment.eyeHide;
  inputElementPassword: IonInputModel = new IonInputModel();
  inputElementConfirmPassword: IonInputModel = new IonInputModel();
  
  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private msgService: MsgService,
    private authService: AuthService,
    private router: Router
  ) {
    this.userId = this.navParams.get('userId');
  }

  ngOnInit() {
    this.inputElementPassword.src = this.eyeHide;
    this.inputElementPassword.type = 'password';
    this.inputElementConfirmPassword.src = this.eyeHide;
    this.inputElementConfirmPassword.type = 'password';
  }

  close() {
    this.modalController.dismiss();
  }

  async signUp() {
    if (!this.isValidData()) return;
    this.changePasswordModel.userId = this.userId;
    this.changePasswordModel.newPassWord = this.changePasswordModel.newPassWord.trim();
    let res = await this.authService.changePassWordForgotPassword(this.changePasswordModel)
    if (res.isSuccess) {
      this.close();
      this.msgService.success("Đổi mật khẩu thành công");
      this.goToSigIn();
    }
  }

  isValidData() {

    if (this.changePasswordModel.newPassWord.length < 6) {
      this.msgService.error("Vui lòng nhập mật khẩu mới lớn hơn 6 kí tự");
      return false
    }

    if (!this.changePasswordModel.newPassWord) {
      this.msgService.error("Vui lòng nhập mật khẩu mới");
      return false
    }

    if (!this.passWordConfirm) {
      this.msgService.error("Vui lòng nhập mật khẩu xác nhận");
      return false
    }

    if (this.passWordConfirm != this.changePasswordModel.newPassWord) {
      this.msgService.error("Mật khẩu xác nhận không chính xác");
      return false
    }

    return true;
  }

  async goToSigIn() {
    this.router.navigate(["/signIn"]);
  }

  onClickPassword(){
    if (this.inputElementPassword.src === this.eyeShow) {
      this.inputElementPassword.src = this.eyeHide;
      this.inputElementPassword.type = 'password';
    } else if (this.inputElementPassword.src === this.eyeHide) {
      this.inputElementPassword.src = this.eyeShow;
      this.inputElementPassword.type = 'text';
    }
  }

  onClickConfirmPassword(){
    if (this.inputElementConfirmPassword.src === this.eyeShow) {
      this.inputElementConfirmPassword.src = this.eyeHide;
      this.inputElementConfirmPassword.type = 'password';
    } else if (this.inputElementConfirmPassword.src === this.eyeHide) {
      this.inputElementConfirmPassword.src = this.eyeShow;
      this.inputElementConfirmPassword.type = 'text';
    }
  }
}
