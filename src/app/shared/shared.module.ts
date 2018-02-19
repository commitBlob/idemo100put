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
import { GoogleColumnModule } from './google-charts/google-column-chart/google-column.module';
import { GoogleBarChartModule } from './google-charts/google-bar-chart/google-bar-chart.module';
import { GoogleLineChartModule } from './google-charts/google-candlestick-chart/google-line-chart.module';
import { ImageGalleryModule } from './image-gallery/image-gallery.module';
import { GalleryService } from './image-gallery/components/gallery-service/gallery.service';
import { DubrovnikFactsWeRecommendModule } from '../pages/dubrovnik-facts/dubrovnik-facts-we-recommend/dubrovnik-facts-we-recommend.module';
import { DuFactsBusiestMonthsModule } from '../pages/dubrovnik-facts/du-facts-busiest-months/du-facts-busiest-months.module';
import { DuFactsInterestingModule } from '../pages/dubrovnik-facts/du-facts-interesting/du-facts-interesting.module';
import { DuFactsUsefulModule } from '../pages/dubrovnik-facts/du-facts-useful/du-facts-useful.module';
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
    DuFactsBusiestMonthsModule,
    DubrovnikFactsWeRecommendModule,
    DuFactsInterestingModule,
    DuFactsUsefulModule,
    LanguagesModule,
    LogoModule,
    FooterModule,
    FormsModule,
    GoogleBarChartModule,
    GoogleLineChartModule,
    GoogleColumnModule,
    GoogleMapsModule,
    ImageGalleryModule,
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
        GalleryService,
        LanguagesService,
        MarkersService,
        PricelistService,
        ThingsToDoService
    ],
    };
  }
}
