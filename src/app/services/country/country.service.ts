import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Country } from '../../types/country.interface';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

	private apiUrl = environment.apiUrl;

	httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};

	constructor(private http: HttpClient) { }

	public getCountries(region:string): Observable<Country[]> {
		return this.http.get<Country[]>(`${this.apiUrl}/region/${region}`, this.httpOptions);
	}

	public getCountry(name:string): Observable<Country[]> {
		return this.http.get<Country[]>(`${this.apiUrl}/name/${name}`, this.httpOptions);
	}
}
