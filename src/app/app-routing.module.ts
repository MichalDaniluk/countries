import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './modules/pages/page-not-found/page-not-found.component';

const routes: Routes = [
	{
		path:'regions',
		loadChildren:() => import('./modules/regions/regions.module').then(m => m.RegionsModule)
	},
	{
		path: 'countries',
		loadChildren:() => import('./modules/countries/countries.module').then(m => m.CountriesModule)
	},
	{
		path:'country',
		loadChildren:() => import('./modules/country-details/country-details.module').then(m => m.CountryDetailsModule)
	},
	{
		path: 'page',
		loadChildren:() => import('./modules/pages/pages.module').then(m => m.PagesModule)
	},
	{
		path: '**',
		component: PageNotFoundComponent,
		title: '404 - Szukana strona nie istnieje',
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
