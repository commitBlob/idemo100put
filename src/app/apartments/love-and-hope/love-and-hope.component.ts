// Core
import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../shared/navigation/navigation-service/navigation-service';

@Component({
  selector: 'app-love-and-hope',
  templateUrl: 'love-and-hope.component.html',
  providers: [ NavigationService ]
})
export class LoveAndHopeComponent implements OnInit {
  public glavnaNavigacija: any;
  constructor(private _navigationService: NavigationService) { }

  public ngOnInit() {
    this.getMainNavigation();
  }

  getMainNavigation() {
    this.glavnaNavigacija = this._navigationService.getMainNavigation()
    console.log(this.glavnaNavigacija);
  }
}
