import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedMaterialModule } from './sharedMaterialModule';
import { FooterComponent } from './shared/footer/footer.component';
import { AppRouting } from './routes/route-definitions';
import { LandingPageComponent } from './landing-page/landing-page.component';


import { AppComponent } from './app.component';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LandingPageComponent
  ],
  imports: [
    SharedMaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
