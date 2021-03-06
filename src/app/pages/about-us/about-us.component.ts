// Core
import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';

// App specific
import { ContentService } from '../../shared/content-service/content.service';
import { LanguagesService } from '../../shared/languages/languages.service';

// Models
import { Content } from '../../shared/content-service/content.interface';

@Component({
  templateUrl: './about-us.component.html',
})
export class AboutUsComponent implements OnInit, OnDestroy {
  public aboutUsContent: Content[];
  public language: String;
  public langSubscription: Subscription;

  constructor(private _languageService: LanguagesService, private  _contentService: ContentService) {

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
    this._contentService.getAboutUsContent(language).subscribe(
      (content) => {
        this.aboutUsContent = <Content[]>content;
      }
    );
  }

  public ngOnDestroy() {
    this.langSubscription.unsubscribe();
  }

}
