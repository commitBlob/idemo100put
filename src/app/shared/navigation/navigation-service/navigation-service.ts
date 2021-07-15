// Core
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// App specific
import { GlobalNavigation } from '../navigation-list';

@Injectable()
export class NavigationService {

  /* Navigation list is defined in GlobalNavigation, will not use service*/
  getAppNavigation() {
    return GlobalNavigation;
  }
}
