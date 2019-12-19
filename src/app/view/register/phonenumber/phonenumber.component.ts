import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-phonenumber',
  templateUrl: './phonenumber.component.html',
  styleUrls: ['./phonenumber.component.css']
})
export class PhonenumberComponent implements OnInit {
  public values = [];
  public form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      phoneNumber: new FormControl({
        value: null,
        disabled: false
      })
    });

    if (this.form.controls.phoneNumber.value) {
      this.values = Object.keys(this.form.controls.phoneNumber.value);
    }

    this.form.controls.phoneNumber.valueChanges.subscribe(value => {
      if (value) {
        this.values = Object.keys(value);
      }
    });
  }

  resetForm() {
    this.form.reset();
  }

  disable() {
    this.form.controls.phoneNumber.disable();
  }
  enable() {
    this.form.controls.phoneNumber.enable();
  }
}

