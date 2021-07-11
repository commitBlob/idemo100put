// Core
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

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
  cards: Cards[];
  language: String;
  langSubscription: Subscription;

  constructor(private languageService: LanguagesService,
              private cardsService: CardsService) {
    this.langSubscription = languageService.subjectSourceAnnounced$.subscribe(
      (value) => {
        if (this.language !== value) {
          this.language = value;
          this.getCards(value);
        }
      }
    );
  }

  generateImage(image) {
    return 'data:image/png;base64,' + image;
  }

  ngOnInit() {
    this.languageService.getLanguage();
  }

  getCards(language) {
    this.cardsService.getCards(language).subscribe(
      (data) => {
        this.cards = <Cards[]>data;
      }
    );
  }
}
