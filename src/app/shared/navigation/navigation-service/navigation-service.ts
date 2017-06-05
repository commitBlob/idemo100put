// Core
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';

// App specific
import { NavLinks } from '../navigation-links.interface';
import { Navigation, ApartmentSelectorNav, ApartmentsNav } from '../navigation-list';

// TODO: replace promises with observables

@Injectable()
export class NavigationService {
  private _mainNavigation = new Subject<NavLinks[]>();


  /* Ne radi */
  /**
   *  __responseData: Observable<any> = new Observable<any>();

   constructor(private _http: Http) {
    this.__responseData = this._http.get("./data.json")
                            .map(res => res.json());
  }
   */

  getMainNavigation(): Observable<NavLinks[]> {
    console.log('sto sam', this._mainNavigation);
    return this._mainNavigation.asObservable();
  }

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
