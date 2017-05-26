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
import { ApartmentComponent } from './apartments/apartment.component';
import { LoveAndHopeComponent } from './apartments/love-and-hope/love-and-hope.component';
import { LavandaComponent } from './apartments/lavanda/lavanda.component';
import { OldTownComponent } from './apartments/old-town/old-town.component';
import { OldPortComponent } from './apartments/old-port/old-port.component';

// External
import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LandingPageComponent,
    ApartmentComponent,
    LoveAndHopeComponent,
    LavandaComponent,
    OldTownComponent,
    OldPortComponent
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
