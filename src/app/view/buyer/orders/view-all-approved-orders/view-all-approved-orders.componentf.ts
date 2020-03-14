// import { Component, OnInit } from '@angular/core';
// import { ApproveOrderData } from 'src/app/service/order/approve.order.data';
// import { Location } from '@angular/common';
// import { NgForm } from '@angular/forms';
// import { DateUtils } from 'src/app/utils/date/date-utils';
// import { User } from 'src/app/shared/model/user/user-model';
// import { Wallet } from 'src/app/shared/model/wallet/wallet-model';
// import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';
// import { ObjectsUtil } from 'src/app/utils/objects/objects';
// import { Router } from '@angular/router';
// import { Order } from 'src/app/model/buyer/order/order-model';
// import { HttpService } from 'src/app/utils/http/http-service';
// import { SupplierPendingOrderData } from 'src/app/service/order/supplier.pending.order.data';

// @Component({
//     selector: "app-view-all-approved-orders",
//     templateUrl: "./view-all-approved-orders.component.html",
//     styleUrls: ["../view-orders/view-orders.component.css"]
//   })
//   export class ViewAllApprovedOrdersComponent implements OnInit {
//   buyerName: string;
//   buyerPhone: string;
//   buyerEmail: string;

//   supplierName: string;
//   supplierPhone: string;
//   supplierEmail: string;

//   orderId: string;
//   placeOfDelivery: string;
//   termsOfPayment: string;
//   termsOfDelivery: string;

//   srNo: string;
//   itemName: string;
//   itemDescription: string;
//   salesUnit: string;
//   quantity: number;
//   price: number;
//   totalBeforeTax: number;

//   subTotal: number;
//   tax: number;
//   shipping: number;
//   totalAfterTax: number;

//   constructor(
//       private router: Router,
//       private objectUtilOrder: ObjectsUtil<Order>,
//       private objectUtilSupplierOrder: ObjectsUtil<SupplierOrder>,
//       private httpService: HttpService<SupplierOrder>,
//       private location: Location
//     ) {

//       this.populateOrderView();


// }

// cancel() {
//   this.location.back(); // <-- go back to previous location on cancel
// }

//   private populateOrderView(): void {

//     const order = ApproveOrderData.getApproveOrderMap().get(ApproveOrderData.getIdOfOrderToView());

//     if ( order !== undefined && order != null ) {

//       this.buyerName = order.order.buyer.name;
//       this.buyerPhone = order.order.buyer.phoneNumber;
//       this.buyerEmail = order.order.buyer.email;

//       this.supplierName = order.order.supplier.name;
//       this.supplierPhone = order.order.supplier.phoneNumber;
//       this.supplierEmail = order.order.supplier.email;

//       this.orderId = `ord-${order.id}`;
//       this.placeOfDelivery = order.order.placeOfDelivery;
//       this.termsOfPayment = order.order.paymentTerms;
//       this.termsOfDelivery = order.order.deliveryTerms;

//       this.srNo = `ord-${order.id}`;
//       this.itemName = order.order.itemName;
//       this.itemDescription = order.order.itemDescription;
//       this.salesUnit = order.order.saleUnit;
//       this.price = order.pricePerItem;
//       this.totalBeforeTax = order.totalPrice;

//       this.subTotal = order.subTotal;
//       this.tax = order.taxRate;
//       this.shipping = order.shippingCharges;
//       this.quantity = order.order.quantity;
//       this.totalBeforeTax = 0;
//       this.totalAfterTax = order.finalTotal;

//     } else {

//     }

//   }

//   ngOnInit() {

//     this.populateOrderView();

//   }

//   temporaryWallet(buyer: User): Wallet {
//     let wallet = new Wallet(1, "SME", "Feb 21, 2020 5:13:45 AM", buyer);
//     wallet.timestamp = null;
//     let timestampStr = "timestampStr";
//     wallet[timestampStr] = DateUtils.convertDateFormatToParsable(
//       wallet.timestamp
//     );
//     wallet.timestamp = null;
//     wallet["timestampStr"] = buyer["emailVerifiedAtStr"];
//     return wallet;
//   }

 
//     onSubmit(form: NgForm) {
//         // get the order
//         const order = SupplierPendingOrderData.getSupplierPendingOrderMap().get(
//           SupplierPendingOrderData.getIdOfOrderToView()
          
