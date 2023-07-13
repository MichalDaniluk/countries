import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { CountryService } from '../../services/country/country.service';
import { CommonModule } from '@angular/common';
import { Country } from '../../types/country.interface';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.scss'],
  imports: [CommonModule, MatCardModule],
  standalone:true
})
export class CountryInfoComponent implements OnInit {

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
				//console.log(this.countryInfo[0].currencies[])
				//console.log(this.countryInfo[0].currencies[]);

				this.loading = false;
			}
		})
	}
}
