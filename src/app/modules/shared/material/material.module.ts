import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  exports: [MatToolbarModule, MatButtonModule, MatDialogModule, MatTableModule, MatCardModule],
})
export class MaterialModule { }
