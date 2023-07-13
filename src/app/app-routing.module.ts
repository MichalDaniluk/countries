import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CountriesListComponent } from './pages/countries-list/countries-list.component';
import { CountryDetailsComponent } from './pages/country-details/country-details.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    title: 'Witaj na stronie głównej',
  },
  {
    path: 'countries/:region',
    component: CountriesListComponent,
    title: 'Lista krajów wybranego regionu',
  },
  {
    path: 'country/:name',
    component: CountryDetailsComponent,
    title: 'Dane szczegółowe wybranego kraju',
  },
  { path: 'about', component: AboutComponent, title: 'O programie' },
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
