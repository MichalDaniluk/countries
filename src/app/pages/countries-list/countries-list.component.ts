import { Component } from '@angular/core';
import { CountriesComponent } from '../../core/components/countries/countries.component';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss'],
  imports: [CountriesComponent],
  standalone:true,
})
export class CountriesListComponent  {

}
