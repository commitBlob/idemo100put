// Core
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


// App specific
import { ContactFormComponent } from './contact-form.component';
import { MaterialModule } from '../../sharedMaterialModule';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    ContactFormComponent
  ],
  exports: [
    ContactFormComponent
  ]
})
export class ContactFormModule {
}
