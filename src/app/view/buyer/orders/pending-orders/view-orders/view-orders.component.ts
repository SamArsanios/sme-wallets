import { Component, OnInit } from "@angular/core";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { PendingOrderData } from "../../../../../service/order/pending.order.data";
import { Location } from "@angular/common";
import { GeneratePurchaseOrderPDF } from "./generatePurchaseOrderPDF";

@Component({
  selector: "app-view-orders",
  templateUrl: "./view-orders.component.html",
  styleUrls: ["./view-orders.component.css"]
})
export class ViewOrdersComponent implements OnInit {
  date: string;
  orderNo: number;
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
  deliveryTime: string;
  

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

  ngOnInit() {
    this.populateOrderView();
  }

  cancel() {
    this.location.back();
  }

  private populateOrderView(): void {
    const order = PendingOrderData.getAllPendingOrderMap().get(
      PendingOrderData.getIdOfOrderToView()
    );

    if (order !== undefined && order != null) {
      this.date = order.timestamp;
      this.orderNo = order.id;
      this.buyerName = order.buyer.name;
      this.buyerPhone = order.buyer.phoneNumber;
      this.buyerEmail = order.buyer.email;
      this.deliveryTime = order.deliveryTime;

      this.supplierName = order.supplier.name;
      this.supplierPhone = order.supplier.phoneNumber;
      this.supplierEmail = order.supplier.email;

      this.orderId = `ord-${order.id}`;
      this.placeOfDelivery = order.placeOfDelivery;
      this.termsOfPayment = order.paymentTerms;
      this.termsOfDelivery = order.deliveryTerms;

      this.srNo = order.isbnNumber;
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

  generatePdf() {
    const id = PendingOrderData.getIdOfOrderToView();
    const orderToViewPdf = PendingOrderData.getAllPendingOrderMap().get(id);

    console.log(orderToViewPdf);

    GeneratePurchaseOrderPDF.generatePdf(orderToViewPdf);
  }
}
