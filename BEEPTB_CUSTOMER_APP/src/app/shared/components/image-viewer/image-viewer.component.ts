import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
})
export class ImageViewerComponent implements OnInit {

  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) {
    this.dataImage = this.navParams.get("dataImage");
  }

  configImageViewer = {
    wheelZoom: true,
    btnIcons: {
      zoomIn: 'fa fa-plus',
      zoomOut: 'fa fa-minus',
      rotateClockwise: 'fa fa-redo',
      rotateCounterClockwise: 'fa fa-undo',
      next: 'fa fa-arrow-right',
      prev: 'fa fa-arrow-left',
      fullscreen: 'fa fa-arrows-alt',
    },
  }

  dataImage: any[] = [];

  ngOnInit() { }

  dismissModal() {
    this.modalController.dismiss();
  }
}
