import { Component, OnInit } from '@angular/core';
import { SupplierData } from 'src/app/service/supplier/supplier.data';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  sups: any = this.letssee();

  constructor() { }

  ngOnInit() {
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
