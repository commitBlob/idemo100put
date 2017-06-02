// Core
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// App specific
import { NavLinks } from '../navigation-links.interface';
import { Navigation } from '../navigation-list';
import { ApartmentSelectorNav } from '../navigation-list';

@Injectable()
export class NavigationService {

  getNavigation(): Promise<NavLinks[]> {
    return Promise.resolve(Navigation);
  }
  getApartmentsList(): Promise<NavLinks[]> {
    return Promise.resolve(ApartmentSelectorNav);
  }

}
