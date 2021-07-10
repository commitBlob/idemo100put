// Core
import { Component, OnInit } from '@angular/core';

// Models
import { Markers } from './markers/markers.interface';

declare var google: any;

@Component({
  selector: 'app-maps',
  templateUrl: './google-maps.component.html',
})
export class GoogleMapsComponent implements OnInit {

  private map: any;
  markers: Markers[] = [
    {
      label: 'A',
      latitude: 42.641656,
      longitude: 18.118510,
      title: 'Lavanda',
      description: '<h3>Lavanda</h3><p>Address: Ul. Vicka Lovrina 2, 20000 Dubrovnik, Croatia</p>'
    },
    {
      label: 'B',
      latitude: 42.6420,
      longitude: 18.1209,
      title: 'Love & Hope',
      description: '<h3>Love & Hope</h3><p>Address: Dubrovačkog odreda 16, 20000 Dubrovnik, Croatia</p>'
    },
    {
      label: 'C',
      latitude: 42.641666,
      longitude: 18.118516,
      title: 'Old Port',
      description: '<h3>Old Port</h3><p>Address: Ul. Vicka Lovrina 2, 20000 Dubrovnik, Croatia</p>'
    },
    {
      label: 'D',
      latitude: 42.639793,
      longitude: 18.107729,
      title: 'Apartment Dubrovnik Center',
      description: '<h3>Apartment Dubrovnik Center</h3><p>Address: Zvijezdićeva ul. 15, 20000 Dubrovnik, Croatia</p>'
    }
  ];

  lat = 42.642040;
  lng = 18.113012;
  zoom = 15;

  constructor() {
  }

  ngOnInit(): void {
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
    this.markers.forEach((element) => {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(element.latitude, element.longitude),
        map: this.map,
        tittle: element.title,
        label: element.label
      });
      google.maps.event.addListener(marker, 'click', ((mar) => {
        return () => {
          infoWindow.setContent(element.description);
          infoWindow.open(this.map, mar);
          closeInfoWindow();
        }
      })(marker));
    });
    marker.setMap(this.map);
  }
}
