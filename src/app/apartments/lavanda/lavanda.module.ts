// Core
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// App specific
import { LavandaComponent } from './lavanda.component';
import { LavandaFacilitiesComponent } from './lavanda-facilities/lavanda-facilities.component';
import { LavandaPricelistComponent } from './lavanda-pricelist/lavanda-pricelist.component';
import { LavandaRoutes } from './lavanda.routes';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(LavandaRoutes)
  ],
  declarations: [
    LavandaComponent,
    LavandaPricelistComponent,
    LavandaFacilitiesComponent,
  ],
  exports: [
    LavandaComponent,
    LavandaPricelistComponent,
    LavandaFacilitiesComponent,
    MaterialModule,
  ]
})
export class LavandaModule {
}
