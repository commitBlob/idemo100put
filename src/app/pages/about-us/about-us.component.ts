// Core
import { Component, OnInit } from '@angular/core';

// App specific
import { LanguagesService } from '../../shared/languages/languages.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  templateUrl: './about-us.component.html',
})
export class AboutUsComponent implements OnInit {
  public language: String;
  public langSubscription: Subscription;

  constructor(private _languageService: LanguagesService) {

    this.langSubscription = _languageService.subjectSourceAnnounced$.subscribe(
      (value) => {
        this.language = value;
      }
    );
  }

  public ngOnInit() {
    this._languageService.getLanguage();
  }
}
