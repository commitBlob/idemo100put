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
  apartmentName: string;
  private sub: any;
  langSubscription: Subscription;
  language: String;
  apartmentData: ApartmentDetails[];
  nearbyPlacesData: NearbyPlaces[];
  displayWarning = true;

  constructor(private route: ActivatedRoute,
              private apartmentDetailsService: ApartmentDetailsService,
              private languageService: LanguagesService,
              private router: Router) {

    this.sub = this.route.params.subscribe(params => {
      this.apartmentName = params['apartmentName'];
    });

    this.langSubscription = languageService.subjectSourceAnnounced$.subscribe(
      (value) => {
        if ( this.language !== value) {
          this.language = value;
          this.getApartmentData(this.apartmentName, this.language);
        }
      }
    );
  }

  public ngOnInit() {
    this.languageService.getLanguage();
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
    this.langSubscription.unsubscribe();
  }

  public getApartmentData(apName, lang) {
    this.apartmentDetailsService.getApartmentData(apName, lang).subscribe(
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
    this.apartmentDetailsService.getNearbys(apartment).subscribe(
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

  goToContactPage() {
    this.router.navigate(['contact-us']);
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
