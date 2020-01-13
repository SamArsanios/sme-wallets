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
  MatCardModule,
  MatNativeDateModule
];


@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule {}
