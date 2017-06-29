// Core
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// App specific
import { AppComponent } from './app.component';
import { appRoutes } from './shared/routes/route-definitions';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { MaterialModule } from './sharedMaterialModule';
import { NavigationService } from './shared/navigation/navigation-service/navigation-service';
import { PageNotFoundModule } from './pages/page-not-found/page-not-found.module';
import { ResponsiveService } from './shared/responsive-service/responsive.service';
import { SharedModule } from './shared/shared.module';
import { WindowRef } from './shared/responsive-service/window.service';

// External
import 'hammerjs';


/* ***************************************************************
*
*  TODO: 1. Add AoT Compilation
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
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    PageNotFoundModule,
    SharedModule.forRoot()
  ],
  exports: [
    MaterialModule
  ],
  providers: [
    NavigationService,
    ResponsiveService,
    WindowRef
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
