import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OldPortComponent } from './old-port.component';

@NgModule({
  imports: [CommonModule],
  declarations: [OldPortComponent],
  exports: [OldPortComponent]
})
export class OldPortModule {
}
