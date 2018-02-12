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
import { CroatiaFactsDataPowerModule } from '../pages/croatia-facts/croatia-facts-data-power/croatia-facts-data-power.module';
import { CroatiaFactsMoneyModule } from '../pages/croatia-facts/croatia-facts-money/croatia-facts-money.module';
import { CroatiaFactsVisaModule } from '../pages/croatia-facts/croatia-facts-visa/croatia-facts-visa.module';
import { CroatiaFactsWordsModule } from '../pages/croatia-facts/croatia-facts-words/croatia-facts-words.module';
import { DialogsModule } from './dialogs/dialogs.module';
import { DialogsService } from './dialogs/dialogs.service';
import { DistancePipe } from './distance.pipe';
import { FooterModule } from './footer/footer.module';
import { GoogleMapsModule } from './google-maps/google-maps.module';
import { LanguagesModule } from './languages/languages.module';
import { LanguagesService } from './languages/languages.service';
import { LogoModule } from './logo/logo.module';
import { MarkersService } from './google-maps/markers/markers.service';
import { MaterialModule } from '../sharedMaterialModule';
import { PricelistModule } from './pricelist/pricelist.module';
import { PricelistService } from './pricelist/pricelist.service';
import { TabsNavigationModule } from './tabs_navigation/tabs_navigation.module';
import { WordBreakPipe } from './word_break.pipe';
import { ThingsToDoService } from '../pages/surroundings/things-to-do/things-to-do.service';
import { ThingsToDoModule } from '../pages/surroundings/things-to-do/things-to-do.module';
import { ThingsToDoDetailsModule } from '../pages/surroundings/things-to-do-details/things-to-do-details.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    CardsModule,
    CommonModule,
    ContactFormModule,
    CroatiaFactsDataPowerModule,
    CroatiaFactsMoneyModule,
    CroatiaFactsVisaModule,
    CroatiaFactsWordsModule,
    DialogsModule,
    DistancePipe,
    LanguagesModule,
    LogoModule,
    FooterModule,
    FormsModule,
    GoogleMapsModule,
    PricelistModule,
    ReactiveFormsModule,
    RouterModule,
    TabsNavigationModule,
    ThingsToDoDetailsModule,
    ThingsToDoModule,
    WordBreakPipe,
  ],
  declarations: [
    DistancePipe,
    WordBreakPipe,
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
        MarkersService,
        PricelistService,
        ThingsToDoService
    ],
    };
  }
}
