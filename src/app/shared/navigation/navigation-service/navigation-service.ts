// Core
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

// App specific
import { Navigation, ApartmentSelectorNav, ApartmentsNav } from '../navigation-list';

@Injectable()
export class NavigationService {

  getMainNavigation() {
    return Navigation;
  }

  getApartmentNavigation() {
    return ApartmentsNav;
  }

  getApartmentsList() {
    return ApartmentSelectorNav;
  }
}
