// Core
import { Component, OnDestroy, OnInit } from '@angular/core';

// App specific
import { ContentService } from '../../shared/content-service/content.service';
import { LanguagesService } from '../../shared/languages/languages.service';
import { Subscription } from 'rxjs/Subscription';

// Models
import { Content } from '../../shared/content-service/content.interface';

@Component({
  templateUrl: './surroundings.component.html',
})
export class SurroundingsComponent implements OnInit, OnDestroy {

  surroundingsContent: Content[];
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
    this.contentService.getSurroundingsContent(language).subscribe(
      (content) => {
        this.surroundingsContent = <Content[]>content;
      }
    );
  }

  public ngOnDestroy() {
    this.langSubscription.unsubscribe();
  }
}
