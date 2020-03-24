import { Component, OnInit } from '@angular/core';
import { SupplierData } from 'src/app/service/supplier/supplier.data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  navLinks: any[];
  activeLinkIndex = -1; 
  constructor( private router: Router) { 
    this.navLinks = [
      {
          label: 'Pending Orders',
          link: './first',
          index: 0
      }, {
          label: 'Create Orders',
          link: './second',
          index: 1
      }, {
          label: 'Approve Orders',
          link: './third',
          index: 2
      }, {
        label: 'Approve Orders',
        link: './third',
        index: 2
    },  
  ];
  }

  ngOnInit() {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });


    let currentLoggedin = localStorage.getItem('loggedinUser')
    console.log(`the current logged persn in ${currentLoggedin}`)
  }

test(){
  console.log(`tested...`)
}

  letssee() {
    // this.sups = JSON.stringify(SupplierData.getAllSuppliers());
    // return `this is the list of all suppliers: ${JSON.stringify(SupplierData.getAllSuppliers())} `;
   
    console.log(`this is the list of all suppliers: ${JSON.stringify(SupplierData.getAllSuppliers())} `);
    console.log(`test id ${document.getElementById('test-id').textContent} `)

  }

}
