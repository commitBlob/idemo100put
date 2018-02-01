// Core
import { Component, OnInit } from '@angular/core';

// App specific
import { GlobalVariables } from '../../globals';
import { LanguagesService } from './languages.service';

@Component({
  selector: 'app-lang',
  templateUrl: './languages.component.html',
})
export class LanguagesComponent implements OnInit {

  globalImagePath = GlobalVariables.imagesPath;
  flagItems: any;

  constructor(private ls: LanguagesService) { }

  ngOnInit() {
    this.getFlags();
  }

  getFlags() {
    this.ls.getFlags().subscribe(
      (values) => {
        this.flagItems = values;
      }
    );
  }

  setLanguage(languageValue) {
    this.ls.languageChange(languageValue);
  }
}
