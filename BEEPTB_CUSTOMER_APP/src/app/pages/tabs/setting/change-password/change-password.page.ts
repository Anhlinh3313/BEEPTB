import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { ChangePasswordModel } from 'src/app/shared/models/changePassword.model';
import { IonInputModel } from 'src/app/shared/models/ionInput.model';
import { AuthService } from 'src/app/shared/services/apis/auth.service';
import { LoadingService } from 'src/app/shared/services/locals/loading.service';
import { LocalStorgeService } from 'src/app/shared/services/locals/local-storge.service';
import { MsgService } from 'src/app/shared/services/locals/msg-message.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
})
export class ChangePasswordPage implements OnInit {

  @ViewChild('currentPass') inputCurrentPass ;

  eyeShow = environment.eyeShow;
  eyeHide = environment.eyeHide;
  inputElementPassword: IonInputModel = new IonInputModel();
  inputElementConfirmPassword: IonInputModel = new IonInputModel();
  inputElementCurrentPassWord: IonInputModel = new IonInputModel();
  focusCurrentPass = false;
  focusPass = false;
  focusCconfirmPass = false;

  constructor(
    private router: Router,
    private modalController: ModalController,
    private authService: AuthService,
    private localStorageService: LocalStorgeService,
    private msgService: MsgService,
    private loadingService: LoadingService
  ) {
  }

  changePasswordModel: ChangePasswordModel = new ChangePasswordModel();
  confirmPass: string;
  userId = this.localStorageService.get("userId");

  ngOnInit() {
    this.intData();
  }

  intData(){
    this.inputElementPassword.src = this.eyeHide;
    this.inputElementPassword.type = 'password';
    this.inputElementConfirmPassword.src = this.eyeHide;
    this.inputElementConfirmPassword.type = 'password';
    this.inputElementCurrentPassWord.src = this.eyeHide;
    this.inputElementCurrentPassWord.type = 'password';
  }

  back() {
    this.modalController.dismiss();
  }

  async save() {
    if (!this.isValidData()) return;
    this.loadingService.presentLoading();
    this.changePasswordModel.userId = this.userId;
    let res = await this.authService.changePassword(this.changePasswordModel);
    if (res.isSuccess) {
      this.msgService.success("Đổi mật khẩu thành công");
      this.back();
      this.loadingService.dismissLoading();
      this.router.navigate(["/tabs/home"]);
    } else {
      let a = Object.values(res.data)
      this.msgService.error(a.toString() || "Không tìm thấy vị trí hiện tại");
      this.loadingService.dismissLoading();
    }
    return true;
  }

  isValidData() {

    if (!this.changePasswordModel.currentPassWord) {
      this.msgService.error("Vui lòng nhập mật khẩu hiện tại");
      return false;
    }

    if (!this.changePasswordModel.newPassWord) {
      this.msgService.error("Vui lòng nhập mật khẩu mới");
      return false;
    }

    if (this.changePasswordModel.newPassWord.length < 6) {
      this.msgService.error("Vui lòng nhập mật khẩu mới lớn hoặc bằng 6 kí tự");
      return false;
    }

    if (!this.confirmPass) {
      this.msgService.error("Vui lòng nhập mật khẩu xác nhận");
      return false;
    }

    if (this.confirmPass.length < 6) {
      this.msgService.error("Vui lòng nhập mật khẩu xác nhận lớn hoặc bằng 6 kí tự");
      return false;
    }

    if (this.confirmPass != this.changePasswordModel.newPassWord) {
      this.msgService.error("Mật khẩu xác nhận không chính xác");
      return false;
    }

    return true;
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

  onClickCurrentPassWord(){
    if (this.inputElementCurrentPassWord.src === this.eyeShow) {
      this.inputElementCurrentPassWord.src = this.eyeHide;
      this.inputElementCurrentPassWord.type = 'password';
      this.focusCurrentPass = true;
    } else if (this.inputElementCurrentPassWord.src === this.eyeHide) {
      this.inputElementCurrentPassWord.src = this.eyeShow;
      this.inputElementCurrentPassWord.type = 'text';
      this.focusCurrentPass = true;
    }
  }

}
