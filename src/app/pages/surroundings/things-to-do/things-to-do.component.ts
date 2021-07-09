// Core
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

// App specific
import { LanguagesService } from '../../../shared/languages/languages.service';
import { ThingsToDoService } from './things-to-do.service';
import { todoContent } from './things-to-do.content';

// Models
import { ThingsToDo } from './things-to-do.interface';

@Component({
  selector: 'app-things-to-do',
  templateUrl: './things-to-do.component.html'
})
export class ThingsToDoComponent implements OnInit, OnDestroy {

  toDoContent: ThingsToDo[] = [];
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

  getContent(language): void {
    this.toDoContent = todoContent.filter(toDo => toDo.language === language);
  }

  cardTrigger(cardName): void {
    this.router.navigate(['surroundings/' + cardName]);
  }

  ngOnInit(): void {
    this.languageService.getLanguage();
  }

  ngOnDestroy(): void {
    this.langSubscription.unsubscribe();
  }
}
