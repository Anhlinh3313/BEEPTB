import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { SignUpPageRoutingModule } from './signup-routing.module';
import { SignUpPage } from './signup.page';
import { TranslateModule } from '@ngx-translate/core';
import { OTPPage } from './otp/otp.page';
import { NgOtpInputModule } from 'ng-otp-input';
import { Camera } from '@ionic-native/camera/ngx';
import { OtpPageModule } from './otp/otp.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpPageRoutingModule,
    TranslateModule,
    NgOtpInputModule,
    OtpPageModule
  ],
  declarations: [SignUpPage],
  providers:[
    Camera
  ]
})
export class SignUpPageModule {}
