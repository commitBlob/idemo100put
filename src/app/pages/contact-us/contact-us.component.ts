// Core
import { Component, OnInit } from '@angular/core';

// App specific
import { ApartmentService } from '../../shared/apartments-service/apartments.service';
import { ContentService } from '../../shared/content-service/content.service';
import { LanguagesService } from '../../shared/languages/languages.service';
import { Subscription } from 'rxjs/Subscription';

// Models
import { Content } from '../../shared/content-service/content.interface';

@Component({
  templateUrl: './contact-us.component.html',
})
export class ContactUsComponent implements OnInit {

  public apartmentsData: String[];
  public apartmentSelected: any;
  public apartmentURL: String = '';
  public contactUsContent: Content[];
  /* NOTE: ako bude problema sa language switcherom vrati null na kraj */
  // public contactUsContent: Content[] = null;
  public errorMessage: string;
  public langSubscription: Subscription;
  public language: String;
  public optionSelected = false;

  constructor(
    private  _apartmentService: ApartmentService,
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
    this._apartmentService.getApartments().subscribe(
      (response) => this.apartmentsData = response,
      (error) => this.errorMessage = <any>error
    );
  }

  /**
   * Update apartmnetULR variable
   * @param apartmentURL
   */
  public apartmentSelect(apartmentURL) {
    if (apartmentURL) {
      this.optionSelected = true;
      this.apartmentURL = apartmentURL;
    }
  }

  public getContent(language) {
    this._contentService.getContactUsContent(language).subscribe(
      (content) => {
        this.contactUsContent = <Content[]>content;
      }
    );
  }

}
