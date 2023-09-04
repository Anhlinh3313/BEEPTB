import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Camera } from '@ionic-native/camera/ngx';
//
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { CustomerDetailPageRoutingModule } from './customer-detail-routing.model';
import { CustomerDetailPage } from './customer-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    CustomerDetailPageRoutingModule
  ],
  declarations: [CustomerDetailPage],
  providers:[
    Camera
  ]
})
export class CustomerDetailPageModule { }
