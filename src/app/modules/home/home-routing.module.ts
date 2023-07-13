import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionsComponent } from '../regions/regions.component';

const routes: Routes = [
	{
		path: '',
		component: RegionsComponent,
		pathMatch: 'full',
		title: 'Witaj na stronie głównej',
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
