import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AboutComponent } from './about/about.component';
import { MaterialModule } from '../shared/material/material.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AboutComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
	MaterialModule
  ],
  exports:[AboutComponent]
})
export class PagesModule { }
