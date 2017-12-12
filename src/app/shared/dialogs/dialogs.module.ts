// Core
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';

// App specific
import { BookingDialogComponent } from '../booking/booking-dialogs/booking-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { SelectionDialogComponent } from '../booking/selection-dialog/selection-dialog.component';
import { DialogsService } from './dialogs.service';
import { SelectionTemplate } from './booking-selection-template/selection-template';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    BookingDialogComponent,
    ConfirmDialogComponent,
    SelectionDialogComponent
  ],
  declarations: [
    BookingDialogComponent,
    ConfirmDialogComponent,
    SelectionDialogComponent,
    SelectionTemplate
  ],
  providers: [
    DialogsService,
  ],
  entryComponents: [
    BookingDialogComponent,
    ConfirmDialogComponent,
    SelectionDialogComponent
  ],
})
export class DialogsModule {
}
