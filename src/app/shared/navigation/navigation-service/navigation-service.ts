// Core
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// App specific
import { NavLinks } from '../navigation-links.interface';
import { Navigation, ApartmentSelectorNav, ApartmentsNav } from '../navigation-list';

@Injectable()
export class NavigationService {

  getNavigation(): Promise<NavLinks[]> {
    return Promise.resolve(Navigation);
  }
  getApartmentsList(): Promise<NavLinks[]> {
    return Promise.resolve(ApartmentSelectorNav);
  }
  getSelectedApartment(): Promise<NavLinks[]> {
    return Promise.resolve(ApartmentsNav);
  }

}
