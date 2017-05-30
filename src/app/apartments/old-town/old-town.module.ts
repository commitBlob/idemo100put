// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// App specific
import { OldTownComponent } from './old-town.component';

@NgModule({
  imports: [CommonModule],
  declarations: [OldTownComponent],
  exports: [OldTownComponent]
})
export class OldTownModule {
}
