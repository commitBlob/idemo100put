// Core
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// App specific
import { FooterModule } from './footer/footer.module';
import { GoogleMapsModule } from './google-maps/google-maps.module';
import { LanguagesModule } from './languages/languages.module';
import { LogoModule } from './logo/logo.module';
import { TabsNavigationModule } from './tabs_navigation/tabs_navigation.module';
import { LanguagesService } from './languages/languages.service';
import { ContentService } from './content-service/content.service';
import { MaterialModule } from '../sharedMaterialModule';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    LanguagesModule,
    LogoModule,
    FooterModule,
    FormsModule,
    GoogleMapsModule,
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
        LanguagesService
    ]};
  }
}
