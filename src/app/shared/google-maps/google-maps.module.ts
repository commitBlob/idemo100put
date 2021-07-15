// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// App specific
import { GoogleMapsComponent } from './google-maps.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GoogleMapsComponent
  ],
  exports: [
    GoogleMapsComponent
  ]
})
export class GoogleMapsModule {
}
