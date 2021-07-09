import { Injectable } from '@angular/core';
import { GlobalVariables } from '../../globals';

@Injectable()
export class TabsNavigationService {
  constructor() {
  }

  getApartments(): any {
    return [
      {
        apartmentShortName: 'lavanda',
        apartmentImage: `${GlobalVariables.imagesPath}/ap_lavanda.jpg`,
        apartmentName: 'Lavanda'
      },
      {
        apartmentShortName: 'love-and-hope',
        apartmentImage: `${GlobalVariables.imagesPath}/ap_LandH.jpg`,
        apartmentName: 'Love & Hope'
      },
      {
        apartmentShortName: 'old-town',
        apartmentImage: `${GlobalVariables.imagesPath}/ap_old_town.jpg`,
        apartmentName: 'Apartment Dubrovnik Center'
      },
      {
        apartmentShortName: 'old-port',
        apartmentImage: `${GlobalVariables.imagesPath}/ap_old_port.jpg`,
        apartmentName: 'Old Port'
      },
    ];
  }
}
