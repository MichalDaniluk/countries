import { Component, OnInit, Input } from '@angular/core';
import { CountryService } from '../../services/country/country.service';
import { Country } from '../../types/country.interface';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
  imports: [MatTableModule, CommonModule],
  standalone: true,
})
export class CountriesComponent implements OnInit {
  @Input() region = 'europe';
  countries: Country[] = [];
  returnAdress = 'countries';
  loading = false;

  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.region = this.route.snapshot.params['region'];
    this.countryService.getCountries(this.region).subscribe({
      next: (countries) => {
        this.countries = countries;
        this.dataSource = this.countries;
      },
    });
    this.loading = false;
  }

  get isEmpty():boolean {
	return this.countries.length === 0;
  }

  displayedColumns: string[] = ['flag', 'title'];
  dataSource = this.countries;
}
