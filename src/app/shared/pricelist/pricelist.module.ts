// Core
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// App specific
import { MaterialModule } from '../../sharedMaterialModule';
import { PricelistComponent } from './pricelist.component';
import { CurrencyPipe} from '../currency.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
  ],
  declarations: [
    PricelistComponent,
    CurrencyPipe
  ],
  exports: [
    PricelistComponent
  ]
})
export class PricelistModule {
}
