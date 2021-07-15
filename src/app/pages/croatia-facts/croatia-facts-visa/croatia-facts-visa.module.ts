// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// App specific
import { CroatiaFactsVisaComponent } from './croatia-facts-visa.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CroatiaFactsVisaComponent
  ],
  exports: [
    CroatiaFactsVisaComponent
  ]
})
export class CroatiaFactsVisaModule {
}

