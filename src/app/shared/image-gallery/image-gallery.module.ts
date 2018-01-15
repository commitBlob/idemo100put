// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// App specific
import {SharedModule} from '../shared.module';
import { GalleryImageComponent } from './components/gallery-image/gallery-image.component';
import { GalleryListComponent } from './components/gallery-list/gallery-list.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [
    GalleryImageComponent,
    GalleryListComponent
  ],
  declarations: [
    GalleryImageComponent,
    GalleryListComponent
  ]
})
export class ImageGalleryModule {
}
