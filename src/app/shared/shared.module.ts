// Core
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// App specific
import { ContactFormModule } from './contact-form/contact-form.module';
import { ContactFormService } from './contact-form/contact-form-service/contact-form.service';
import { ContentService } from './content-service/content.service';
import { DialogsService } from './dialogs/dialogs.service';
import { FooterModule } from './footer/footer.module';
import { GoogleMapsModule } from './google-maps/google-maps.module';
import { LanguagesModule } from './languages/languages.module';
import { LanguagesService } from './languages/languages.service';
import { LogoModule } from './logo/logo.module';
import { MaterialModule } from '../sharedMaterialModule';
import { TabsNavigationModule } from './tabs_navigation/tabs_navigation.module';
import {DialogsModule} from './dialogs/dialogs.module';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    ContactFormModule,
    DialogsModule,
    LanguagesModule,
    LogoModule,
    FooterModule,
    FormsModule,
    GoogleMapsModule,
    ReactiveFormsModule,
    RouterModule,
    TabsNavigationModule,
  ],
  declarations: [
  ]
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ContentService,
        ContactFormService,
        DialogsService,
        LanguagesService
    ]};
  }
}
