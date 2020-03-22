// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-view-approve-invoices',
//   templateUrl: './view-approve-invoices.component.html',
//   styleUrls: ['./view-approve-invoices.component.css']
// })
// export class ViewApproveInvoicesComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { ApproveOrderData } from 'src/app/service/order/approve.order.data';
import { Location } from '@angular/common';
import { SupplierApprovedOrdersData } from 'src/app/service/supplier/supplier.approved.order.data';
import { Order } from 'src/app/model/buyer/order/order-model';
// import { GenerateApprovedInvoicesPDF } from './generateApprovedInvoicesPDF';
import { FormControl, Validators } from '@angular/forms';
import { Invoice } from 'src/app/model/buyer/invoices/invoice-model';
@Component({
  selector: 'app-view-approve-invoices',
  templateUrl: './view-approve-invoices.component.html',
  styleUrls: ['./view-approve-invoices.component.css']
})
export class ViewApproveInvoicesComponent implements OnInit {
  date = new Date();
  dateCtrl: FormControl;
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
  salesUnit: number;
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


    const order = SupplierApprovedOrdersData.getsupplierApprovedOrdersMap().get(SupplierApprovedOrdersData.getIdOfOrderToView());

    if (order !== undefined && order != null) {

      this.buyerName = order.order.buyer.name;
      this.buyerPhone = order.order.buyer.phoneNumber;
      this.buyerEmail = order.order.buyer.email;

      this.supplierName = order.order.supplier.name;
      this.supplierPhone = order.order.supplier.phoneNumber;
      this.supplierEmail = order.order.supplier.email;

      this.orderId = `ord-${order.id}`;
      this.placeOfDelivery = order.order.placeOfDelivery;
      this.termsOfPayment = order.order.paymentTerms;
      this.termsOfDelivery = order.order.deliveryTerms;

      this.srNo = `ord-${order.id}`;
      this.itemName = order.order.itemName;
      this.itemDescription = order.order.itemDescription;
      this.salesUnit = order.order.saleUnit;
      // this.price = order.pricePerItem;
      // this.totalBeforeTax = order.totalPrice;

      // this.subTotal = order.subTotal;
      // this.tax = order.taxRate;
      // this.shipping = order.shippingCharges;
      // this.quantity = order.order.quantity;
      // this.totalBeforeTax = order.subTotal;
      // this.totalAfterTax = order.finalTotal;

    } else {

      // fetch the order direct from the db basing on the ID provided

    }

  }

  generatePdf() {
    const id = SupplierApprovedOrdersData.getIdOfOrderToView();
    const orderToViewPdf = SupplierApprovedOrdersData.getsupplierApprovedOrdersMap().get(id);

    console.log(orderToViewPdf);

    // GenerateApprovedInvoicesPDF.generatePdf(orderToViewPdf);
  }

  ngOnInit() {

    this.populateOrderView();
    this.dateCtrl = new FormControl("", [Validators.required]);


  }

}

