import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { NgOtpInputModule } from 'ng-otp-input';
import { OtpPageModule } from '../signup/otp/otp.module';
import { HomePagePageModule } from '../tabs/home/home.module';
import { ForgotPasswordPage } from './forgot-password/forgot-password.page';
import { ResetPasswordPage } from './reset-password/reset-password.page';
import { SignInPageRoutingModule } from './signIn-routing.module';
import { SignInPage } from './signIn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignInPageRoutingModule,
    TranslateModule,
    NgOtpInputModule,
    HomePagePageModule,
    OtpPageModule
  ],
  declarations: [
    SignInPage,
    ForgotPasswordPage,
    ResetPasswordPage,
  ]
})
export class SignInPageModule { }
