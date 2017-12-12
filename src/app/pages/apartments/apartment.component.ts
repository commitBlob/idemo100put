// Core
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  public displayWarning = true;

  constructor(private _route: ActivatedRoute,
              private _apartmentDetailsService: ApartmentDetailsService,
              private _languageService: LanguagesService,
              private router: Router) {

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
    this._languageService.getLanguage();
  }

  public ngOnDestroy() {
    this._sub.unsubscribe();
    this.langSubscription.unsubscribe();
  }

  public getApartmentData(apName, lang) {
    this._apartmentDetailsService.getApartmentData(apName, lang).subscribe(
      (apData) => {
        this.apartmentData = <ApartmentDetails[]>apData;
      },
      (error) => {
        this.handleError(error);
      },
      () => {
        this.getNearbyPlaces(apName);
      }
    );
  }

  public getNearbyPlaces(apartment) {
    this._apartmentDetailsService.getNearbys(apartment).subscribe(
      (data) => {
        this.nearbyPlacesData = <NearbyPlaces[]>data;
      }
    );
  }

  public generateArray(obj) {
    return Object.keys(obj).map((key) => { return {key: key, value: obj[key]}});
  }

  private closeBlock(event) {
    event.target.parentElement.classList.add('hide');
    setTimeout(() => { this.displayWarning = false; }, 750)
  }

  public goToBookings() {
    this.router.navigate(['booking/' + this.apartmentName]);
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
