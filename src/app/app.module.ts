// Core
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// App specific
import { ApartmentService } from './shared/apartments-service/apartments.service';
import { AppComponent } from './app.component';
import { appRoutes } from './shared/routes/route-definitions';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { MaterialModule } from './materialModule';
import { NavigationService } from './shared/navigation/navigation-service/navigation-service';
import { PageNotFoundModule } from './pages/page-not-found/page-not-found.module';
import { PagesModule } from './pages/pages.module';
import { ResponsiveService } from './shared/responsive-service/responsive.service';
import { SharedModule } from './shared/shared.module';
import { WindowRef } from './shared/responsive-service/window.service';

// External
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    PageNotFoundModule,
    SharedModule.forRoot(),
    PagesModule
  ],
  exports: [
    MaterialModule
  ],
  providers: [
    ApartmentService,
    NavigationService,
    ResponsiveService,
    WindowRef
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
