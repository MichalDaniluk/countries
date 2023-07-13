import { Component } from '@angular/core';
import { Region, Regions } from '../../types/region.interface';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent {
	regions:Region[] = [
		{ title: 'Azja', name: Regions.ASIA },
		{ title: 'Europa', name: Regions.EUROPE },
		{ title: 'Afryka', name: Regions.AFRICA },
		{ title: 'Ameryka', name: Regions.AMERICA },
		{ title: 'Oceania', name: Regions.OCEANIA }
	];

	displayedColumns: string[] = ['title'];
	dataSource = this.regions;
}
