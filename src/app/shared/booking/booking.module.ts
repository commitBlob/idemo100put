// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// App specific
import { BookingComponent } from './booking.component';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    BookingComponent
  ],
  exports: [
    BookingComponent
  ]
})
export class BookingModule {
}
