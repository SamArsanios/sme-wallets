import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
@Component({
  selector: "app-create-order",
  templateUrl: "./create-order.component.html",
  styleUrls: ["./create-order.component.css"]
})
export class CreateOrderComponent implements OnInit {
  date = new Date();
  dateCtrl: FormControl;
  constructor() {}

  ngOnInit() {
    this.dateCtrl = new FormControl("", [Validators.required]);
  }
}