//         );
    
//         const timestampStrOrder = "timestampStr";
//         order[timestampStrOrder] = DateUtils.convertDateFormatToParsable(
//           order.timestamp
//         );
//         order.timestamp = null;
//         // create a transient emailVerifiedAtStr
//         const emailVerifiedAtStrBuyer = "emailVerifiedAtStr";
//         const buyer = order.buyer;
//         buyer[emailVerifiedAtStrBuyer] = DateUtils.convertDateFormatToParsable(
//           buyer.emailVerifiedAt
//         );
//         buyer.emailVerifiedAt = null;
//         const supplier = order.supplier;
//         const emailVerifiedAtStrSupplier = "emailVerifiedAtStr";
//         supplier[emailVerifiedAtStrSupplier] = DateUtils.convertDateFormatToParsable(supplier.emailVerifiedAt);
//         supplier.emailVerifiedAt = null;
//         order.wallet = this.temporaryWallet(buyer);
//         // order.supplier = supplier;
//         // order.buyer = buyer;
//         console.log(`The Order: ${JSON.stringify(order, null, 2)} `);
//         let supplierOrder = SupplierOrder.createInstance();
//         supplierOrder = this.objectUtilSupplierOrder.objectToInstance(
//           supplierOrder,
//           form.value
//         );
//         supplierOrder.id = 0;
//         supplierOrder.order = order;
//         // console.log(`the orrrrrrrrder: ${JSON.stringify(order.wallet, null, 2)} `);
//         // supplierOrder.totalPrice = this.parseStringToNumber(
//         //   this.totalBeforeTax.toString()
//         // );
//         // supplierOrder.subTotal = this.parseStringToNumber(this.subTotal.toString());
//         // supplierOrder.finalTotal = this.parseStringToNumber(
//         //   this.totalAfterTax.toString()
//         // );
//         // supplierOrder.shippingCharges = this.parseStringToNumber(
//         //   this.shipping.toString()
//         // );
//         supplierOrder.status = "invoiced"
//         // supplierOrder.taxRate = this.parseStringToNumber(this.tax.toString());
//         // supplierOrder.pricePerItem = this.parseStringToNumber(
//         //   this.price.toString()
//         // );
//         console.log(
//           `The Supplier Order: ${JSON.stringify(supplierOrder, null, 2)} `
//         );
//         console.log(`total before tax: ${this.totalBeforeTax} `);
//         console.log(`total after tax: ${this.totalAfterTax} `);
//         console.log(`sub tot: ${this.subTotal} `);
//         console.log(
//           `The Supplier.Order: ${JSON.stringify(supplierOrder.order, null, 2)} `
//         );
//         // (<HTMLInputElement>document.getElementById('totalAfterTax')).value
//         // supplierOrder.subTotal = this.pasreNumber(
//         //   Number((<HTMLInputElement>document.getElementById("subtotal")).value)
//         // );
//         // supplierOrder.finalTotal = this.pasreNumber(
//         //   Number((<HTMLInputElement>document.getElementById("totalAfterTax")).value)
//         // );
//         // supplierOrder.totalPrice = this.pasreNumber(
//         //   Number(
//         //     (<HTMLInputElement>document.getElementById("totalBeforeTax")).value
//         //   )
//         // );
        
//         let OldOrder = SupplierPendingOrderData.getSupplierPendingOrderMap().get(
//           SupplierPendingOrderData.getIdOfOrderToView()
//         );
        
//         let newOrder = Order.createInstance();
//         OldOrder.orderStatus = "approved invoices";
//         this.objectUtilOrder.objectToInstance(newOrder, OldOrder);    
//         this.httpService.putRequest("/orders/update", OldOrder).subscribe(e => {
//             console.log(`the updated Order is ${e.body, null, 2}`)
//           });
    
//         //   this.invoiceStatus = true;
//         //   setTimeout(() => {
//         //     this.router.navigate(['/supplier/pendingorder-orders']);
//         //   }, 2000);
    
//       }

// }