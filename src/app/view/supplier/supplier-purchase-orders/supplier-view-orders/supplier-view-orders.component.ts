import { Component, OnInit } from "@angular/core";
import { SupplierPendingOrderData } from "src/app/service/order/supplier.pending.order.data";
import { Location } from "@angular/common";

@Component({
  selector: "app-supplier-view-orders",
  templateUrl: "./supplier-view-orders.component.html",
  styleUrls: ["./supplier-view-orders.component.css"]
})
export class SupplierViewOrdersComponent implements OnInit {
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

  // cancel() {
  //   this.location.back();
  // }

  private populateOrderView(): void {
    const order = SupplierPendingOrderData.getSupplierPendingOrderMap().get(
      SupplierPendingOrderData.getIdOfOrderToView()
    );

    if (order !== undefined && order != null) {
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

  onKeyPrice(event: any) {
    this.price = event.target.value;
    this.subTotal = this.price;
    this.totalAfterTax = this.price;

    this.calculateTotalBeforeTaxAndShiping();
    this.calculateTotalAfterTax();
  }

  onKeyTax(event: any) {
    const theTax = event.target.value;

    this.tax = theTax;

    this.calculateTotalAfterTax();
  }

  onKeyShipping(event: any) {
    const theShipping = event.target.value;

    this.shipping = theShipping;

    this.calculateTotalAfterTax();
  }

  calculateTotalBeforeTaxAndShiping(): void {
    this.totalBeforeTax =
      this.pasreNumber(this.quantity) * this.pasreNumber(this.price);
  }

  calculateTotalAfterTax(): void {
    // find out if tax = 0
    if (this.tax == 0 && this.shipping == 0) {
      this.totalAfterTax =
        this.pasreNumber(this.price) * this.pasreNumber(this.quantity);
    } else {
      const taxPercentage = this.tax / 100;

      // if both shipping and tax are set
      if (this.tax > 0 && this.shipping > 0) {
        this.totalAfterTax =
          this.pasreNumber(this.shipping) +
          this.pasreNumber(taxPercentage) +
          this.pasreNumber(this.totalBeforeTax);
      }

      // if only the tax is set
      else if (this.tax > 0 && this.shipping == 0) {
        this.totalAfterTax =
          this.pasreNumber(taxPercentage) +
          this.pasreNumber(this.totalBeforeTax);
      }

      // if only shipping is set
      else if (this.tax == 0 && this.shipping > 0) {
        this.totalAfterTax =
          this.pasreNumber(this.totalBeforeTax) +
          Number.parseFloat(this.shipping.toString());
        console.log(this.shipping);
      }
    }
  }

  // seems stupid , to convert a number to string and parse again to number ,
  // but this is how I solved my problem.
  pasreNumber(value: number): number {
    return Number.parseFloat(value.toString());
  }
}
