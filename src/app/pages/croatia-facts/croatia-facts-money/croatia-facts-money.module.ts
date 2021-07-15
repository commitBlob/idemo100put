// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// App specific
import { CroatiaFactsMoneyComponent } from './croatia-facts-money.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CroatiaFactsMoneyComponent
  ],
  exports: [
    CroatiaFactsMoneyComponent
  ]
})
export class CroatiaFactsMoneyModule {
}
