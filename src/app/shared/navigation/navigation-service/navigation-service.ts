// Core
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

// App specific
import { NavLinks } from '../navigation-links.interface';
import { Navigation, ApartmentSelectorNav, ApartmentsNav } from '../navigation-list';

// TODO: replace promises with observables

@Injectable()
export class NavigationService {

  // getNavigation(): Observable<NavLinks[]> {
  //   return;
  // }

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
