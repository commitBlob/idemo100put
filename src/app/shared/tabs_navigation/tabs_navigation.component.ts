// Core
import { Component, OnInit } from '@angular/core';

// App specific
import { TabsNavigationService } from './tabs_navigation.service';

@Component({
  selector: 'app-tabs-nav',
  templateUrl: './tabs_navigation.component.html'
})
export class TabsNavigationComponent implements OnInit {
  apartmentList: any;
  errorMessage: string;

  constructor(private tns: TabsNavigationService) { }

  ngOnInit() {
    this.apartmentList = JSON.parse(sessionStorage.getItem('apartmentsData'));
    if (!this.apartmentList) {
      this.tns.getApartments().subscribe(
        (res) => this.apartmentList = res,
        error => this.errorMessage = <any>error,
      );
    }
  }
}
