// Core
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// App specific
import { ContactUsComponent } from './contact-us.component';
import { MaterialModule } from '../../materialModule';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
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
