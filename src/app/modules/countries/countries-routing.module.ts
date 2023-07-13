import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from 'src/app/modules/countries/countries.component';

const routes: Routes = [
	{
		path:'region/:region',
		component: CountriesComponent
	},
	{
		path:'country/:name',
		component: CountriesComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
