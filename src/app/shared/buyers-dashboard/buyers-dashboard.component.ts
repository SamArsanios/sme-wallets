import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {OrdersComponent} from '../../view/buyer/orders/orders/orders.component'

@Component({
  selector: 'app-buyers-dashboard',
  templateUrl: './buyers-dashboard.component.html',
  styleUrls: ['./buyers-dashboard.component.css']
})
export class BuyersDashboardComponent implements OnInit, AfterViewInit {
  currentUser: string;
  constructor() {}

  ngOnInit() {
    let currentLoggedin = localStorage.getItem('loggedinUser')
    let currentUserr = JSON.parse(currentLoggedin)
    this.currentUser = JSON.stringify(currentUserr[0].name)
  }
  message:string;

  ngAfterViewInit() {
    // this.message = this.child.message
  }

}
