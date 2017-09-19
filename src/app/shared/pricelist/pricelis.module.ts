// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// App specific
import { PricelistComponent } from './pricelist.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PricelistComponent
  ],
  exports: [
    PricelistComponent
  ]
})
export class PricelisModule {
}
