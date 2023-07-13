import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, RouterModule, MatToolbarModule, MatButtonModule],
  exports: [HeaderComponent, FooterComponent, MatDialogModule],
})
export class CoreModule {}
