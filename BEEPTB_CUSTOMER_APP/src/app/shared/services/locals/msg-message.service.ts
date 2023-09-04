import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MsgService {

  constructor(
    private alertController: AlertController,
    public toastController: ToastController
  ) { }

  async success(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: 'primary'
    });
    toast.present();
  }

  async warn(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: 'warning'
    });
    toast.present();
  }

  async error(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 5000,
      color: 'danger'
    });
    toast.present();
  }

  async alertOK(message) {
    const alert = await this.alertController.create({
      header: 'Thông báo',
      message: message,
      buttons: ['Đồng ý']
    });

    await alert.present();
  }

  async alertYesNo(message): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const alert = await this.alertController.create({
        header: 'Thông báo',
        message: message,
        buttons: [
          {
            text: 'Đóng',
            role: 'cancel',
            cssClass: 'color-gray',
            handler: () => {
              resolve(false);
            }
          }, {
            text: 'Đồng ý',
            handler: () => {
              resolve(true);
            }
          }
        ]
      });
      await alert.present();
    });
  }

  async checkInfoCustomerYesNo(message, cancelName, confirmName): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const alert = await this.alertController.create({
        header: 'Thông báo',
        message: message,
        buttons: [
          {
            text: cancelName,
            role: 'cancel',
            cssClass: 'color-gray',
            handler: () => {
              resolve(false);
            }
          }, {
            text: confirmName,
            handler: () => {
              resolve(true);
            }
          }
        ]
      });
      await alert.present();
    });
  }
}
