// Core
import { Component, OnInit } from '@angular/core';

// App specific

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    this.metoda();
  }

  public metoda() {
    console.log('ello');
  }

}
