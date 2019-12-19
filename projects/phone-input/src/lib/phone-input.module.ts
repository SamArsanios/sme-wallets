import { NgModule } from '@angular/core';
import { PhoneNumberInputComponent } from './phone-number-input.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [PhoneNumberInputComponent],
  exports: [PhoneNumberInputComponent]
})
export class NgxPhoneNumberInputModule {}
