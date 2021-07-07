// Core
import { Component, HostBinding, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

// App specific
import { ResponsiveService } from './shared/responsive-service/responsive.service';
import { GlobalNavigation } from './shared/navigation/navigation-list';

// Fixes target warning on Eventtarget
interface WindowEvent extends EventTarget {
  target: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  @HostBinding('class.menu_open') public menuOpen = false;
  @HostBinding('class.is-active') public hamburgerOpen = false;
  navigationList: any;

  constructor(private responsiveService: ResponsiveService) {
    Observable.fromEvent<WindowEvent>(window, 'resize')
      .debounceTime(500)
      .subscribe((event) => {
        this.responsiveService.set();
      });
  }

  ngOnInit() {
    this.getNavigation();
    this.responsiveService.set();
  }

  getNavigation() {
    this.navigationList = GlobalNavigation;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.hamburgerOpen = !this.hamburgerOpen;
  }
}
