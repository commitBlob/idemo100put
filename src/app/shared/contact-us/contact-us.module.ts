// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// App specific
import { ContactUsComponent } from './contact-us.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ContactUsComponent
  ],
  exports: [
    ContactUsComponent
  ]
})
export class ContactUsModule {
}
