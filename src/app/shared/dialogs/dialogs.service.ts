// Core
import { Observable } from 'rxjs/Rx';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { Injectable, ViewContainerRef } from '@angular/core';

// App specific
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { GalleryDialogComponent } from '../image-gallery/components/gallery-dialog/gallery-dialog.component';

@Injectable()
export class DialogsService {

  constructor(private dialog: MatDialog) {
  }

  confirm(title: string, message: string, viewContainerRef: ViewContainerRef): Observable<boolean> {
    let dialogRef: MatDialogRef<ConfirmDialogComponent>;
    const config = new MatDialogConfig();
    config.viewContainerRef = viewContainerRef;
    config.disableClose = false;

    dialogRef = this.dialog.open(ConfirmDialogComponent, config);

    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;

    return dialogRef.afterClosed();
  }

  openGallery(images: Array<string>, viewContainerRef: ViewContainerRef): void {
    let dialogRef: MatDialogRef<GalleryDialogComponent>;
    const config = new MatDialogConfig();
    config.viewContainerRef = viewContainerRef;
    config.disableClose = false;

    dialogRef = this.dialog.open(GalleryDialogComponent, config);

    dialogRef.componentInstance.imagesArray = images;
  }
}
