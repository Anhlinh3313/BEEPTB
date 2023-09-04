import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ImageViewerComponent } from 'src/app/shared/components/image-viewer/image-viewer.component';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AuthService } from 'src/app/shared/services/apis/auth.service';
import { UserModel } from 'src/app/shared/models/user.model';
import { LocalStorgeService } from 'src/app/shared/services/locals/local-storge.service';
import { CustomerService } from 'src/app/shared/services/apis/customer.service';
import { UploadService } from 'src/app/shared/services/apis/upload.service';
import { MsgService } from 'src/app/shared/services/locals/msg-message.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  lang: any;
  avatarImages = [
    {
      id: 0,
      base64: '',
      isLoading: false
    }
  ];
  user: UserModel;
  file: any;
  userId: number;
  prefix = "wwwroot";

  constructor(
    private router: Router,
    private actionSheetController: ActionSheetController,
    private modalController: ModalController,
    private camera: Camera,
    private authService: AuthService,
    private localStorageService: LocalStorgeService,
    private customerService: CustomerService,
    private uploadService: UploadService,
    private msgService: MsgService
  ) {

  }

  ngOnInit() {
    this.getCurrentUser();
  }

  ionViewWillEnter(){
    this.getCurrentUser();
  }

  close() {
    this.modalController.dismiss();
  }

  async getCurrentUser() {
    this.user = new UserModel();
    let Id = await this.localStorageService.get("userId")
    let res = await this.customerService.getCurrentCustomer(Id);
    if (res.isSuccess) {
      this.user = res.data;
      this.getImageByPath();
    }
  }

  async getImageByPath() {
    if (this.user) {
      if (this.user.avatarPath) {
        let base64IdFront = await this.uploadService.getImageByPath(this.prefix + this.user.avatarPath);
        if (base64IdFront) {
          this.avatarImages[0].base64 = "data:image/png;base64," + base64IdFront.fileBase64String;
        }
      } else {
        if (this.user.gender) {
          this.avatarImages[0].base64 = "../../../../assets/images/Avatar-men.svg";
        } else {
          this.avatarImages[0].base64 = "../../../../assets/images/Avatar-girl.svg";
        }
      }
    }
  }

  checkImgAvatar(index, avatarImages) {
    if (this.user.avatarPath) {
      this.updateAvatar(index, avatarImages);
    } else {
      this.presentActionSheet(index, avatarImages);
    }
  }

  goToCustomerDetail() {
    this.router.navigate(["/tabs/customer-detail"]);
  }

  goToCustomerSetting() {
    this.router.navigate(["/tabs/setting"]);
  }

  async updateAvatar(index, avatarImages) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Bạn muốn thực hiện thao tác gì?',
      buttons: [
        {
          text: 'Xem',
          icon: '../../../assets/icon/Viewicon.svg',
          handler: () => {
            this.openModal(index, avatarImages);
          }
        },
        {
          text: 'Chụp lại ảnh',
          icon: '../../../assets/icon/Cameraicon.svg',
          handler: () => {
            this.takePicture(index, avatarImages);
          }
        },
        {
          text: 'Chọn lại ảnh',
          icon: '../../../assets/icon/Imageicon.svg',
          handler: () => {
            this.getPicture(index, avatarImages);
          }
        },
        {
          text: 'Xóa ảnh',
          icon: '../../../assets/icon/Deleteicon.svg',
          handler: () => {
            this.deleteAvatar(index, avatarImages)
          }
        }
      ]
    });
    await actionSheet.present();
  }

  async presentActionSheet(index, listImg) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Bạn muốn thực hiện thao tác gì?',
      buttons: [
        {
          text: 'Chụp ảnh',
          icon: '../../../assets/icon/Cameraicon.svg',
          handler: () => {
            this.takePicture(index, listImg);
          }
        },
        {
          text: 'Chọn ảnh từ thư viện',
          icon: '../../../assets/icon/Imageicon.svg',
          handler: () => {
            this.getPicture(index, listImg);
          }
        }
      ]
    });
    await actionSheet.present();
  }

  async openModal(index, avatarImages) {
    const image = avatarImages.find(x => x.id === index);
    const modal = await this.modalController.create({
      component: ImageViewerComponent,
      componentProps: {
        'dataImage': [image.base64],
      }
    });
    modal.present();
  }

  async takePicture(index, avatarImages) {
    const image = avatarImages.find(x => x.id === index);

    const optionTakePictureBase64: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: false,
      targetWidth: 600,
      encodingType: this.camera.EncodingType.PNG,
    };

    this.camera.getPicture(optionTakePictureBase64).then(data => {
      image.isLoading = true;
      image.base64 = 'data:image/png;base64,' + data;
      image.isLoading = false;
      this.save();
    }, err => {
      image.isLoading = false;
    });
  }

  async getPicture(index, avatarImages) {
    const image = avatarImages.find(x => x.id === index);

    const optionTakePictureBase64: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: false,
      targetWidth: 600,
      encodingType: this.camera.EncodingType.PNG,
    };

    this.camera.getPicture(optionTakePictureBase64).then(data => {
      image.isLoading = true;
      image.base64 = 'data:image/png;base64,' + data;
      image.isLoading = false;
      this.save();
    }, err => {
      image.isLoading = false;
    });
  }


  deleteImage(index, avatarImages) {
    const image = avatarImages.find(x => x.id == index);
    image.base64 = '';
  }

  async logout() {
    this.checkLogOut();
  }

  bookingHistory() {
    this.router.navigate(["/tabs/booking-history"]);
  }

  base64ImageToBlob(str, filename) {
    // extract content type and base64 payload from original string
    var pos = str.indexOf(';base64,');
    var type = str.substring(5, pos);
    var b64 = str.substr(pos + 8);

    // decode base64
    var imageContent = atob(b64);

    // create an ArrayBuffer and a view (as unsigned 8-bit)
    var buffer = new ArrayBuffer(imageContent.length);
    var view = new Uint8Array(buffer);

    // fill the view, using the decoded base64
    for (var n = 0; n < imageContent.length; n++) {
      view[n] = imageContent.charCodeAt(n);
    }

    // convert ArrayBuffer to Blob
    var blob = new File([buffer], filename, { type: type });

    return blob;
  }

  uploadImage() {
    if (this.avatarImages[0].base64) {
      this.file = this.base64ImageToBlob(this.avatarImages[0].base64, 'avatar.png');
      this.userId = this.user.userId;
    }
  }

  async save() {
    await this.uploadImage();
    Promise.all([this.uploadService.uploadAvatarCustomerToSave(this.file, this.userId),]).then(res => {
      if (res[0]) {
        this.msgService.alertOK("Cập nhật thành công!");
        this.getCurrentUser();
      }
    })
  }

  async checkLogOut() {
    let resLogOut = await this.msgService.alertYesNo("Bạn có muốn đăng xuất khỏi thiết bị");
    if (resLogOut) {
      this.authService.logout();
      this.router.navigate([""]);
    } 
  }

  async deleteAvatar(index, avatarImages) {
    let resDeleteAvatar = await this.msgService.alertYesNo("Bạn có muốn Xoá Avatar");
    if (resDeleteAvatar) {
      let res = await this.uploadService.deleteAvatarCustomer(this.prefix + this.user.avatarPath, this.user.userId);
      if(res.isSuccess){
        this.deleteImage(index, avatarImages);
        this.getCurrentUser();
        this.msgService.success("Cập nhật thành công!")
      }
    }
  }
}
