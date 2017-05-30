// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// App specific
import { OldPortComponent } from './old-port.component';

@NgModule({
  imports: [CommonModule],
  declarations: [OldPortComponent],
  exports: [OldPortComponent]
})
export class OldPortModule {
}
