import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-image',
  templateUrl: './gallery-image.component.html',
  styleUrls: ['./gallery-image.component.scss']
})
export class GalleryImageComponent implements OnInit{

  @Input()
  imagesArray: Array<string>;

  activeImage: string;

  constructor() {
  }

  ngOnInit() {
    // display first image
    this.imageSelected(this.imagesArray[0]);
  }

  imageSelected(image) {
    console.log('Show this image now: ', image);
    this.activeImage = this.imagesArray[image];
    console.log('Image from array', this.imagesArray[image]);
  }
}
