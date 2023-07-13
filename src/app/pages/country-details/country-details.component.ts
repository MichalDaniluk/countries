import { Component } from '@angular/core';
import { CountryInfoComponent } from 'src/app/core/components/country-info/country-info.component';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
  imports: [CountryInfoComponent],
  standalone: true
})
export class CountryDetailsComponent {

}
