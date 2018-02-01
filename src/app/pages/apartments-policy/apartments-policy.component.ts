// Core
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

// App specific
import { LanguagesService } from '../../shared/languages/languages.service';
import { ContentService } from '../../shared/content-service/content.service';

// Models
import { Content } from '../../shared/content-service/content.interface';

@Component({
  templateUrl: './apartments-policy.component.html',
})
export class ApartmentsPolicyComponent implements OnInit, OnDestroy {

  apartmentsPolicyContent: Content[];
  langSubscription: Subscription;
  language: String;

  constructor(
    private languageService: LanguagesService,
    private contentService: ContentService
  ) {
    this.langSubscription = languageService.subjectSourceAnnounced$.subscribe(
      (value) => {
        if ( this.language !== value) {
          this.language = value;
          this.getContent(this.language);
        }
      }
    );
  }

  public ngOnInit() {
    this.languageService.getLanguage();
  }

  public getContent(language) {
    this.contentService.getPolicyContent(language).subscribe(
      (content) => {
        this.apartmentsPolicyContent = <Content[]>content;
      }
    );
  }

  public ngOnDestroy() {
    this.langSubscription.unsubscribe();
  }
}
