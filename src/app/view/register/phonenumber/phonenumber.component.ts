import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-phonenumber',
  templateUrl: './phonenumber.component.html',
  styleUrls: ['./phonenumber.component.css']
})
export class PhonenumberComponent {
//   public values = [];
//   public form: FormGroup;
//   phone: string;
//   ngOnInit() {
//     this.form = new FormGroup({
//       phoneNumber: new FormControl({
//         value: null,
//         disabled: false
//       })
//     });

//     if (this.form.controls.phoneNumber.value) {
//       this.values = Object.keys(this.form.controls.phoneNumber.value);
//       // console.log(this.form.controls.phoneNumber.value.dialCode + this.form.controls.phoneNumber.value.phoneNumber)
//     }

//     this.form.controls.phoneNumber.valueChanges.subscribe(value => {
//       if (value) {
//         this.values = Object.keys(value);
//         // console.log(this.form.controls.phoneNumber.value.dialCode + this.form.controls.phoneNumber.value.phoneNumber)
// // x=this.form.controls.phoneNumber.value.dialCode + this.form.controls.phoneNumber.value.phoneNumber 
//       }
//     });
 
//   }

//   resetForm() {
//     this.form.reset();
//   }

//   disable() {
//     this.form.controls.phoneNumber.disable();
//   }
//   enable() {
//     this.form.controls.phoneNumber.enable();
//   }
  // onchange(fom){
  //   console.log(fom.value)
  // }
  // inputnumber(){
  //   console.log(this.form.controls.phoneNumber.value.dialCode + this.form.controls.phoneNumber.value.phoneNumber)

  // }
}


