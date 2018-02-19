// Core
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

// App specific
import { LanguagesService } from '../../../shared/languages/languages.service';
import { ThingsToDoService } from './things-to-do.service';

// Models
import { ThingsToDo } from './things-to-do.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-things-to-do',
  templateUrl: './things-to-do.component.html'
})
export class ThingsToDoComponent implements OnInit, OnDestroy {

  toDoContent: ThingsToDo[];
  langSubscription: Subscription;
  language: String;

  constructor( private languageService: LanguagesService,
               private thingsToDoService: ThingsToDoService,
               private router: Router) {
    this.langSubscription = languageService.subjectSourceAnnounced$.subscribe(
      (value) => {
        if (this.language !== value) {
          this.language = value;
          this.getContent(value);
        }
      }
    );
  }

  getContent(language) {
    this.thingsToDoService.getToDoList(language).subscribe(
      (content) => {
        this.toDoContent = <ThingsToDo[]>content;
      }
    );
  }

  generateImage(image) {
    return 'data:image/png;base64,' + image;
  }

  cardTrigger(cardName) {
    this.router.navigate(['surroundings/' + cardName]);
  }

  ngOnInit() {
    this.languageService.getLanguage();
  }

  ngOnDestroy() {
    this.langSubscription.unsubscribe();
  }
}
