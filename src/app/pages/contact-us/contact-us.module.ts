// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// App specific
import { ContactUsComponent } from './contact-us.component';
import { MaterialModule } from '../../sharedMaterialModule';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
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
