// Core
import {
  MatTabsModule, MatCheckboxModule, MatInputModule, MatSelectModule,
  MatButtonModule, MatDialogModule, MatTooltipModule, MatDatepickerModule, DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS
} from '@angular/material';
import { NgModule } from '@angular/core';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';

@NgModule({
  imports: [ MatTabsModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatButtonModule, MatDialogModule, MatTooltipModule, MatDatepickerModule ],
  exports: [ MatTabsModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatButtonModule, MatDialogModule, MatTooltipModule, MatDatepickerModule ],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}
  ]
})
export class MaterialModule { }
