// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// App specific
import { TabsNavigationComponent } from './tabs_navigation.component';
import { TabsNavigationService } from './tabs_navigation.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    TabsNavigationComponent
  ],
  exports: [
    TabsNavigationComponent
  ],
  providers: [
    TabsNavigationService
  ]
})

export class TabsNavigationModule {
}
