import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController, ModalController, NavController } from '@ionic/angular';
import { ImageViewerComponent } from 'src/app/shared/components/image-viewer/image-viewer.component';
import { CustomerModel } from 'src/app/shared/models-management/models/customer.model';
import { IonInputModel } from 'src/app/shared/models/ionInput.model';
import { AuthService } from 'src/app/shared/services/apis/auth.service';
import { CustomerService } from 'src/app/shared/services/apis/customer.service';
import { MsgService } from 'src/app/shared/services/locals/msg-message.service';
import { environment } from 'src/environments/environment';
import { OTPPage } from './otp/otp.page';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html'
})
export class SignUpPage implements OnInit {

  phone: string;
  password: string;
  errorPhone: boolean = true;
  checkPhone: boolean = true;
  errorPassword: boolean = true;
  errorPasswordLength: boolean = true;
  errorEmail: boolean = true;
  checkEmailInput: boolean = true;
  errorBirthday: boolean = true;
  checkBirthdayInput: boolean = true;
  checkName: boolean = true;
  errorName: boolean = true;
  phoneNumber: string
  passWord: string
  email: string
  birthDate: any;
  name: string
  gender: boolean = true;
  customerModel: CustomerModel = new CustomerModel();
  inputElementPassword: IonInputModel = new IonInputModel();
  eyeShow = environment.eyeShow;
  eyeHide = environment.eyeHide;
  maxLengthName = 30;

  constructor(
    private msgService: MsgService,
    private router: Router,
    private nav: NavController,
    private modalController: ModalController,
    private actionSheetController: ActionSheetController,
    private camera: Camera,
    private customerService: CustomerService,
    private authService: AuthService,
  ) { }

  lstImages = [
    {
      id: 0,
      base64: '',
      isLoading: false
    },
    {
      id: 1,
      base64: '',
      isLoading: false
    }
  ];

  ngOnInit() {
    this.inputElementPassword.src = this.eyeHide;
    this.inputElementPassword.type = 'password';
  }

  signIn() {
    this.router.navigate(["/signIn"]);
  }

  inputPhone() {
    if (this.phoneNumber) {
      this.errorPhone = true;
      this.checkPhoneNumber();
      return;
    }
    this.errorPhone = false;
    this.checkPhone = false;

  }

  async checkPhoneNumber() {
    let res = await this.customerService.CheckPhoneNumber(this.phoneNumber);
    if (res[0].isSuccess) {
      this.checkPhone = false;
    } else {
      this.checkPhone = true;
    }
  }

  inputPass() {
    if (this.passWord) {
      this.errorPassword = true;
      if (this.passWord.length < 6) {
        this.errorPasswordLength = false;
      } else {
        this.errorPasswordLength = true;
      }
      return;
    }
    this.errorPassword = false;
    this.errorPasswordLength = false;
  }

  inputEmail() {
    if (this.email) {
      this.errorEmail = true;
      this.checkEmail(this.email);
      return;
    }
    this.errorEmail = false;
    this.checkEmailInput = false;
  }

  checkEmail(item) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(item).toLowerCase())) {
      this.checkEmailInput = false;
    } else {
      this.checkEmailInput = true;
    }
  }

  inputBirthDate() {
    if (this.birthDate) {
      this.errorBirthday = true;
      this.checkBirthday();
      return;
    }
    this.errorBirthday = false;
    this.checkBirthdayInput = false;
  }

  checkBirthday() {
    let checkBirthDate = new Date(this.birthDate).getTime();
    let dateNow = new Date().getTime();
    if (checkBirthDate > dateNow) {
      this.checkBirthdayInput = false;
    } else {
      this.checkBirthdayInput = true;
    }
  }

  inputName() {
    if (this.name) {
      this.errorName = true;
      this.checkNameInput();
      return;
    }
    this.errorName = false;
    this.checkName = false;
  }

  checkNameInput(){
    if(this.name.length > 30){
      this.checkName = false;
    } else {
      this.checkName = true;
    }
  }

  async signup() {
    if (!this.isValidData()) return;
    this.customerModel.phoneNumber = this.phoneNumber.trim();
    this.customerModel.passWord = this.passWord.trim();
    if (this.email) {
      this.customerModel.email = this.email.trim();
    }
    if (this.birthDate) {
      this.customerModel.birthDate = new Date(this.birthDate);
    }
    if (this.phoneNumber) {
      this.customerModel.name = this.phoneNumber.trim();
    }
    this.customerModel.gender = this.gender;
    //open OTP page
    this.laodOTP();
  }

  async laodOTP() {
    if (!this.isValidData()) return;

    let res = await this.authService.creeateCustomerSendSMS(this.phoneNumber);
    if (res.isSuccess) {
      this.openModalOTP(this.customerModel, res.data.content);
      this.msgService.success("OTP đã được gửi đến số điện thoại đăng kí");
    } else {
      this.msgService.error("Không thể gửi OTP về số điện thoại đăng kí");
    }
  }

  async openModalOTP(item, content) {
    const modal = await this.modalController.create({
      component: OTPPage,
      componentProps: {
        "customerModel": item,
        "checkCreate": true,
        "content": content,
      }
    });
    modal.present();
  }

  isValidData() {

    let checkBirthDate = new Date(this.birthDate).getTime();
    let dateNow = new Date().getTime();

    this.checkPhoneNumber();
    this.checkPhoneNumber();
    this.checkEmail(this.email);

    if (checkBirthDate > dateNow) {
      this.msgService.error("ngày sinh không được lớn hơn ngày hiện tại");
      return false;
    }

    if (!this.phoneNumber || !this.passWord || !this.email || !this.birthDate || !this.name) {
      this.msgService.error("Vui lòng nhập đầy đủ thông tin!");
      return false;
    }

    if (!this.errorPhone) {
      return false;
    }

    if (!this.checkPhone && this.errorPhone) {
      return false;
    }

    if (!this.errorPassword) {
      return false;
    }

    if (!this.errorPasswordLength && this.errorPassword) {
      return false;
    }
    
    if (!this.errorEmail) {
      return false;
    }
    
    if (!this.checkEmailInput && this.errorEmail) {
      return false;
    }

    if (!this.errorBirthday) {
      return false;
    }
    
    if (!this.checkBirthdayInput && this.errorBirthday) {
      return false;
    }

    if (!this.errorName) {
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
}
