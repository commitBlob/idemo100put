// Core
import {
  MdTabsModule, MdCheckboxModule, MdInputModule, MdSelectModule, MdButtonModule,
  MdDialogModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [ MdTabsModule, MdCheckboxModule, MdInputModule, MdSelectModule, MdButtonModule, MdDialogModule],
  exports: [ MdTabsModule, MdCheckboxModule, MdInputModule, MdSelectModule, MdButtonModule, MdDialogModule],
})
export class MaterialModule { }
