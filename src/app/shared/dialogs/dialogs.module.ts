// Core
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';

// App specific
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { DialogsService } from './dialogs.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    ConfirmDialogComponent,
  ],
  declarations: [
    ConfirmDialogComponent,
  ],
  providers: [
    DialogsService,
  ],
  entryComponents: [
    ConfirmDialogComponent,
  ],
})
export class DialogsModule {
}
