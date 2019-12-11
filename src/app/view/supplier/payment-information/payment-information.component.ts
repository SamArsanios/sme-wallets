import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-information',
  templateUrl: './payment-information.component.html',
  styleUrls: ['./payment-information.component.css']
})
export class PaymentInformationComponent implements OnInit {
  // isBuyer = "false";
  isBuyer: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
