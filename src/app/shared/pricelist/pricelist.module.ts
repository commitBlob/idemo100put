// Core
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// App specific
import { CapitalizePipe } from '../capitalize.pipe';
import { CurrencyPipe } from '../currency.pipe';
import { MaterialModule } from '../../materialModule';
import { PricelistComponent } from './pricelist.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
  ],
  declarations: [
    CapitalizePipe,
    CurrencyPipe,
    PricelistComponent
  ],
  exports: [
    PricelistComponent
  ]
})
export class PricelistModule {
}
