import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CloneBookingPage } from './clone-booking.page';


const routes: Routes = [
  {
    path: '', 
    component: CloneBookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CloneBookingRoutingModule { }
