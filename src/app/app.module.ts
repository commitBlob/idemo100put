// Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// App specific
import { FooterComponent } from './shared/footer/footer.component';
import { appRoutes } from './routes/route-definitions';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppComponent } from './app.component';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';

// External
import 'hammerjs';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LandingPageComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    PageNotFoundModule,
    BrowserAnimationsModule,
  ],
  exports: [
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
