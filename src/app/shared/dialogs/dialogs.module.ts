// Core
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';

// App specific
import { BookingDialogComponent } from '../booking/booking-dialogs/booking-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { DialogsService } from './dialogs.service';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    BookingDialogComponent,
    ConfirmDialogComponent,
  ],
  declarations: [
    BookingDialogComponent,
    ConfirmDialogComponent,
  ],
  providers: [
    DialogsService,
  ],
  entryComponents: [
    BookingDialogComponent,
    ConfirmDialogComponent,
  ],
})
export class DialogsModule {
}
