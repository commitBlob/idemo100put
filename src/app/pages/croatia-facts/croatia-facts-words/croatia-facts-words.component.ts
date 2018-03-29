// Core
import { Component, OnInit } from '@angular/core';

// App specific
import { CroatiaFactsWordsService } from './croatia-facts-words.service';

// Models
import { Words } from './croatia-facts-words.interface';

@Component({
  selector: 'app-cro-words',
  templateUrl: './croatia-facts-words.component.html',
})
export class CroatiaFactsWordsComponent implements OnInit {

  Words: Words[];

  constructor(private wordsService: CroatiaFactsWordsService) {
  }

  ngOnInit() {

  }
}
