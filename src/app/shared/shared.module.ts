// Core
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// App specific
import { ApartmentDetailsService } from '../pages/apartments/apartment-details/apartment-details.service';
import { CardsModule } from './cards/cards.module';
import { CardsService } from './cards/cards.service';
import { ContactFormModule } from './contact-form/contact-form.module';
import { ContactFormService } from './contact-form/contact-form-service/contact-form.service';
import { ContentService } from './content-service/content.service';
import { DialogsModule } from './dialogs/dialogs.module';
import { DialogsService } from './dialogs/dialogs.service';
import { FooterModule } from './footer/footer.module';
import { GoogleMapsModule } from './google-maps/google-maps.module';
import { LanguagesModule } from './languages/languages.module';
import { LanguagesService } from './languages/languages.service';
import { LogoModule } from './logo/logo.module';
import { MarkersService } from './google-maps/markers/markers.service';
import { MaterialModule } from '../sharedMaterialModule';
import { TabsNavigationModule } from './tabs_navigation/tabs_navigation.module';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [
    CardsModule,
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
        ApartmentDetailsService,
        CardsService,
        ContentService,
        ContactFormService,
        DialogsService,
        LanguagesService,
        MarkersService
    ],
    };
  }
}
