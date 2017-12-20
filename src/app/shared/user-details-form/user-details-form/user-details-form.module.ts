// Core
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

// App specific
import { MaterialModule } from '../../../sharedMaterialModule';
import { SharedModule } from '../../shared.module';
import { UserDetailsFormComponent } from './user-details-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
    UserDetailsFormComponent
  ],
  declarations: [
    UserDetailsFormComponent
  ]
})
export class UserDetailsFormModule {
}
