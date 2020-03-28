import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Order } from 'src/app/model/buyer/order/order-model';
import { SupplierAllOrderData } from 'src/app/service/supplier/supplier.all.order.data';
import { GenerateSupplierAllOrderPDF } from './generateSupplierAllOrderPDF';

@Component({
    selector: 'app-view-supplier-all-orders',
    templateUrl: './view-supplier-all-orders.component.html',
    styleUrls: ['./view-supplier-all-orders.component.css']
  })
  export class ViewSupplierAllOrdersComponent implements OnInit {

  buyerName: string;
  buyerPhone: string;
  buyerEmail: string;
  orderStatusSupplier = false

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
  orderStatus: string;
  total: number;

  constructor(private location: Location) {

    this.populateOrderView();

}

  private populateOrderView(): void {

    const order = SupplierAllOrderData.getsupplierAllOrderMap().get(SupplierAllOrderData.getIdOfOrderToView());

    if ( order !== undefined && order != null ) {

      this.buyerName = order.order.buyer.name;
      this.buyerPhone = order.order.buyer.phoneNumber;
      this.buyerEmail = order.order.buyer.email;
      // this.orderStatus = order.order.orderStatus;

      this.supplierName = order.order.supplier.name;
      this.supplierPhone = order.order.supplier.phoneNumber;
      this.supplierEmail = order.order.supplier.email;

      this.orderId = `ord-${order.order.id}`;
      this.placeOfDelivery = order.order.placeOfDelivery;
      this.termsOfPayment = order.order.paymentTerms;
      this.termsOfDelivery = order.order.deliveryTerms;
      

      this.srNo = order.order.isbnNumber;
      this.itemName = order.order.itemName;
      this.itemDescription = order.order.itemDescription;
      this.salesUnit = order.order.saleUnit;
      this.price = order.pricePerItem
      this.totalBeforeTax = order.subTotal;
      this.total = this.price * this.quantity;


      this.subTotal = order.subTotal;
      this.tax = order.taxRate;
      this.shipping = order.shippingCharges;
      this.quantity = order.order.quantity;
      this.totalBeforeTax = order.subTotal;
      this.totalAfterTax = order.finalTotal;
      this.orderStatus = order.order.orderStatus

    } else {

      // fetch the order direct from the db basing on the ID provided

    }
    if(this.orderStatus = "approved"){
      this.orderStatusSupplier =true
    }


  }


cancel() {
  this.location.back(); // <-- go back to previous location on cancel
}

  ngOnInit() {

    this.populateOrderView();

  }

  generatePdf() {
    const id = SupplierAllOrderData.getIdOfOrderToView();
    const orderToViewPdf = SupplierAllOrderData.getsupplierAllOrderMap().get(id);

    console.log(orderToViewPdf);

    GenerateSupplierAllOrderPDF.generatePdf(orderToViewPdf);
  }

}

