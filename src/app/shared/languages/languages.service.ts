// Core
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LanguagesService {
  languageSelected = 'eng';
  subjectSource = new Subject<string>();
  subjectSourceAnnounced$ = this.subjectSource.asObservable();

  constructor() {
  }

  languageChange(value) {
    this.languageSelected = value;
    this.subjectSource.next(this.languageSelected);
  }

  getLanguage() {
    this.subjectSource.next(this.languageSelected);
  }
}
