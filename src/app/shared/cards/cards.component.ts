// Core
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

// App specific
import { CardsService } from './cards.service';
import { LanguagesService } from '../languages/languages.service';

// Models
import { Cards } from './cards.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
})
export class CardsComponent implements OnInit {
  public cards: Cards[];
  public language: String;
  public langSubscription: Subscription;

  constructor(private _languageService: LanguagesService, private _cardsService: CardsService) {
    this.langSubscription = _languageService.subjectSourceAnnounced$.subscribe(
      (value) => {
        if ( this.language !== value) {
          this.language = value;
          this.getCards(value);
        }
      }
    );
  }

  public ngOnInit() {
    this._languageService.getLanguage();
  }

  public getCards(language) {
    this._cardsService.getCards(language).subscribe(
      (data) => {
        this.cards = <Cards[]>data;
      }
    );
  }
}
