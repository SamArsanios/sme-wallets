// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-buyers-dashboard',
//   templateUrl: './buyers-dashboard.component.html',
//   styleUrls: ['./buyers-dashboard.component.css']
// })
// export class BuyersDashboardComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {OrdersComponent} from '../../view/buyer/orders/orders/orders.component'

@Component({
  selector: 'app-buyers-dashboard',
  templateUrl: './buyers-dashboard.component.html',
  styleUrls: ['./buyers-dashboard.component.css']
})
export class BuyersDashboardComponent implements OnInit, AfterViewInit {
  // links = ['payment notice'];

  // @ViewChild(OrdersComponent) child;
  constructor() {}

  ngOnInit() {
  }
  message:string;

  ngAfterViewInit() {
    // this.message = this.child.message
  }

}
