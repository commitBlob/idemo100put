// Core
import { Component, OnInit } from '@angular/core';
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
export class NavigationBuilderComponent implements OnInit {
  public glavnaNavigacija: any;

  constructor(private _navigationService: NavigationService) {
  }

  getMainNavigation() {
    this.glavnaNavigacija = this._navigationService.getMainNavigation()
    console.log(this.glavnaNavigacija);
  }


  ngOnInit() {
    this.getMainNavigation();
  }
}
