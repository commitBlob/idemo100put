// Core
import { Component, OnInit } from '@angular/core';

// App specific
import { MarkersService } from './markers/markers.service';

// Models
import { Markers } from './markers/markers.interface';

declare var google: any;

@Component({
  selector: 'app-maps',
  templateUrl: './google-maps.component.html',
})
export class GoogleMapsComponent implements OnInit {

  private map: any;
  markers: Markers[] = [];

  lat = 42.642040;
  lng = 18.113012;
  zoom = 15;

  constructor(private markersService: MarkersService) {
  }

  ngOnInit() {
    this.initMap();
  }

  initMap(): void {
    const mapCanvas = document.getElementById('map');
    let marker = new google.maps.Marker();
    const mapCenter = new google.maps.LatLng(this.lat, this.lng);

    const mapOptions = {
      center: mapCenter,
      zoom: this.zoom,
      streetViewControl: false,
    };
    const infoWindow = new google.maps.InfoWindow();
    function closeInfoWindow() {
      setTimeout(function() {
        infoWindow.close();
        }, 4000);
    }

    this.map = new google.maps.Map(mapCanvas, mapOptions);
    this.markersService.getMarkers().subscribe(
      (res) => {
        res.forEach(element => {
          if (element !== undefined) {
            marker = new google.maps.Marker({
              position: new google.maps.LatLng(element.latitude, element.longitude),
              map: this.map,
              title: element.title,
              label: element.label
            });
            google.maps.event.addListener(marker, 'click', ((mar) => {
              return function() {
                infoWindow.setContent(element.description);
                infoWindow.open(this.map, mar);
                closeInfoWindow();
              }
            })(marker));
          }
        });
        marker.setMap(this.map);
      }
    );
  }
}
