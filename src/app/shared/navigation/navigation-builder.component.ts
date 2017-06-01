// Core
import { Component, OnInit } from '@angular/core';

// App specific
import { NavLinks } from './navigation-links.interface';
import { NavigationService } from './navigation-service/navigation-service';

@Component({
  selector: 'app-nav-builder',
  templateUrl: 'navigation-builder.component.html',
  providers: [ NavigationService ]
})
export class NavigationBuilderComponent implements OnInit {
  public nav: NavLinks[];
  constructor(private _navigationService: NavigationService) {}

  getNavigation() {
    this._navigationService.getNavigation().then((nav: NavLinks[]) => this.nav = nav)
  }

  ngOnInit() {
    this.getNavigation();
  }
}
