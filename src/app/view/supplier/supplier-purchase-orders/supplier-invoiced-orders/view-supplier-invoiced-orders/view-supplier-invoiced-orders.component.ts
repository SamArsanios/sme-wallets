import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { SupplierInvoicedOrderData } from 'src/app/service/supplier/supplier.invoiced.order.data';
import { Order } from 'src/app/model/buyer/order/order-model';
import { GeneratePurchaseOrderPDF } from 'src/app/view/buyer/orders/view-orders/generatePurchaseOrderPDF';
import { GenerateSupplierInvoicedOrderPDF } from './generateSupplierInvoicedOrderPDF';

@Component({
  selector: 'app-view-supplier-invoiced-orders',
  templateUrl: './view-supplier-invoiced-orders.component.html',
  styleUrls: ['./view-supplier-invoiced-orders.component.css']
})
export class ViewSupplierInvoicedOrdersComponent implements OnInit {

  buyerName: string;
  buyerPhone: string;
  buyerEmail: string;
  date: string;
  orderNumber: number;

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

  private populateOrderView(): void {

    const order = SupplierInvoicedOrderData.getSupplierInvoicedOrderMap().get(SupplierInvoicedOrderData.getIdOfOrderToView());

    if ( order !== undefined && order != null ) {
      this.date = order.order.timestamp;
      this.orderNumber = order.order.id;
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
      this.price = order.pricePerItem
      this.totalBeforeTax = order.subTotal;

      this.subTotal = order.subTotal;
      this.tax = order.taxRate;
      this.shipping = order.shippingCharges;
      this.quantity = order.order.quantity;
      this.totalBeforeTax = order.subTotal;
      this.totalAfterTax = order.finalTotal;

    } else {

      // fetch the order direct from the db basing on the ID provided

    }

  }

cancel() {
  this.location.back(); // <-- go back to previous location on cancel
}

  ngOnInit() {

    this.populateOrderView();

  }

  generatePdf() {
    const id = SupplierInvoicedOrderData.getIdOfOrderToView();
    const orderToViewPdf = SupplierInvoicedOrderData.getSupplierInvoicedOrderMap().get(id);

    console.log(orderToViewPdf);

    GenerateSupplierInvoicedOrderPDF.generatePdf(orderToViewPdf);
  }

}

