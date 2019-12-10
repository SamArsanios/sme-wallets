import { NgModule } from '@angular/core';
import {MatStepperModule,
        MatButton,
        MatButtonModule,
        MatListModule,
        MatToolbarModule,
        MatGridListModule,
        MatCardModule,
        MatSelectModule,
        MatRadioModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatTabsModule,
        MatTableModule,
        MatPaginatorModule,
        MatBadgeModule,
        MatDatepicker,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCardTitle,
        
      } from '@angular/material'

const material =[
  MatStepperModule,
  MatButtonModule,
  MatListModule,
  MatToolbarModule,
  MatGridListModule,
  MatCardModule,
  MatSelectModule,
  MatRadioModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatTabsModule,
  MatTableModule,
  MatPaginatorModule,
  MatBadgeModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCardModule,
  
  

]

@NgModule({
  
  imports: [
    material
  ],
  exports:[material]
})
export class MaterialModule { }
