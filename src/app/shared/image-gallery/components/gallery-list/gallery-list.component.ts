// Core
import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';

// App specific
import { GalleryService } from '../gallery-service/gallery.service';
import { DialogsService } from '../../../dialogs/dialogs.service';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.scss']
})
export class GalleryListComponent implements OnInit {

  @Input()
  apartmentShortName: string;

  galleryData = [];

  imagesArray = [];

  constructor( private galleryService: GalleryService,
               private viewContainerRef: ViewContainerRef,
               private dialogService: DialogsService) {}

  ngOnInit() {
    this.galleryService.getImages(this.apartmentShortName).subscribe((result) => {
      this.galleryData = result;
    });
  }

  openGallery() {
    // resets
    this.imagesArray = [];

    this.galleryData.forEach((value) => {
      this.imagesArray.push(value.image);
    });
    const imagesArray = this.imagesArray;
    this.dialogService.openGallery(imagesArray, this.viewContainerRef);
  }
}
