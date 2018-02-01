// Core
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

// App specific
import { ContentService } from '../../shared/content-service/content.service';
import { LanguagesService } from '../../shared/languages/languages.service';

// Models
import { Content } from '../../shared/content-service/content.interface';

@Component({
  templateUrl: './croatia-facts.component.html',
})
export class CroatiaFactsComponent implements OnInit, OnDestroy {

  croatiaFactsContent: Content[];
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
    this.contentService.getCroatiaFactsContent(language).subscribe(
      (content) => {
        this.croatiaFactsContent = <Content[]>content;
      }
    );
  }

  public ngOnDestroy() {
    this.langSubscription.unsubscribe();
  }
}
