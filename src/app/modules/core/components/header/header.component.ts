import { Component } from '@angular/core';
import { AboutMeComponent } from 'src/app/core/components/about-me/about-me.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  returnAdress = '';

constructor(public dialog:MatDialog) {}

  showDialog() {
    const dialogRef = this.dialog.open(AboutMeComponent);
    dialogRef.afterClosed().subscribe();
  }
}
