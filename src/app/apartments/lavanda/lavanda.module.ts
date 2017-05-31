// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// App specific
import { LavandaComponent } from './lavanda.component';
import { LavandaFacilitiesComponent } from './lavanda-facilities/lavanda-facilities.component';
import { LavandaPricelistComponent } from './lavanda-pricelist/lavanda-pricelist.component';
import { LavandaRoutes } from './lavanda.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LavandaRoutes)
  ],
  declarations: [
    LavandaComponent,
    LavandaPricelistComponent,
    LavandaFacilitiesComponent
  ],
  exports: [
    LavandaComponent,
    LavandaPricelistComponent,
    LavandaFacilitiesComponent

  ]
})
export class LavandaModule {
}
