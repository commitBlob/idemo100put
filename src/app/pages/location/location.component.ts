// Core
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

// App specific
import { LanguagesService } from '../../shared/languages/languages.service';
import { LocationDataService } from './location-data/location-data.service';

// Model
import { LocationData } from './location-data/location-data.interface';

@Component({
  templateUrl: './location.component.html',
})
export class LocationComponent implements OnInit {

  public locationContent: LocationData[] = [];
  public tempContent: any;
  public langSubscription: Subscription;
  public language: String;

  constructor(
    private _languageService: LanguagesService,
    private _locationDataService: LocationDataService
  ) {
    this.langSubscription = _languageService.subjectSourceAnnounced$.subscribe(
      (value) => {
        if ( this.language !== value) {
          this.language = value;
          this.findObject();
        }
      }
    );
  }

  public ngOnInit() {
    this._languageService.getLanguage();
    this.getLocationData();
    this.findObject();
  }

  public getLocationData() {
    this.locationContent = this._locationDataService.getLocationData();
  }

  public findObject() {
    this.locationContent.forEach((value: any, key: any) => {
      if (this.language === value['language']) {
        this.tempContent = this.locationContent[key];
      }
    });
  }
}
