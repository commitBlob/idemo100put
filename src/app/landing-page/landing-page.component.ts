// Core
import { Component, OnInit } from '@angular/core';

// App specific
import { GlobalVariables } from '../globals';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent implements OnInit {

  private _globalImagePath = GlobalVariables.imagesPath;

  constructor() { }

  ngOnInit() {
  }

}
