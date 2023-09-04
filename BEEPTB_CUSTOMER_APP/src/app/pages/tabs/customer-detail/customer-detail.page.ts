import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { ImageViewerComponent } from 'src/app/shared/components/image-viewer/image-viewer.component';
import { UploadImageModel } from 'src/app/shared/models/uploadImages.model';
import { UserModel } from 'src/app/shared/models/user.model';
import { CustomerService } from 'src/app/shared/services/apis/customer.service';
import { LocalStorgeService } from 'src/app/shared/services/locals/local-storge.service';
import { UploadService } from 'src/app/shared/services/apis/upload.service';
import { MsgService } from 'src/app/shared/services/locals/msg-message.service';
import { TabsPage } from '../tabs.page';
import { LoadingService } from 'src/app/shared/services/locals/loading.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.page.html',
})
export class CustomerDetailPage implements OnInit {

  lstIdImg = [
    {
      id: 0,
      base64: '',
      isLoading: false
    },
    {
      id: 1,
      base64: '',
      isLoading: false
    },
  ];

  lstDriverCard = [
    {
      id: 0,
      base64: '',
      isLoading: false
    },
    {
      id: 1,
      base64: '',
      isLoading: false
    }
  ];

  user: UserModel;
  dateFormat = 'DD/MM/YYYY';
  uploadIdentityModel: UploadImageModel;
  uploadDriverCardModel: UploadImageModel;
  maxDate: any = new Date().toISOString();
  maxLengthName = 30;
  isDirtyInput: boolean = true;
  isDirty = [];

  constructor(
    private actionSheetController: ActionSheetController,
    private camera: Camera,
    private customerService: CustomerService,
    private localStorageService: LocalStorgeService,
    private modalController: ModalController,
    private uploadService: UploadService,
    private msgService: MsgService,
    private tabsComponent: TabsPage,
    private loadingService: LoadingService
  ) {
  }

  ngOnInit() {
    this.getCurrentUser();
  }

  ionViewWillEnter(){
    // this.getCurrentUser();
    // this.isDirtyInput = true;
  }

  async getCurrentUser(){
    this.user  = new UserModel();
    let Id = await this.localStorageService.get("userId")
    let res = await this.customerService.getCurrentCustomer(Id);
    if(res.isSuccess){
      this.user = res.data;
      this.getImageByPath();
    }
  }

  async getImageByPath(){
    let prefix = "wwwroot";
    if(this.user){
      if(this.user.identityImage1Path){
        let base64IdFront = await this.uploadService.getImageByPath(prefix + this.user.identityImage1Path);
        if(base64IdFront){
          this.lstIdImg[0].base64 = "data:image/png;base64,"+base64IdFront.fileBase64String;
        }
      }
      if(this.user.identityImage2Path){
        let base64IdBack = await this.uploadService.getImageByPath(prefix + this.user.identityImage2Path);
        if(base64IdBack){
          this.lstIdImg[1].base64 = "data:image/png;base64,"+base64IdBack.fileBase64String;
        }
      }
      if(this.user.driverLicenseImage1Path){
        let base64DvcFront = await this.uploadService.getImageByPath(prefix + this.user.driverLicenseImage1Path);
        if (base64DvcFront){
          this.lstDriverCard[0].base64 = "data:image/png;base64,"+base64DvcFront.fileBase64String;

        }
      }
      if(this.user.driverLicenseImage2Path){
        let base64DvcBack = await this.uploadService.getImageByPath(prefix + this.user.driverLicenseImage2Path);
        if (base64DvcBack){
          this.lstDriverCard[1].base64 = "data:image/png;base64,"+base64DvcBack.fileBase64String;
        }
      }
    }
  }

  async takePicture(index, listImg) {
    const image = listImg.find(x => x.id === index);

    const optionTakePictureBase64: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 600,
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true
    };

