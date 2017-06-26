// Core
import { Observable } from 'rxjs/Observable';
import { PreloadingStrategy, Route } from '@angular/router';
import 'rxjs/Rx';

export class CustomPreload implements PreloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
    return route.data && route.data.preload ? load() : Observable.of(null);
  }
}
