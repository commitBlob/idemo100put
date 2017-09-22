// Core
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// App specific
import { MaterialModule } from '../../sharedMaterialModule';
import { PricelistComponent } from './pricelist.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    PricelistComponent
  ],
  exports: [
    PricelistComponent
  ]
})
export class PricelistModule {
}
