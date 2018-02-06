// Core
import { Component, HostBinding, OnInit } from '@angular/core';

// App specific
import { GlobalVariables } from './globals';
import { NavigationService } from './shared/navigation/navigation-service/navigation-service';
import { Observable } from 'rxjs/Observable';
import { ResponsiveService } from './shared/responsive-service/responsive.service';

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
  globalLogoPath = GlobalVariables.logoPath;
  navigationList: any;

  constructor(private navigationService: NavigationService,
              private responsiveService: ResponsiveService) {
    // On window resize change event update service..
    Observable.fromEvent<WindowEvent>(window, 'resize')
      .debounceTime(500)
      .subscribe((event) => {
        this.responsiveService.set();
      });
  }

  ngOnInit() {
    this.getNavigation();
    // Get the responsive responsiveMode on load.
    this.responsiveService.set();
  }

  getNavigation() {
    this.navigationList = this.navigationService.getAppNavigation();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.hamburgerOpen = !this.hamburgerOpen;
  }
}
