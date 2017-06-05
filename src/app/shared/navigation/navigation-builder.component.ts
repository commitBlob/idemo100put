// Core
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

// App specific
import { NavLinks } from './navigation-links.interface';
import { NavigationService } from './navigation-service/navigation-service';

@Component({
  selector: 'app-nav-builder',
  templateUrl: 'navigation-builder.component.html',
  styleUrls: ['navigation-builder.component.scss'],
  providers: [ NavigationService ]
})
export class NavigationBuilderComponent implements OnInit, OnDestroy {
  mainNavigation: NavLinks[];
  subscription: Subscription;
  public nav: NavLinks[];
  public apLinks: NavLinks[];

  constructor(private _navigationService: NavigationService) {
  }

  getMainNavigation() {
    this.subscription = this._navigationService.getMainNavigation().subscribe(mainNavigation => { this.mainNavigation = mainNavigation; });
    console.log('data?', this.subscription);
  }

  getNavigation() {
    this._navigationService.getNavigation().then((nav: NavLinks[]) => this.nav = nav)
  }

  getApartmentsList() {
    this._navigationService.getApartmentsList().then(( apLinks: NavLinks[]) => this.apLinks = apLinks)
  }

  /* observable */

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.getNavigation();
    this.getApartmentsList();
    this.getMainNavigation();
  }
}
