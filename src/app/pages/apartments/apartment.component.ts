// Core
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

// App specific
import { ApartmentDetailsService } from './apartment-details/apartment-details.service';
import { LanguagesService } from '../../shared/languages/languages.service';

// Models
import { ApartmentDetails } from './apartment-details/apartment-details.interface';

// TODO: add all apartments data

@Component({
  templateUrl: './apartment.component.html',
})
export class ApartmentComponent implements OnInit, OnDestroy {
  public apartmentName: string;
  private _sub: any;
  public errorMessage: string;
  public langSubscription: Subscription;
  public language: String;
  public apartmentData: ApartmentDetails[];

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
          // this.getContent(this.language);
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
        console.log(this.apartmentData, 'apdata');
      }
    );
  }
}
