import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { BookingHistoryRoutingModulee } from './booking-history-routing.module';
import { BookingHistoryPage } from './booking-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    BookingHistoryRoutingModulee,
  ],
  declarations: [BookingHistoryPage]
})
export class BookingHistoryPageModule { }
