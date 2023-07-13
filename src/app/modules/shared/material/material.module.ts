import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [MatToolbarModule, MatButtonModule, MatDialogModule],
  exports: [MatToolbarModule, MatButtonModule, MatDialogModule],
})
export class MaterialModule { }
