import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(
      private loadingController: LoadingController
  ) { }

  async presentLoading() {
    const loading = await this.loadingController.create({
      duration: 20000,
      showBackdrop: true,
      spinner: "circles"
    });
    await loading.present();

  }
  
  dismissLoading(){
    this.loadingController.dismiss();
  }
  
}
