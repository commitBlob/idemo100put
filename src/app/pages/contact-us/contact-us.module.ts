// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// App specific
import { ContactUsComponent } from './contact-us.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
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
