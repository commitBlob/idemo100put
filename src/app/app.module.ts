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
import { FooterComponent } from './shared/footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MaterialModule } from './sharedMaterialModule';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';

// External
import 'hammerjs';


/* ***************************************************************
*
*  TODO: 1. Add AoT Compilation
*  TODO: 2. Make Global navigation place it in app.component.html
*  TODO: 3. Delete Apartments (L&H,Lav,OP,OT) as +apartments data will be retrieved from backend (atm. apartments_data.json)
*
*****************************************************************/
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
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
  ],
  exports: [
    MaterialModule
  ],
  providers: [CustomPreload],
  bootstrap: [AppComponent]
})
export class AppModule { }
