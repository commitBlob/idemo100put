import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from '.././landing-page/landing-page.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: LandingPageComponent },
  // { path: '**', component: NotFound }, //always last
];

export const AppRouting = RouterModule.forRoot(appRoutes);