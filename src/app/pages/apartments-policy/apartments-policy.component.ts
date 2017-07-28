// Core
import { Component, OnInit } from '@angular/core';

// App specific
import { LanguagesService } from '../../shared/languages/languages.service';
import { Subscription } from 'rxjs/Subscription';
import { ContentService } from '../../shared/content-service/content.service';

// Models
import { Content } from '../../shared/content-service/content.interface';

@Component({
  templateUrl: './apartments-policy.component.html',
})
export class ApartmentsPolicyComponent implements OnInit {

  public apartmentsPolicyContent: Content[];
  public langSubscription: Subscription;
  public language: String;

  constructor(
    private _languageService: LanguagesService,
    private _contentService: ContentService
  ) {
    this.langSubscription = _languageService.subjectSourceAnnounced$.subscribe(
      (value) => {
        if ( this.language !== value) {
          this.language = value;
          this.getContent(this.language);
        }
      }
    );
  }

  public ngOnInit() {
    this._languageService.getLanguage();
  }

  public getContent(language) {
    this._contentService.getPolicyContent(language).subscribe(
      (content) => {
        this.apartmentsPolicyContent = <Content[]>content;
      }
    );
  }
}
