import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { CountryService } from '../../services/country/country.service';
import { CommonModule } from '@angular/common';
import { Country } from '../../types/country.interface';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.scss'],
  imports: [CommonModule],
  standalone:true
})
export class CountryInfoComponent implements OnInit {

	countryName = '';
	countryInfo!:any;
	loading = false;

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
				this.loading = false;
			}
		})
	}
}
