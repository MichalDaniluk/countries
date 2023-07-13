import { Component } from '@angular/core';
import { RegionsComponent } from 'src/app/core/components/regions/regions.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [RegionsComponent],
  standalone: true
})

export class HomeComponent {

}
