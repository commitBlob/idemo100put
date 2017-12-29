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

  public croatiaFactsContent: Content[];
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
    this._contentService.getCroatiaFactsContent(language).subscribe(
      (content) => {
        this.croatiaFactsContent = <Content[]>content;
      }
    );
  }

  public ngOnDestroy() {
    this.langSubscription.unsubscribe();
  }
}
