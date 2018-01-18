// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// App specific
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { DialogsService } from './dialogs.service';
import { MaterialModule } from '../../sharedMaterialModule';
import { GalleryDialogComponent } from '../image-gallery/components/gallery-dialog/gallery-dialog.component';
import { ImageGalleryModule } from '../image-gallery/image-gallery.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ImageGalleryModule,
  ],
  exports: [
    ConfirmDialogComponent,
    GalleryDialogComponent,
  ],
  declarations: [
    ConfirmDialogComponent,
    GalleryDialogComponent,
  ],
  providers: [
    DialogsService,
  ],
  entryComponents: [
    ConfirmDialogComponent,
    GalleryDialogComponent,
  ],
})
export class DialogsModule {
}
