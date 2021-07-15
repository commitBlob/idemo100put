// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// App specific
import { CroatiaFactsWordsComponent } from './croatia-facts-words.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CroatiaFactsWordsComponent
  ],
  exports: [
    CroatiaFactsWordsComponent
  ]
})
export class CroatiaFactsWordsModule {
}

