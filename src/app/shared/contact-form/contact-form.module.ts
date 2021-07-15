// Core
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// App specific
import { ContactFormComponent } from './contact-form.component';
import { MaterialModule } from '../../materialModule';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
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
