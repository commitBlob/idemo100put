// Core
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

// App specific
import { TabsNavigationService } from './tabs_navigation.service';

@Component({
  selector: 'app-tabs-nav',
  templateUrl: './tabs_navigation.component.html'
})
export class TabsNavigationComponent implements OnInit {
  public apartmentList: any;
  public errorMessage: string;

  constructor(private _tns: TabsNavigationService) { }

  ngOnInit() {
   this._tns.getApartments().subscribe(
     (res) => this.apartmentList = res,
     error => this.errorMessage = <any>error,
   );
  }
}
