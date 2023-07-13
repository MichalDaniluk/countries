import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryDetailsRoutingModule } from './country-details-routing.module';
import { CountryDetailsComponent } from './country-details.component';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [
    CountryDetailsComponent,
  ],
  imports: [
    CommonModule,
    CountryDetailsRoutingModule,
	MaterialModule
  ],
  exports:[CountryDetailsComponent,MaterialModule]
})
export class CountryDetailsModule { }
