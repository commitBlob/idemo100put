// Core
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

// App specific
import { LanguagesService } from '../../shared/languages/languages.service';
import { LocationDataService } from './location-data/location-data.service';

// Model
import { LocationData } from './location-data/location-data.interface';

@Component({
  templateUrl: './location.component.html',
})
export class LocationComponent implements OnInit, OnDestroy {

  locationContent: LocationData[] = [];
  tempContent: any;
  langSubscription: Subscription;
  language: String;

  constructor(
    private languageService: LanguagesService,
    private locationDataService: LocationDataService
  ) {
    this.langSubscription = languageService.subjectSourceAnnounced$.subscribe(
      (value) => {
        if ( this.language !== value) {
          this.language = value;
          this.findObject();
        }
      }
    );
  }

  ngOnInit() {
    this.languageService.getLanguage();
    this.getLocationData();
    this.findObject();
  }

  getLocationData() {
    this.locationContent = this.locationDataService.getLocationData();
  }

  findObject() {
    this.locationContent.forEach((value: any, key: any) => {
      if (this.language === value['language']) {
        this.tempContent = this.locationContent[key];
      }
    });
  }

  ngOnDestroy() {
    this.langSubscription.unsubscribe();
  }
}
