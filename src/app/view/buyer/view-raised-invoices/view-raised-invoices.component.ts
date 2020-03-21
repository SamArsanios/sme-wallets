import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { BuyerAllInvoicesInvoiceData } from 'src/app/service/order/buyer.allInvoices.invoice.data';


@Component({
  selector: 'app-view-raised-invoices',
  templateUrl: './view-raised-invoices.component.html',
  styleUrls: ['./view-raised-invoices.component.css']
})
export class ViewRaisedInvoicesComponent implements OnInit {
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
    let order = BuyerAllInvoicesInvoiceData.getBuyerInvoiceMap().get(BuyerAllInvoicesInvoiceData.getIdOfInvoiceToView())
console.log(`ze order is eeeeeeee${JSON.stringify(order, null, 2)}`)
    if ( order !== undefined && order != null ) {

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
      // this.price = order.order.price;
      // this.totalBeforeTax = order.order;

      this.subTotal = 0;
      this.tax = order.interestRate;
      this.shipping = 0;
      this.quantity = order.order.quantity;
      // this.totalBeforeTax = order.;
      this.totalAfterTax = order.amountToPay;

    } else {

      // fetch the order direct from the db basing on the ID provided

    }

  }

  ngOnInit() {

    this.populateOrderView();

  }

}
