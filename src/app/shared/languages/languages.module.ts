import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguagesComponent } from './languages.component';

@NgModule({
  imports: [RouterModule],
  declarations: [LanguagesComponent],
  exports: [LanguagesComponent],
})

export class LanguagesModule {
}
