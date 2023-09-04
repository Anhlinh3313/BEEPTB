import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  checkRedVN: string;
  checkRedENG: string;
  version: any;
  language: string;

  constructor(
    private router: Router,
    private translateService: TranslateService
  ) { }

  ngOnInit() {
    this.intData();
  }

  getCurrentLanguale() {
    this.language = this.translateService.getDefaultLang();
    if (this.language == "vi") {
      this.checkRedVN = "color: #fff;";
      this.checkRedENG = "opacity: 0.5;";
    } else {
      this.checkRedENG = "color: #fff;";
      this.checkRedVN = "opacity: 0.5;";
    }
  }

  intData() {
    this.getCurrentLanguale();
  }

  goToSignUp() {
    this.router.navigate(["/signup"]);
  }

  signIn() {
    this.router.navigate(["/signIn"]);
  }

  changelanguage(lang){
    if(lang){
      this.translateService.setDefaultLang(lang);
      if(lang == "vi"){
        this.checkRedVN = "color: #fff;";
        this.checkRedENG = "opacity: 0.5;";
      } else{
        this.checkRedENG = "color: #fff;";
        this.checkRedVN = "opacity: 0.5;";
      }
    }
  }
}
