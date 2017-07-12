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
  public globalImagePath = GlobalVariables.imagesPath;
  public flagItems: any;

  constructor(private _ls: LanguagesService) { }

  ngOnInit() {
    this.getFlags();
  }

  public getFlags() {
    this._ls.getFlags().subscribe(
      (values) => {
        this.flagItems = values;
      }
    );
  }

  public setLanguage(value) {
    console.log('language selected: ', value);
  }
}
