import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Camera } from '@ionic-native/camera/ngx';
//
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { ChangePasswordPage } from './change-password/change-password.page';
import { SettingPageRoutingModule } from './setting-routing.modult';
import { SettingPage } from './setting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    SettingPageRoutingModule
  ],
  declarations: [SettingPage, ChangePasswordPage],
  providers:[
  ]
})
export class SettingPageModule { }
