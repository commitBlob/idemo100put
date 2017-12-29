// Core
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

// App specific
import { ApartmentService } from '../../shared/apartments-service/apartments.service';
import { ContentService } from '../../shared/content-service/content.service';
import { LanguagesService } from '../../shared/languages/languages.service';

// Models
import { Content } from '../../shared/content-service/content.interface';

@Component({
  templateUrl: './contact-us.component.html',
})
export class ContactUsComponent implements OnInit, OnDestroy {

  apartmentsData: String[];
  apartmentSelected: any;
  contactUsContent: Content[];
  errorMessage: string;
  langSubscription: Subscription;
  language: String;

  constructor(
    private  apartmentService: ApartmentService,
    private languageService: LanguagesService,
    private contentService: ContentService,
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
    this.apartmentService.getApartments().subscribe(
      (response) => this.apartmentsData = response,
      (error) => this.errorMessage = <any>error
    );
  }

  public getContent(language) {
    this.contentService.getContactUsContent(language).subscribe(
      (content) => {
        this.contactUsContent = <Content[]>content;
      }
    );
  }

  public ngOnDestroy() {
    this.langSubscription.unsubscribe();
  }
}
