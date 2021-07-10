// Core
import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';

// App specific
import { GalleryService } from '../gallery-service/gallery.service';
import { DialogsService } from '../../../dialogs/dialogs.service';
import { GlobalVariables } from '../../../../globals';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.scss']
})
export class GalleryListComponent implements OnInit {

  @Input()
  apartmentShortName: string;
  imageCollections = [
    {
      name: 'old-town',
      path: `${GlobalVariables.imagesPath}apartments/old-town/`,
      count: 17
    },
    {
      name: 'love-and-hope',
      path: `${GlobalVariables.imagesPath}apartments/love-and-hope/`,
      count: 27
    },
    {
      name: 'old-port',
      path: `${GlobalVariables.imagesPath}apartments/old-port/`,
      count: 11
    },
    {
      name: 'lavanda',
      path: `${GlobalVariables.imagesPath}apartments/lavanda/`,
      count: 10
    }
  ];
  galleryData = [];

  imagesArray = [];

  constructor( private galleryService: GalleryService,
               private viewContainerRef: ViewContainerRef,
               private dialogService: DialogsService) {}

  ngOnInit() {
    this.generatePaths();
  }

  generatePaths(): void {
    const collection = this.imageCollections.find((collectionData) => collectionData.name === this.apartmentShortName);
    console.log('coll', collection);
    const counter = collection.count;
    for (let i = 1; i < counter; i++ ) {
      this.galleryData.push(`${collection.path}/${i}.jpg`);
    }
  }

  openGallery(index) {
    // resets
    this.imagesArray = [];

    this.galleryData.forEach((value) => {
      this.imagesArray.push(value);
    });
    const imagesArray = this.imagesArray;
    this.dialogService.openGallery(imagesArray, index, this.viewContainerRef);
  }
}
