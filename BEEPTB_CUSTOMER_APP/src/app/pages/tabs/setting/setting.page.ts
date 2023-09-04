import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorgeService } from 'src/app/shared/services/locals/local-storge.service';
import { ChangePasswordPage } from './change-password/change-password.page';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
})
export class SettingPage implements OnInit {

  language: string = 'vi';

  constructor(
    private modalController: ModalController,
    private localStorageService: LocalStorgeService,
    public translate: TranslateService
  ) {
  }

  ngOnInit() {
    this.getCurrentLanguale();
  }

  customAlertOptions: any = {
    header: "Chọn ngôn ngữ",
  };

  back(){
    window.history.back();
  }

  async goToChangePass(){
    //open modal
    const modal = await this.modalController.create({
        component: ChangePasswordPage,
        componentProps: {

        }
    });

    // close modal
    modal.onDidDismiss().then((res) => {

    });
    return await modal.present();
  }

  async getCurrentLanguale(){
    this.language = await this.translate.getDefaultLang();
  }

  changeLanguage(){
    this.localStorageService.set("language", this.language);
    this.translate.setDefaultLang(this.language);
  }

}
