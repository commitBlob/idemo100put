// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// App specific
import { LocationComponent } from './location.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LocationComponent
  ],
  exports: [
    LocationComponent
  ]
})
export class LocationModule {
}
