import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { TranslateModule } from '@ngx-translate/core';
import { Camera } from '@ionic-native/camera/ngx';
import { NgOtpInputModule } from 'ng-otp-input';
import { StarRatingModule } from 'ionic5-star-rating';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    TranslateModule,
    NgOtpInputModule,
    StarRatingModule
  ],
  declarations: [
    TabsPage,
  ],
  providers: [
    Camera
  ]
})
export class TabsPageModule { }
