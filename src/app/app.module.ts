import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedMaterialModule } from './sharedMaterialModule';
import { FooterComponent } from './shared/footer/footer.component';


import { AppComponent } from './app.component';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    SharedMaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
