import { NgModule } from '@angular/core';
import { MatToolbarModule, MatSidenavModule, MatCardModule,
    MatIconModule, MatButtonModule, MatListModule,
    MatCheckboxModule, MatTableModule, 
    MatMenuModule,
    MatFormFieldModule, MatInputModule, 
    MatSelectModule, MatTooltipModule} from '@angular/material';

let modules = [
  MatToolbarModule, MatSidenavModule, 
  MatListModule, MatCardModule, 
  MatIconModule, MatButtonModule, 
  MatCheckboxModule, MatTableModule, 
  MatMenuModule, MatFormFieldModule, 
  MatInputModule, MatSelectModule,
  MatTooltipModule
];

@NgModule({
  imports: modules,
  exports: modules,
})

export class MyCustomMaterialModule { }