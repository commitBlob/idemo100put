// Core
import { Injectable } from '@angular/core';

// App Specific
import { LocData } from './location-data-list';


@Injectable()
export class LocationDataService {

  getLocationData() {
    return LocData;
  }
}
