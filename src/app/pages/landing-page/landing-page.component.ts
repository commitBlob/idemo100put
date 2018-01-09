// Core
import { Component, OnInit } from '@angular/core';

// App specific
import { ApartmentService } from '../../shared/apartments-service/apartments.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent implements OnInit {
  apartmentsData: String[];
  errorMessage: string;

  constructor(private  aptSer: ApartmentService) { }

  ngOnInit() {
    this.aptSer.getApartments().subscribe(
      (response) => {
        this.apartmentsData = response;
        sessionStorage.setItem('apartmentsData', JSON.stringify(this.apartmentsData));
      },
      (error) => this.errorMessage = <any>error
    );
  }
}
