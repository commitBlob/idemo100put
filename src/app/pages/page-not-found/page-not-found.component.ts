// Core
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-404',
  templateUrl: './page-not-found.component.html',
})
export class PageNotFoundComponent implements OnInit {
  @HostListener('mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
    const moveDiv = document.getElementById('cube');
    const xPos = event.pageX;
    const yPos = event.pageY;
    const moveX = (xPos  * 0.01) + 1;
    const moveY = (yPos  * 0.01) + 1;
    moveDiv.style.top =   (yPos  * 0.01) + '%';
    moveDiv.style.left = (xPos  * 0.002) + '%';
  }


  constructor() {
  }

  ngOnInit() {
  }
}
