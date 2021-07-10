// Core
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

// App specific
import { LanguagesService } from '../../shared/languages/languages.service';

// Models
import { Content } from '../../shared/content-service/content.interface';

@Component({
  templateUrl: './apartments-policy.component.html',
})
export class ApartmentsPolicyComponent implements OnInit, OnDestroy {

  apartmentsPolicyContent: Content;
  langSubscription: Subscription;
  language: String;

  constructor(
    private languageService: LanguagesService,
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
    const policyContent: Content[] = [
      {
        language: 'eng',
        content: '',
        header: 'Apartment Policy'
      },
      {
        language: 'cro',
        content: '',
        header: 'Kućna Pravila'
      }
    ];
    this.apartmentsPolicyContent = policyContent.find((content) => { return content.language === language});
  }

  public ngOnDestroy(): void {
    this.langSubscription.unsubscribe();
  }
}
