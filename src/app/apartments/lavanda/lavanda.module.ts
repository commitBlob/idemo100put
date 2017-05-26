import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LavandaComponent } from './lavanda.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LavandaComponent],
  exports: [LavandaComponent]
})
export class LavandaModule {
}
