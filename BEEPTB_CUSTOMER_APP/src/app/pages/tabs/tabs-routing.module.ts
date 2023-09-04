import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePagePageModule)
      },
      {
        path: 'customer-detail',
        loadChildren: () => import('./customer-detail/customer-detail.module').then(m => m.CustomerDetailPageModule)
      },
      {
        path: 'booking',
        loadChildren: () => import('./booking/booking.module').then(m => m.BookingPageModule)
      },
      {
        path: 'clone-booking/:bookingId',
        loadChildren: () => import('./clone-booking/clone-booking.module').then(m => m.CloneBookingPageModule)
      },
      {
        path: 'booking-success/:bookingId',
        loadChildren: () => import('./booking-success/booking-success.module').then(m => m.BookingSuccessPageModule)
      },
      {
        path: 'setting',
        loadChildren: () => import('./setting/setting.module').then(m => m.SettingPageModule)
      },
      {
        path: 'booking-history',
        loadChildren: () => import('./booking-history/booking-history.module').then(m => m.BookingHistoryPageModule)
      },
      {
        path: 'booking-detail/:bookingId',
        loadChildren: () => import('./booking-detail/booking-detail.module').then(m => m.BookingDetailPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
