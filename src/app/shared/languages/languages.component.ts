// Core
import { Component, OnInit } from '@angular/core';

// App specific
import { GlobalVariables } from '../../globals';

@Component({
  selector: 'app-lang',
  templateUrl: './languages.component.html',
})
export class LanguagesComponent implements OnInit {
  public globalImagePath = GlobalVariables.imagesPath;
  public croFlag = this.globalImagePath;

  /* TODO: create flag service*/
  constructor() { }

  ngOnInit() {
  }

}
