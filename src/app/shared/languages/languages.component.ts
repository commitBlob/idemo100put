// Core
import { Component } from '@angular/core';

// App specific
import { GlobalVariables } from '../../globals';
import { LanguagesService } from './languages.service';

@Component({
  selector: 'app-lang',
  templateUrl: './languages.component.html',
})
export class LanguagesComponent {

  globalImagePath = GlobalVariables.imagesPath;
  flagItems = [
    {
      countryFlag: 'eng',
      folder: 'flags/',
      name: 'uk_flag_small.png'
    },
    {
      countryFlag: 'cro',
      folder: 'flags/',
      name: 'cro_flag_small.png'
    }
  ];

  constructor(private ls: LanguagesService) { }

  setLanguage(languageValue) {
    this.ls.languageChange(languageValue);
  }
}
