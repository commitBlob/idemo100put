// Core
import { MdTabsModule, MdCheckboxModule, MdInputModule, MdSelectModule, MdButtonModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [ MdTabsModule, MdCheckboxModule, MdInputModule, MdSelectModule, MdButtonModule],
  exports: [ MdTabsModule, MdCheckboxModule, MdInputModule, MdSelectModule, MdButtonModule],
})
export class MaterialModule { }
