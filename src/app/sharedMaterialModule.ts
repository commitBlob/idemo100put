// Core
import {
  MdTabsModule, MdCheckboxModule, MdInputModule, MdSelectModule, MdButtonModule,
  MdDialogModule, MdTooltipModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [ MdTabsModule, MdCheckboxModule, MdInputModule, MdSelectModule, MdButtonModule, MdDialogModule, MdTooltipModule],
  exports: [ MdTabsModule, MdCheckboxModule, MdInputModule, MdSelectModule, MdButtonModule, MdDialogModule, MdTooltipModule],
})
export class MaterialModule { }
