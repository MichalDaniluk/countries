import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './core/components/content/content.component';
import { MessageComponent } from './core/components/shared/message/message.component';
import { SnackBarComponent } from './core/components/shared/snack-bar/snack-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { CountriesListComponent } from './pages/countries-list/countries-list.component';
import { CountryDetailsComponent } from './pages/country-details/country-details.component';
import { RegionsComponent } from './core/components/regions/regions.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryInfoComponent } from './core/components/country-info/country-info.component';
import { CoreModule } from './modules/core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutMeComponent } from './core/components/about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    MessageComponent,
    PageNotFoundComponent,
    AboutComponent,
    AboutMeComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    SnackBarComponent,
    HomeComponent,
    RegionsComponent,
    HttpClientModule,
    CountriesListComponent,
    CountryInfoComponent,
    CountryDetailsComponent,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
