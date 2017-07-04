// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// App specific
import { LocationComponent } from './location.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
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