    this.camera.getPicture(optionTakePictureBase64).then(data => {
      image.isLoading = true;
      image.base64 = 'data:image/jpeg;base64,' + data;
      image.isLoading = false;
      this.isDirtyInput = false;
    }, err => {
      image.isLoading = false;
    });
  }

  async getPicture(index, listImg) {
    const image = listImg.find(x => x.id === index);

    const optionTakePictureBase64: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 600,
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true
    };

    this.camera.getPicture(optionTakePictureBase64).then(data => {
      image.isLoading = true;
      image.base64 = 'data:image/jpeg;base64,' + data;
      image.isLoading = false;
      this.isDirtyInput = false;
    }, err => {
      image.isLoading = false;
    });
  }

  async openModal(index, listImg) {
    const image = listImg.find(x => x.id === index);
    const modal = await this.modalController.create({
      component: ImageViewerComponent,
      componentProps: {
        'dataImage': [image.base64],
      }
    });
    modal.present();
  }

  deleteImage(index, listImg) {
    const image = listImg.find(x => x.id == index);
    image.base64 = '';
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

  async secondActionSheet(index, listImg) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Bạn muốn thực hiện thao tác gì?',
      buttons: [
        {
          text: 'Xem',
          icon: '../../../assets/icon/Viewicon.svg',
          handler: () => {
            this.openModal(index, listImg);
          }
        },
        {
          text: 'Chụp lại ảnh',
          icon: '../../../assets/icon/Cameraicon.svg',
          handler: () => {
            this.takePicture(index, listImg);
          }
        },
        {
          text: 'Chọn lại ảnh',
          icon: '../../../assets/icon/Imageicon.svg',
          handler: () => {
            this.getPicture(index, listImg);
          }
        }
      ]
    });
    await actionSheet.present();
  }

  back(){
    window.history.back();
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
    for(var n = 0; n < imageContent.length; n++) {
      view[n] = imageContent.charCodeAt(n);
    }
  
    // convert ArrayBuffer to Blob
    var blob = new File([buffer], filename, { type: type });
  
    return blob;
  }

  uploadImage(){
    this.uploadIdentityModel = new UploadImageModel();
    this.uploadDriverCardModel = new UploadImageModel();
    if(this.lstIdImg[0].base64){
      this.uploadIdentityModel.file1st = this.base64ImageToBlob(this.lstIdImg[0].base64, 'identityFront.jpeg');
    }
    if(this.lstIdImg[1].base64){
      this.uploadIdentityModel.file2nd = this.base64ImageToBlob(this.lstIdImg[1].base64, 'identityBack.jpeg');
    }
    if(this.lstDriverCard[0].base64){
      this.uploadDriverCardModel.file1st = this.base64ImageToBlob(this.lstDriverCard[0].base64, 'driverCardFront.jpeg');
    }
    if(this.lstDriverCard[1].base64){
      this.uploadDriverCardModel.file2nd = this.base64ImageToBlob(this.lstDriverCard[1].base64, 'driverCardBack.jpeg');
    }
  }

  async save(){
    if(!this.checkValidSave()) {
      return;
    }
    this.loadingService.presentLoading();
    let datePipe = new DatePipe("en-US");
    this.user.birthDate = this.user.birthDate ? datePipe.transform(this.user.birthDate, "yyyy-MM-dd") : '';
    await this.uploadImage();
    Promise.all([this.uploadService.UploadIdentity(this.uploadIdentityModel),
                this.uploadService.UploadDriverCard(this.uploadDriverCardModel),
                this.customerService.updateCustomer(this.user)]).then(res => {
            if(res[0] && res[1] && res[2]){
              this.msgService.alertOK("Cập nhật thành công!");
              this.tabsComponent.getCurrentUser();
              this.loadingService.dismissLoading();
            }
      })
  }

  checkValidSave(){
    let regEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    
    if(!this.user.name || !this.user.email || !this.user.birthDate || !this.user.identityCard){
      this.msgService.error("Vui lòng nhập đầy đủ thông tin!")
      return false;
    }
    if(!regEmail.test(this.user.email)){
      this.msgService.error("Vui lòng nhập Email đúng định dạng!")
      return false;
    }
    if(this.user.name.length > 30){
      this.msgService.error("Họ tên không được quá 30 ký tự!")
      return false;
    }
    return true;
  }

  checkDirtyInput(ev){
    if(ev){
      this.isDirtyInput = false;
    }
    
  }
}
