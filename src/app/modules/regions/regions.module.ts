import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionsRoutingModule } from './regions-routing.module';
import { RegionsComponent } from './regions.component';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [
    RegionsComponent
  ],
  imports: [
    CommonModule,
    RegionsRoutingModule,
	MaterialModule
  ],
  exports:[RegionsComponent]
})
export class RegionsModule { }
