// Core
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

// App specific
import { ApartmentDetailsService } from './apartment-details/apartment-details.service';
import { LanguagesService } from '../../shared/languages/languages.service';

// Models
import { ApartmentDetails } from './apartment-details/apartment-details.interface';
import { NearbyPlaces } from './apartment-details/nearby-places.interface';
import { apartmentsData } from './apartment-details/apartments.data';
import { nearbyPlacesData } from './apartment-details/nearby-places.data';

@Component({
  templateUrl: './apartment.component.html',
})
export class ApartmentComponent implements OnInit, OnDestroy {
  apartmentName: string;
  private sub: any;
  langSubscription: Subscription;
  language: String;
  allApartments: ApartmentDetails[] = apartmentsData;
  apartmentsData: ApartmentDetails;
  nearbyPlaces: NearbyPlaces[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private apartmentDetailsService: ApartmentDetailsService,
              private languageService: LanguagesService) {

    this.sub = this.route.params.subscribe(params => {
      this.apartmentName = params['apartmentName'];
    });

    this.langSubscription = languageService.subjectSourceAnnounced$.subscribe(
      (value) => {
        if (this.language !== value) {
          this.language = value;
          this.getApartmentData(this.apartmentName, this.language);
        }
      }
    );
  }

  public ngOnInit() {
    this.languageService.getLanguage();
    this.getNearbyPlaces(this.apartmentName);
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
    this.langSubscription.unsubscribe();
  }

  public getApartmentData(apName, lang) {
    this.apartmentsData = apartmentsData.find((apartment) => apartment.language === lang && apartment.shortName === apName);
  }

  public getNearbyPlaces(apartment) {
    this.nearbyPlaces = nearbyPlacesData.filter(place => place.apartmentName === apartment);
  }

  public generateArray(obj) {
    return Object.keys(obj).map((key) => {
      return {key: key, value: obj[key]}
    });
  }

  public displayBlock(apartmentName): boolean {
    return !(apartmentName === 'old-port' || apartmentName === 'lavanda');
  }

  private closeBlock(event) {
    event.target.parentElement.classList.add('hide');
  }

  goToContactPage() {
    this.router.navigate(['contact-us']);
  }
}
