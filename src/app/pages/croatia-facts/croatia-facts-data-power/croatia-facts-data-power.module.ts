// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// App specific
import { CroatiaFactsDataPowerComponent } from './croatia-facts-data-power.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CroatiaFactsDataPowerComponent
  ],
  exports: [
    CroatiaFactsDataPowerComponent
  ]
})
export class CroatiaFactsDataPowerModule {
}
