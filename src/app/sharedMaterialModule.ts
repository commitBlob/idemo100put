// Core
import {
  MatTabsModule, MatCheckboxModule, MatInputModule, MatSelectModule,
  MatButtonModule, MatDialogModule, MatTooltipModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [ MatTabsModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatButtonModule, MatDialogModule, MatTooltipModule ],
  exports: [ MatTabsModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatButtonModule, MatDialogModule, MatTooltipModule ],
})
export class MaterialModule { }
