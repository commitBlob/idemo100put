// Core
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// App Specific
import { LanguagesComponent } from './languages.component';

@NgModule({
  imports: [RouterModule, FormsModule, CommonModule],
  declarations: [LanguagesComponent],
  exports: [LanguagesComponent],
})

export class LanguagesModule {
}
