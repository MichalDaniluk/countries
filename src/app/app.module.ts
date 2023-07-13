import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutMeComponent } from './components/about-me/about-me.component';

import { CoreModule } from './modules/core/core.module';
import { HomeModule } from './modules/home/home.module';
import { StoreModule } from '@ngrx/store';
import { countriesReducer } from './store/countries-reducers';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
	HomeModule,
    HttpClientModule,
	AboutMeComponent,
	StoreModule.forRoot({countries:countriesReducer}),
	AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
