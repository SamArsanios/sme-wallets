import { Component, OnInit } from "@angular/core";
import { SupplierPendingOrderData } from "src/app/service/order/supplier.pending.order.data";
import { Location } from "@angular/common";
import { Order } from "src/app/model/buyer/order/order-model";
import { ObjectsUtil } from "src/app/utils/objects/objects";
import { NgForm } from "@angular/forms";
import { SupplierOrder } from "src/app/model/supplier/order/SupplierOrder";
import { DateUtils } from "src/app/utils/date/date-utils";
import { User } from "src/app/shared/model/user/user-model";
import { Wallet } from "src/app/shared/model/wallet/wallet-model";
import { HttpService } from "src/app/utils/http/http-service";
import { Router } from '@angular/router';
@Component({
  selector: "app-supplier-view-orders",
  templateUrl: "./supplier-view-orders.component.html",
  styleUrls: ["./supplier-view-orders.component.css"]
})
export class SupplierViewOrdersComponent implements OnInit {
  invoiceStatus = false;
  declinedStatus = false;
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
  constructor(
    
    private router: Router,
    private objectUtilOrder: ObjectsUtil<Order>,
    private objectUtilSupplierOrder: ObjectsUtil<SupplierOrder>,
    private httpService: HttpService<SupplierOrder>,
    private location: Location
  ) {
    this.populateOrderView();
  }
  cancel() {
    this.location.back();
  }
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
  ngOnInit() {
    this.populateOrderView();
  }
  onKeyPrice(event: any) {
    this.price = event.target.value;
    // this.subTotal = this.price;
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
      this.subTotal =   this.totalBeforeTax
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
  parseStringToNumber(value: string): number {
    return Number.parseFloat(value);
  }
  temporaryWallet(buyer: User): Wallet {
    let wallet = new Wallet(1, "SME", "Feb 21, 2020 5:13:45 AM", buyer);
    wallet.timestamp = null;
    let timestampStr = "timestampStr";
    wallet[timestampStr] = DateUtils.convertDateFormatToParsable(
      wallet.timestamp
    );
    wallet.timestamp = null;
    wallet["timestampStr"] = buyer["emailVerifiedAtStr"];
    return wallet;
  }
  onSubmit(form: NgForm, callback) {
    // get the order
    const order = SupplierPendingOrderData.getSupplierPendingOrderMap().get(
      SupplierPendingOrderData.getIdOfOrderToView()
      
    );

    const timestampStrOrder = "timestampStr";
    order[timestampStrOrder] = DateUtils.convertDateFormatToParsable(
      order.timestamp
    );
    order.timestamp = null;
    // create a transient emailVerifiedAtStr
    const emailVerifiedAtStrBuyer = "emailVerifiedAtStr";
    const buyer = order.buyer;
    buyer[emailVerifiedAtStrBuyer] = DateUtils.convertDateFormatToParsable(
      buyer.emailVerifiedAt
    );
    buyer.emailVerifiedAt = null;
    const supplier = order.supplier;
    const emailVerifiedAtStrSupplier = "emailVerifiedAtStr";
    supplier[emailVerifiedAtStrSupplier] = DateUtils.convertDateFormatToParsable(supplier.emailVerifiedAt);
    supplier.emailVerifiedAt = null;
    order.wallet = this.temporaryWallet(buyer);
    // order.supplier = supplier;
    // order.buyer = buyer;
    console.log(`The Order: ${JSON.stringify(order, null, 2)} `);
    let supplierOrder = SupplierOrder.createInstance();
    supplierOrder = this.objectUtilSupplierOrder.objectToInstance(
      supplierOrder,
      form.value
    );
    supplierOrder.id = 0;
    supplierOrder.order = order;
    // console.log(`the orrrrrrrrder: ${JSON.stringify(order, null, 2)} `);
    supplierOrder.totalPrice = this.parseStringToNumber(
      this.totalBeforeTax.toString()
    );
    supplierOrder.order.orderStatus = "accepted"
    supplierOrder.subTotal = this.parseStringToNumber(this.subTotal.toString());
    supplierOrder.finalTotal = this.parseStringToNumber(
      this.totalAfterTax.toString()
    );
    supplierOrder.shippingCharges = this.parseStringToNumber(
      this.shipping.toString()
    );
    supplierOrder.status = "accepted"
    supplierOrder.taxRate = this.parseStringToNumber(this.tax.toString());
    supplierOrder.pricePerItem = this.parseStringToNumber(
      this.price.toString()
    );
    console.log(
      `The Supplier Order: ${JSON.stringify(supplierOrder, null, 2)} `
    );
    console.log(`total before tax: ${this.totalBeforeTax} `);
    console.log(`total after tax: ${this.totalAfterTax} `);
    console.log(`sub tot: ${this.subTotal} `);
    console.log(
      `The Supplier.Order: ${JSON.stringify(supplierOrder.order, null, 2)} `
    );
    // (<HTMLInputElement>document.getElementById('totalAfterTax')).value
    supplierOrder.subTotal = this.pasreNumber(
      Number((<HTMLInputElement>document.getElementById("subtotal")).value)
    );
    supplierOrder.finalTotal = this.pasreNumber(
      Number((<HTMLInputElement>document.getElementById("totalAfterTax")).value)
    );
    supplierOrder.totalPrice = this.pasreNumber(
      Number(
        (<HTMLInputElement>document.getElementById("totalBeforeTax")).value
      )
    );
    
    let OldOrder = SupplierPendingOrderData.getSupplierPendingOrderMap().get(
      SupplierPendingOrderData.getIdOfOrderToView()
    );
    let supplierNewOrder = SupplierOrder.createInstance();
    // supplierNewOrder.order.orderStatus = "accepted";
    let newOrder = Order.createInstance();
    OldOrder.orderStatus = "accepted";
    this.objectUtilOrder.objectToInstance(newOrder, OldOrder); 
    console.log("most needed is", OldOrder)

        this.httpService.postRequest("/supplierOrders/create", supplierOrder).subscribe(e => {
      console.log(`the supplier Order is ${e.body, null, 2}`)
      this. invoiceStatus = true;
      setTimeout(() => {
        this.callback()
        }, 4000);
      })
    

    this.httpService.putRequest("/orders/update", OldOrder).subscribe(e => {
      console.log(`the updated Order is ${e.body, null, 2}`)
      setTimeout(() => {
        this.updateOrderWebSocketback()
        }, 3000);
      
    });
  } 

  updateOrderWebSocketback(){
    this.httpService.getRequest("/orders/findAll").subscribe(e => {
        console.log("the order websocket has been updated")
  })
}
  
  callback() {
    this.httpService.getRequest("/supplierOrders/findAll").subscribe(e => {
      console.log("this is meant to trigger a websocket")
    })
  }

  Decline() {
    // get the order
    const order = SupplierPendingOrderData.getSupplierPendingOrderMap().get(
      SupplierPendingOrderData.getIdOfOrderToView()
      
    );
    console.log("teh retrieved order is", order)

    const timestampStrOrder = "timestampStr";
    order[timestampStrOrder] = DateUtils.convertDateFormatToParsable(
      order.timestamp
    );
    order.timestamp = null;
    // create a transient emailVerifiedAtStr
    const emailVerifiedAtStrBuyer = "emailVerifiedAtStr";
    const buyer = order.buyer;
    buyer[emailVerifiedAtStrBuyer] = DateUtils.convertDateFormatToParsable(
      buyer.emailVerifiedAt
    );
    buyer.emailVerifiedAt = null;
    const supplier = order.supplier;
    const emailVerifiedAtStrSupplier = "emailVerifiedAtStr";
    supplier[emailVerifiedAtStrSupplier] = DateUtils.convertDateFormatToParsable(supplier.emailVerifiedAt);
    supplier.emailVerifiedAt = null;
    order.wallet = this.temporaryWallet(buyer);

    console.log(`The Order: ${JSON.stringify(order, null, 2)} `);
   
    
    let OldOrder = SupplierPendingOrderData.getSupplierPendingOrderMap().get(
      SupplierPendingOrderData.getIdOfOrderToView()
    );
    // let supplierNewOrder = SupplierOrder.createInstance();
    let newOrder = Order.createInstance();
    OldOrder.orderStatus = "declined";
    this.objectUtilOrder.objectToInstance(newOrder, OldOrder); 
    console.log("most needed is", OldOrder)

    this.httpService.putRequest("/orders/update", OldOrder).subscribe(e => {
      console.log(`the updated Order is ${e.body, null, 2}`)
      this.declinedStatus = true;
    });
  }  
}


