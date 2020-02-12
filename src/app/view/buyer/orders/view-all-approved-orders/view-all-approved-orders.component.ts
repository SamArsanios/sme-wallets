// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-view-all-approved-orders',
//   templateUrl: './view-all-approved-orders.component.html',
//   styleUrls: ['./view-all-approved-orders.component.css']
// })
// export class ViewAllApprovedOrdersComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit } from '@angular/core';
import {ApproveOrderData} from '../../../../service/order/approve.order.data';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-all-approved-orders',
  templateUrl: './view-all-approved-orders.component.html',
  styleUrls: ['../view-orders/view-orders.component.css']
})
export class ViewAllApprovedOrdersComponent implements OnInit {


  buyerName: string;
  buyerPhone: string;
  buyerEmail: string;

  supplierName: string;
  supplierPhone: string;
  supplierEmail: string;

  orderId: string;
  placeOfDelivery: string;
  termsOfPayment: string;
  termsOfDelivery: string;

  srNo: string;
  itemName: string;
  itemDescription: string;
  salesUnit: string;
  quantity: number;
  price: number;
  totalBeforeTax: number;

  subTotal: number;
  tax: number;
  shipping: number;
  totalAfterTax: number;

  constructor(private location: Location) {

      this.populateOrderView();

}

cancel() {
  this.location.back(); // <-- go back to previous location on cancel
}

  private populateOrderView(): void {

    const order = ApproveOrderData.getApproveOrderMap().get(ApproveOrderData.getIdOfOrderToView());

    if ( order !== undefined && order != null ) {

      this.buyerName = order.buyer.name;
      this.buyerPhone = order.buyer.phoneNumber;
      this.buyerEmail = order.buyer.email;

      this.supplierName = order.supplier.name;
      this.supplierPhone = order.supplier.phoneNumber;
      this.supplierEmail = order.supplier.email;

      this.orderId = `ord-${order.id}`;
      this.placeOfDelivery = order.placeOfDelivery;
      this.termsOfPayment = order.paymentTerms;
      this.termsOfDelivery = order.deliveryTerms;

      this.srNo = `ord-${order.id}`;
      this.itemName = order.itemName;
      this.itemDescription = order.itemDescription;
      this.salesUnit = order.saleUnit;
      this.price = 0;
      this.totalBeforeTax = 0;

      this.subTotal = 0;
      this.tax = 0;
      this.shipping = 0;
      this.quantity = order.quantity;
      this.totalBeforeTax = 0;
      this.totalAfterTax = 0;

    } else {

      // fetch the order direct from the db basing on the ID provided

    }

  }

  ngOnInit() {

    this.populateOrderView();

  }

}


