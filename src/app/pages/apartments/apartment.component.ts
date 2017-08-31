// Core
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

// App specific
import { ApartmentDetailsService } from './apartment-details/apartment-details.service';
import { LanguagesService } from '../../shared/languages/languages.service';

// Models
import { ApartmentDetails } from './apartment-details/apartment-details.interface';
import { NearbyPlaces } from './apartment-details/nearby-places.interface';

// TODO: add all apartments data

@Component({
  templateUrl: './apartment.component.html',
})
export class ApartmentComponent implements OnInit, OnDestroy {
  public apartmentName: string;
  private _sub: any;
  public langSubscription: Subscription;
  public language: String;
  public apartmentData: ApartmentDetails[];
  public nearbyPlacesData: NearbyPlaces[];

  constructor(private _route: ActivatedRoute,
              private _apartmentDetailsService: ApartmentDetailsService,
              private _languageService: LanguagesService) {

    this._sub = this._route.params.subscribe(params => {
      this.apartmentName = params['apartmentName'];
    });

    this.langSubscription = _languageService.subjectSourceAnnounced$.subscribe(
      (value) => {
        if ( this.language !== value) {
          this.language = value;
          this.getApartmentData(this.apartmentName, this.language);
        }
      }
    );
  }

  public ngOnInit() {
    console.log('DATA IN DB MISSING FOR APARTMENT', this.apartmentName);
    this._languageService.getLanguage();
  }

  public ngOnDestroy() {
    this._sub.unsubscribe();
  }

  public getApartmentData(apName, lang) {
    this._apartmentDetailsService.getApartmentData(apName, lang).subscribe(
      (apData) => {
        this.apartmentData = <ApartmentDetails[]>apData;
        console.log(this.apartmentData, 'Apartment Data');
      },
      (error) => {
        this.handleError(error);
      },
      () => {
        console.log('Fetch Nearby Places');
        this.getNearbyPlaces(apName);
      }
    );
  }

  public getNearbyPlaces(apartment) {
    this._apartmentDetailsService.getNearbys(apartment).subscribe(
      (data) => {
        this.nearbyPlacesData = <NearbyPlaces[]>data;
        console.log(this.nearbyPlacesData, 'Nearby Places');
      }
    );
  }

  /**
   * Handle HTTP error
   */
  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
