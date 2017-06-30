// Core
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// App specific
import { ApartmentComponent } from './apartment.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ApartmentComponent,
  ],
  exports: [
    ApartmentComponent,
    MaterialModule,
  ]
})
export class ApartmentModule {
}
