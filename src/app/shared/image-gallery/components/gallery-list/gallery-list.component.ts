// Core
import { Component, Input, OnInit } from '@angular/core';

// App specific
import { GalleryService } from '../gallery-service/gallery.service';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.scss']
})
export class GalleryListComponent implements OnInit {

  @Input()
  apartmentShortName: string;

  galleryData = [];

  imagesList = ['250x160xA.jpg', '250x160xB.jpg', '250x160xC.jpg', '250x160xD.jpg', '250x160xE.jpg'];

  imageToShow: string;

  constructor( private galleryService: GalleryService) {}

  ngOnInit() {
    console.log('Apartment short name: ', this.apartmentShortName);
    this.galleryService.getImages(this.apartmentShortName).subscribe((result) => {
      this.galleryData = result;
    });
  }

  openGallery(image, imagesArray) {
    console.log('Image to open: ' + image);
    console.log('Images array: ' +  imagesArray);
    // this.imageToShow = `data:image/jpg;base64,${this.galleryData[0].image}`;
  }
}
