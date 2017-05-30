import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OldTownComponent } from './old-town.component';

@NgModule({
  imports: [CommonModule],
  declarations: [OldTownComponent],
  exports: [OldTownComponent]
})
export class OldTownModule {
}
