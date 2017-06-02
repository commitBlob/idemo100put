// Core
import { Component, OnInit } from '@angular/core';

// App specific
import { NavLinks } from './navigation-links.interface';
import { NavigationService } from './navigation-service/navigation-service';

@Component({
  selector: 'app-nav-builder',
  templateUrl: 'navigation-builder.component.html',
  styleUrls: ['navigation-builder.component.scss'],
  providers: [ NavigationService ]
})
export class NavigationBuilderComponent implements OnInit {
  public nav: NavLinks[];
  public apLinks: NavLinks[];
  constructor(private _navigationService: NavigationService) {
  }

  getNavigation() {
    this._navigationService.getNavigation().then((nav: NavLinks[]) => this.nav = nav)
  }

  getApartmentsList() {
    this._navigationService.getApartmentsList().then(( apLinks: NavLinks[]) => this.apLinks = apLinks)
  }

  ngOnInit() {
    this.getNavigation();
    this.getApartmentsList();
  }
}
