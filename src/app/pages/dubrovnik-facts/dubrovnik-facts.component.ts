// Core
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

// App specific
import { LanguagesService } from '../../shared/languages/languages.service';
import { ContentService } from '../../shared/content-service/content.service';

// Models
import { Content } from '../../shared/content-service/content.interface';

@Component({
  templateUrl: './dubrovnik-facts.component.html',
})
export class DubrovnikFactsComponent implements OnInit, OnDestroy {

  dubrovnikFactsContent: Content[];
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

  ngOnInit() {
    this.languageService.getLanguage();
  }

  getContent(language) {
    this.contentService.getDubrovnikFactsContent(language).subscribe(
      (content) => {
        this.dubrovnikFactsContent = <Content[]>content;
      }
    );
  }

  ngOnDestroy() {
    this.langSubscription.unsubscribe();
  }
}
