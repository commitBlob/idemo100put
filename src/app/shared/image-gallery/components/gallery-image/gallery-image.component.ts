import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-image',
  templateUrl: './gallery-image.component.html',
  styleUrls: ['./gallery-image.component.scss']
})
export class GalleryImageComponent implements OnInit {

  @Input()
  imagesArray: Array<string>;

  @Input() imageIndex = 0;

  activeImage: string;
  activeImageIndex: number;

  constructor() {
  }

  ngOnInit(): void {
    this.imageSelected(this.imageIndex);
  }

  imageSelected(image): void {
    this.activeImage = this.imagesArray[image];
    this.activeImageIndex = image;
  }

  previous(): void {
    let imageIndex = this.activeImageIndex;
    if (imageIndex > 0) {
      imageIndex--;
      this.activeImage = this.imagesArray[imageIndex];
      this.activeImageIndex = imageIndex;
    } else {
      const arrayLength = this.imagesArray.length;
      this.activeImage = this.imagesArray[arrayLength - 1];
      this.activeImageIndex = arrayLength - 1;
    }
  }

  next(): void {
    let imageIndex = this.activeImageIndex;
    const arrayLength = this.imagesArray.length - 1;
    if (imageIndex === arrayLength) {
      this.activeImageIndex = 0;
      this.activeImage = this.imagesArray[0];
    } else {
      imageIndex++;
      this.activeImage = this.imagesArray[imageIndex];
      this.activeImageIndex = imageIndex;
    }
  }

  swipe(event): void {
    switch (event) {
      case 'swiperight':
        this.next();
        break;
      case 'swipeleft':
        this.previous();
        break;
    }
  }
}
