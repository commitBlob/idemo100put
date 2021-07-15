// Core
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-gallery-dialog',
  templateUrl: 'gallery-dialog.component.html'
})
export class GalleryDialogComponent {

  imagesArray: Array<string>;
  imageIndex: number;

  constructor (public dialogRef: MatDialogRef<GalleryDialogComponent>) {

  }
}
