// Core
import { Component, OnInit } from '@angular/core';

// App specific

@Component({
  selector: 'app-maps',
  templateUrl: './google-maps.component.html',
})
export class GoogleMapsComponent implements OnInit {
  lat = 42.6507;
  lng = 18.0944;
  zoom = 12;
  constructor() { }

  public ngOnInit() {
  }
}
