// Core
import { Component, OnInit } from '@angular/core';

// App specific
import { NavLinks } from '../navigation-links.interface';
import { NavigationService } from '../navigation-service/navigation-service';

@Component({
  selector: 'app-selected-nav-builder',
  templateUrl: 'selected-nav-builder.component.html',
  // styleUrls: ['navigation-builder.component.scss'],
  providers: [ NavigationService ]
})
export class ApartmentNavBuilderComponent implements OnInit {
  public apDetailsLinks: NavLinks[];

  constructor(private _navigationService: NavigationService) {
  }

  getSelectedApartment() {
    this._navigationService.getNavigation().then((apDetailsLinks: NavLinks[]) => this.apDetailsLinks = apDetailsLinks)
  }

  ngOnInit() {
    this.getSelectedApartment();
  }
}
