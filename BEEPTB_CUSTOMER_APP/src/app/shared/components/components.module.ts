import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { ImageViewerModule } from 'ngx-image-viewer';


@NgModule({
  declarations: [
    ImageViewerComponent,
  ],
  imports: [
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    ImageViewerModule.forRoot(),
    CommonModule,
    IonicModule,
  ],
  entryComponents: [
    ImageViewerComponent,
  ],
  exports: [
    ImageViewerComponent,
  ]
})
export class ComponentsModule { }
