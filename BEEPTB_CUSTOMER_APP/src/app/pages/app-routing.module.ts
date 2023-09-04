import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/guards/auth.guard';
import { AuthLoginGuard } from '../shared/guards/authLogin.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule), canActivate: [AuthLoginGuard]
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignUpPageModule), canActivate: [AuthLoginGuard]
  },
  {
    path: 'signIn', 
    loadChildren: () => import('./signIn/signIn.module').then(m => m.SignInPageModule), canActivate: [AuthLoginGuard]
  },
  {
    path: 'tabs', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule), canActivateChild: [AuthGuard]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
