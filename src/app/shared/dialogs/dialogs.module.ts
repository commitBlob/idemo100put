// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// App specific
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { DialogsService } from './dialogs.service';
import { MaterialModule } from '../../sharedMaterialModule';

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
