// Core
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';

// App specific
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { DialogsService } from './dialogs.service';


@NgModule({
  imports: [
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
