import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { SignInModel } from 'src/app/shared/models-management/models/signIn.model';
import { IonInputModel } from 'src/app/shared/models/ionInput.model';
import { AuthService } from 'src/app/shared/services/apis/auth.service';
import { MsgService } from 'src/app/shared/services/locals/msg-message.service';
import { environment } from 'src/environments/environment';
import { ForgotPasswordPage } from './forgot-password/forgot-password.page';

@Component({
  selector: 'app-signIn',
  templateUrl: './signIn.page.html',
})
export class SignInPage implements OnInit {

  userName: string;
  passWord: string;

  signInModel: SignInModel = new SignInModel();
  inputElementPassword: IonInputModel = new IonInputModel();
  eyeShow = environment.eyeShow;
  eyeHide = environment.eyeHide;
  
  constructor(
    private router: Router,
    private nav: NavController,
    private authService: AuthService,
    private msgService: MsgService,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    this.inputElementPassword.src = this.eyeHide;
    this.inputElementPassword.type = 'password';
  }

  signup() {
    this.authService.logout();
    this.router.navigate(["/signup"]);
  }

  async signIn() {
    if (!this.isValidData()) return;
    this.signInModel.userName = this.userName.trim();
    this.signInModel.passWord = this.passWord.trim();
    let res = await this.authService.login(this.signInModel);
    if (res.isSuccess) {
      this.router.navigate(["/tabs/home"]);
      this.msgService.success("Đăng nhập thành công");
    } else {
      this.msgService.error(res.message || "Đăng nhập thất bại");
    }
  }
   
  isValidData() {
    if (!this.userName) {
      this.msgService.error("Vui lòng nhập số điện thoại");
      return false
    }

    if (this.userName.length > 11) {
      this.msgService.error("Số điện thoại không lớn hơn 11 kí tự");
      return false
    }

    if (!this.passWord) {
      this.msgService.error("Vui lòng nhập mật khẩu");
      return false
    }

    if (this.passWord.length < 6) {
      this.msgService.error("Mật khẩu phải lớn hơn 6 kí tự");
      return false
    } 
    return true;
  }

  async forgotPassword() {
    //open modal
    const modal = await this.modalController.create({
      component: ForgotPasswordPage,
      componentProps: {
      }
    });
    // close modal
    modal.onDidDismiss().then((res) => {

    });
    return await modal.present();
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
}
