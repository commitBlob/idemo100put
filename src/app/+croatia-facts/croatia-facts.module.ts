// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// App specific
import {CroatiaFactsComponent} from './croatia-facts.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CroatiaFactsComponent
  ],
  exports: [
    CroatiaFactsComponent
  ]
})
export class CroatiaFactsModule {
}
