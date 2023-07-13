import { Component } from '@angular/core';
import { MaterialModule } from 'src/app/modules/shared/material/material.module';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  standalone:true,
  imports:[MaterialModule]
})
export class AboutMeComponent {

}
