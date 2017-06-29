// Core
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// App specific
import { FooterModule } from './footer/footer.module';
import { LogoModule } from './logo/logo.module';
import { TabsNavigationModule } from './tabs_navigation/tabs_navigation.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    LogoModule,
    FooterModule,
    FormsModule,
    RouterModule,
    TabsNavigationModule
  ],
  declarations: []
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
    ]};
  }
}