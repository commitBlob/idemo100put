// Core
import { Component, OnInit } from '@angular/core';

// App specific
import { MarkersService } from './markers/markers.service';

// Models
import { Markers } from './markers/markers.interface';

@Component({
  selector: 'app-maps',
  templateUrl: './google-maps.component.html',
})
export class GoogleMapsComponent implements OnInit {

  // TODO: load markes before component is initialized

  public markers: Markers[];

  lat = 42.6507;
  lng = 18.0944;
  zoom = 12;

  constructor( private _markersService: MarkersService) {
    this._markersService.getMarkers().subscribe(
      (res) => {
        this.markers = <Markers[]>res;
      }
    );
  }

  public ngOnInit() {
  }
}
