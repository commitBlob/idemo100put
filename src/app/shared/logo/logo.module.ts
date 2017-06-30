import { NgModule } from '@angular/core';
import { LogoComponent } from './logo.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule],
  declarations: [LogoComponent],
  exports: [LogoComponent],
})

export class LogoModule {
}
