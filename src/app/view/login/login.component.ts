import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

export interface ILoginData {
  username: string;
  password: string;
}

const loginData: ILoginData = {
  username: null,
  password: null
};

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    console.log("in onSubmit: ", form.valid);
  }
}
