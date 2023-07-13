import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { CountryService } from 'src/app/services/country/country.service';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetailsComponent implements OnInit {

	countryName = '';
	countryInfo!:any;
	loading = false;
	flagImage = '';
	population = 0;
	regionName = '';

	constructor(
		private countryService: CountryService,
		private route: ActivatedRoute) {}

	ngOnInit() {
		this.loading = true;
		this.countryName = this.route.snapshot.params['name']; //todo: zrobic pipe
		this.countryService.getCountry(this.countryName)
		.subscribe({
			next: country => {
				this.countryInfo = country;
				this.flagImage = this.countryInfo[0].flags.png;
				this.population = this.countryInfo[0].population;
				this.regionName = this.countryInfo[0].region;
				this.loading = false;
			}
		})
	}
}
