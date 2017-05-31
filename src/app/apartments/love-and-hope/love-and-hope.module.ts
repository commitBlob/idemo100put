// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// App specific
import { LoveAndHopeComponent } from './love-and-hope.component';
import { LoveAndHopeFacilitiesComponent } from './love-and-hope-facilities/love-and-hope-facilities.component';
import { LoveAndHopePricelistComponent } from './love-and-hope-pricelist/love-and-hope-pricelist.component';
import { LoveAndHopeRoutes } from './love-and-hope.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LoveAndHopeRoutes)
  ],
  declarations: [
    LoveAndHopeComponent,
    LoveAndHopeFacilitiesComponent,
    LoveAndHopePricelistComponent
  ],
  exports: [
    LoveAndHopeComponent,
    LoveAndHopeFacilitiesComponent,
    LoveAndHopePricelistComponent
  ]
})
export class LoveAndHopeModule {
}
