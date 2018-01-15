import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.scss']
})
export class GalleryListComponent {

  imagesList = ['250x160xA.jpg', '250x160xB.jpg', '250x160xC.jpg', '250x160xD.jpg', '250x160xE.jpg'];
}
