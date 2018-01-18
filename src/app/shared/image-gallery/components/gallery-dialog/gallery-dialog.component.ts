// Core
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-gallery-dialog',
  templateUrl: 'gallery-dialog.component.html'
})
export class GalleryDialogComponent {

  imagesArray: Array<string>;


  constructor (public dialogRef: MatDialogRef<GalleryDialogComponent>) {

  }
}
