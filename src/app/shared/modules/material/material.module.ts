<<<<<<< HEAD
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
=======
import { NgModule } from "@angular/core";
import {
  MatStepperModule,
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
  MatSortModule
} from "@angular/material";
>>>>>>> 1d2ca488f7b84ab4234126acb5048a27f92bf687

const material = [
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
  MatSortModule,
  MatPaginatorModule,
  MatBadgeModule,
  MatDatepickerModule,
<<<<<<< HEAD
  MatNativeDateModule,
  MatCardModule,
  
  

]
=======
  MatNativeDateModule
];
>>>>>>> 1d2ca488f7b84ab4234126acb5048a27f92bf687

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule {}
