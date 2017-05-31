// Core
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

// App specific
import { AppComponent } from './app.component';
import { appRoutes } from './routes/route-definitions';
import { CustomPreload } from './routes/custom-preload';
import { FooterComponent } from './shared/footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';

// External
import 'hammerjs';


// TODO: create custom preloading strategy
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes,{preloadingStrategy: CustomPreload}),
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
