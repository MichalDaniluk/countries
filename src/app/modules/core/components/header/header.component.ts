import { Component } from '@angular/core';
import { AboutMeComponent } from 'src/app//components/about-me/about-me.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	region = localStorage.getItem('region');
	country = localStorage.getItem('country');

  	returnAdress = 'countries/region/' + this.region;


constructor(public dialog:MatDialog) {}

  showDialog() {
    const dialogRef = this.dialog.open(AboutMeComponent);
    dialogRef.afterClosed().subscribe();
  }

  clearLocalStorage() {
	localStorage.removeItem('region');
	localStorage.removeItem('country');
  }

  clearCountry() {
	localStorage.removeItem('country');
  }

  get isRegion():boolean {
	return localStorage.getItem('region') !== null
  }

  get isCountry():boolean {
	return localStorage.getItem('country') !== null;
  }
}
