// Core
import {Component, OnDestroy, OnInit} from '@angular/core';

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

  public surroundingsContent: Content[];
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
    this._contentService.getSurroundingsContent(language).subscribe(
      (content) => {
        this.surroundingsContent = <Content[]>content;
      }
    );
  }

  public ngOnDestroy() {
    this.langSubscription.unsubscribe();
  }
}
