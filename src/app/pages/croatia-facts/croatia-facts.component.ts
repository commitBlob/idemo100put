// Core
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

// App specific
import { LanguagesService } from '../../shared/languages/languages.service';

// Models
import { Content } from '../../shared/content-service/content.interface';

@Component({
  templateUrl: './croatia-facts.component.html',
})
export class CroatiaFactsComponent implements OnInit, OnDestroy {

  croatiaFactsContent: Content;
  langSubscription: Subscription;
  language: String;

  constructor(
    private languageService: LanguagesService
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

  public ngOnInit(): void {
    this.languageService.getLanguage();
  }

  public getContent(language): void {
    const croFactsText: Content[] = [
      {
        header: 'Croatia Facts',
        language: 'eng',
        content: 'Before you join the ever-growing group of people who already visited Croatia and fell in love with its culture, ' +
          'food, coastline, and people; you might find it handy to familiarize yourself with a couple of useful facts about Croatia.'
      },
      {
        header: 'O Hrvatskoj',
        language: 'cro',
        content: ''
      }
    ];
    this.croatiaFactsContent = croFactsText.find(pageContent => pageContent.language === language);
  }

  public ngOnDestroy(): void {
    this.langSubscription.unsubscribe();
  }
}
