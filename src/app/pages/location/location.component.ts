// Core
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

// App specific
import { LanguagesService } from '../../shared/languages/languages.service'

// Model
import { LocationData } from './location-data/location-data.interface';

@Component({
  templateUrl: './location.component.html',
})
export class LocationComponent implements OnInit {

  public locationContent: LocationData[];
  public langSubscription: Subscription;
  public language: String;

  // TODO: language switcher (array(s) of elements no backend service)
  // no data from backend service

  constructor(
    private _languageService: LanguagesService
  ) {
    this.langSubscription = _languageService.subjectSourceAnnounced$.subscribe(
      (value) => {
        if ( this.language !== value) {
          this.language = value;
        }
      }
    );
  }

  public ngOnInit() {
    this._languageService.getLanguage();
  }
}
