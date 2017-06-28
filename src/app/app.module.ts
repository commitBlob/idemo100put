// Core
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

// App specific
import { AppComponent } from './app.component';
import { appRoutes } from './shared/routes/route-definitions';
import { CustomPreload } from './shared/routes/custom-preload';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MaterialModule } from './sharedMaterialModule';
import { NavigationService } from './shared/navigation/navigation-service/navigation-service';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { ResponsiveService } from './shared/responsive-service/responsive.service';
import { SharedModule } from './shared/shared.module';
import { WindowRef } from './shared/responsive-service/window.service';

// External
import 'hammerjs';


/* ***************************************************************
*
*  TODO: 1. Add AoT Compilation
*  TODO: 2. Delete Apartments (L&H,Lav,OP,OT) as +apartments data will be retrieved from backend (atm. apartments_data.json)
*
*****************************************************************/
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, {preloadingStrategy: CustomPreload}),
    MaterialModule,
    PageNotFoundModule,
    SharedModule
  ],
  exports: [
    MaterialModule
  ],
  providers: [
    CustomPreload,
    NavigationService,
    ResponsiveService,
    WindowRef
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
