// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// App specific
import { ApartmentComponent } from './apartment.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ApartmentComponent,
  ],
  exports: [
    ApartmentComponent,
  ]
})
export class ApartmentModule {
}
