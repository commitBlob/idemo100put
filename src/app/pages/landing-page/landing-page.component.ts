// Core
import { Component, OnInit } from '@angular/core';

// App specific
import { ApartmentService } from '../../shared/apartments-service/apartments.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent implements OnInit {
  public apartmentsData: String[];
  public errorMessage: string;
  constructor(private  _aptSer: ApartmentService) { }

  ngOnInit() {
    this._aptSer.getApartments().subscribe(
      (response) => this.apartmentsData = response,
      (error) => this.errorMessage = <any>error
    );
  }
}
