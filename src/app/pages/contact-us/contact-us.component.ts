// Core
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

// App specific
import { LanguagesService } from '../../shared/languages/languages.service';

// Models
import { Content } from '../../shared/content-service/content.interface';

@Component({
  templateUrl: './contact-us.component.html',
})
export class ContactUsComponent implements OnInit, OnDestroy {

  contactUsContent: Content;
  langSubscription: Subscription;
  language: String;

  constructor(private languageService: LanguagesService,
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

  ngOnInit(): void {
    this.languageService.getLanguage();
  }

  getContent(language): void {
    const contactUsText: Content[] = [
      {
        language: 'cro',
        header: 'Pišite Nam',
        content: 'Za sve upite molimo vas kontaktirajte nas koristeći kontakt formu ili pošaljite upit na email ' +
          '<a href="mailto:bakara.is@net.hr">bakara.is@net.hr</a>'
      },
      {
        language: 'eng',
        header: 'Get in Touch',
        content: 'For any inquiries please contact us using the form below or send a query to <a href="mailto:bakara.is@net.hr">bakara.is@net.hr</a>'
      }
    ];
    this.contactUsContent = contactUsText.find(record => record.language === language);
  }

  ngOnDestroy(): void {
    this.langSubscription.unsubscribe();
  }
}
