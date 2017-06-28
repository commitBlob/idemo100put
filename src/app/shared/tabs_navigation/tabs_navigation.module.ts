// Core
import { NgModule } from '@angular/core';

// App specific
import { TabsNavigationComponent } from './tabs_navigation.component';
import {TabsNavigationService} from './tabs_navigation.service';

@NgModule({
  imports: [],
  declarations: [TabsNavigationComponent],
  exports: [TabsNavigationComponent],
  providers: [TabsNavigationService]
})

export class TabsNavigationModule {
}
