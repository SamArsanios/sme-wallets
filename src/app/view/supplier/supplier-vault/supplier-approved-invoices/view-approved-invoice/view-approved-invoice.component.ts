import { Component, OnInit } from '@angular/core';
import { ApproveOrderData } from 'src/app/service/order/approve.order.data';
import { Location } from '@angular/common';
import { SupplierApprovedOrdersData } from 'src/app/service/supplier/supplier.approved.order.data';
import { Order } from 'src/app/model/buyer/order/order-model';
import { GenerateApprovedInvoicesPDF } from './generateApprovedInvoicesPDF';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { Invoice } from 'src/app/model/buyer/invoices/invoice-model';
import { DateUtils } from 'src/app/utils/date/date-utils';
import { User } from 'src/app/shared/model/user/user-model';
import { Wallet } from 'src/app/shared/model/wallet/wallet-model';
import { Router } from '@angular/router';
import { ObjectsUtil } from 'src/app/utils/objects/objects';
import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';
import { HttpService } from 'src/app/utils/http/http-service';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
@Component({
  selector: 'app-view-approved-invoice',
  templateUrl: './view-approved-invoice.component.html',
  styleUrls: ['./view-approved-invoice.component.css']
})
export class ViewApprovedInvoiceComponent implements OnInit {
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
  salesUnit: string;
  quantity: number;
  price: number;
  totalBeforeTax: number;

  subTotal: number;
  tax: number;
  shipping: number;
  totalAfterTax: number;

  constructor(
    private router: Router,
    // private objectUtilOrder: ObjectsUtil<Order>,
    private objectUtilOrder: ObjectsUtil<Order>,
    private httpService: HttpService<SupplierOrder>,
    private objectUtil: ObjectsUtil<Invoice>,
    // private objectUtilOrder: ObjectsUtil<Order>
    private location: Location
  ) {

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
      // this.salesUnit = order.order.saleUnit;
      this.price = order.pricePerItem;
      this.totalBeforeTax = order.totalPrice;

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

  generatePdf() {
    const id = SupplierApprovedOrdersData.getIdOfOrderToView();
    const orderToViewPdf = SupplierApprovedOrdersData.getsupplierApprovedOrdersMap().get(id);

    console.log(orderToViewPdf);

    GenerateApprovedInvoicesPDF.generatePdf(orderToViewPdf);
  }

  temporaryWallet(buyer: User): Wallet {
    let wallet = new Wallet(1, "SME", "Feb 21, 2020 5:13:45 AM", buyer);
    // wallet.timestamp = null;
    let timestampStr = "timestampStr";
    wallet[timestampStr] = DateUtils.convertDateFormatToParsable(
      wallet.timestamp
    );
    wallet.timestamp = null;
    wallet["timestampStr"] = buyer["emailVerifiedAtStr"];
    return wallet;
  }
  temporarySponsor() {
    const user = new User(
      2,
      "judie@gmail.com",
      "Feb 13, 2020 6:00:59 AM",
      "rec",
      "+25624534534",
      123,
      "jomai omubbi ",
      "sponsor"
    );

    const emailVerifiedAtStr = "emailVerifiedAtStr";

    user[emailVerifiedAtStr] = user.emailVerifiedAt;

    user[emailVerifiedAtStr] = DateUtils.convertDateFormatToParsable(
      user.emailVerifiedAt
    );

    user.emailVerifiedAt = null;

    // return user;
    console.log("the user is ", user)
    return user;
  }

  Order() {
    const supplierOrders = SupplierApprovedOrdersData.getsupplierApprovedOrdersMap().get(
      SupplierApprovedOrdersData.getIdOfOrderToView())
    const neededOrder = supplierOrders.order;
    console.log("the neeeeded order is", neededOrder)


    // change buyer email verified at string
    const buyerEmailverifiedAtStr = "buyerEmailverifiedAtStr";
    const neededos = neededOrder.buyer
    neededos[buyerEmailverifiedAtStr] = neededOrder.buyer.emailVerifiedAt
    neededos[buyerEmailverifiedAtStr] = DateUtils.convertDateFormatToParsable(neededos.emailVerifiedAt)
    neededos.emailVerifiedAt = null

    //  change supplier email verified at
    const supplierEmailverifiedAtStr = "supplierEmailverifiedAtStr";
    const supplierInfo = neededOrder.supplier
    supplierInfo[supplierEmailverifiedAtStr] = supplierInfo.emailVerifiedAt
    supplierInfo[supplierEmailverifiedAtStr] = DateUtils.convertDateFormatToParsable(supplierInfo.emailVerifiedAt)
    supplierInfo.emailVerifiedAt = null

    // change timestamp for orders

    const timestampStr = "timestampStr";
    const orderInfo = neededOrder;
    orderInfo[timestampStr] = orderInfo.timestamp
    orderInfo[timestampStr] = DateUtils.convertDateFormatToParsable(orderInfo.timestamp)
    orderInfo.timestamp = null

    return neededOrder;
  }

  raiseInvoice(form: NgForm) {


    const supplierOrders = SupplierApprovedOrdersData.getsupplierApprovedOrdersMap().get(
      SupplierApprovedOrdersData.getIdOfOrderToView())
    const neededOrder = supplierOrders.order;

    let invoiceDueDatehtml = (<HTMLInputElement>document.getElementById("dates")).value
    let parsableDueDate = DateUtils.convertDateFormatToParsable(invoiceDueDatehtml)
    console.log("the invoice dueeeee is", parsableDueDate)


    // change buyer email verified at string
    const buyerEmailverifiedAtStr = "emailVerifiedAtStr";
    const neededos = neededOrder.buyer
    neededos[buyerEmailverifiedAtStr] = neededOrder.buyer.emailVerifiedAt
    neededos[buyerEmailverifiedAtStr] = DateUtils.convertDateFormatToParsable(neededos.emailVerifiedAt)
    neededos.emailVerifiedAt = null

    //  change supplier email verified at
    const supplierEmailverifiedAtStr = "emailVerifiedAtStr";
    const supplierInfo = neededOrder.supplier
    supplierInfo[supplierEmailverifiedAtStr] = supplierInfo.emailVerifiedAt
    supplierInfo[supplierEmailverifiedAtStr] = DateUtils.convertDateFormatToParsable(supplierInfo.emailVerifiedAt)
    supplierInfo.emailVerifiedAt = null

    // change timestamp for orders

    const timestampStr = "timestampStr";
    const orderInfo = neededOrder;
    orderInfo[timestampStr] = orderInfo.timestamp
    orderInfo[timestampStr] = DateUtils.convertDateFormatToParsable(orderInfo.timestamp)
    orderInfo.timestamp = null

    // change timestamp for the wallet in order

    const walletTimestampStr = "timestampStr";
    const walletstamps = neededOrder.wallet
    walletstamps[walletTimestampStr] = neededOrder.wallet.timestamp
    walletstamps[walletTimestampStr] = DateUtils.convertDateFormatToParsable(walletstamps.timestamp)
    walletstamps.timestamp = null

    // change email verified at for user in wallet
    const userwalletTimestampStr = "emailVerifiedAtStr";
    const userwalletstamps = neededOrder.wallet.user
    userwalletstamps[userwalletTimestampStr] = neededOrder.wallet.user.emailVerifiedAt
    userwalletstamps[userwalletTimestampStr] = DateUtils.convertDateFormatToParsable(userwalletstamps.emailVerifiedAt)
    userwalletstamps.emailVerifiedAt = null


    console.log("am looking for", neededOrder)


    let theInvoice = {
      "order": neededOrder,
      "sponsor": {
        "id": 3,
        "email": "tintino@gmail.com",
        "emailVerifiedAtStr": "2019-11-21 10:01:09",
        "password": "jothi",
        "phoneNumber": "0781123456",
        "refUserId": 102,
        "name": "Tin Tin",
        "userType": "sponsor"
      },

      "invoiceDueDateStr": parsableDueDate,

      "invoiceStatus": "invoice raised"

    }


    this.httpService.postRequest("/invoices/create", theInvoice).subscribe(e => {
      console.log(`the supplier Order is ${e.body, null, 2}`)
    });

    // this.httpService.putRequest("/orders/update", theInvoice.order).subscribe(e => {
    //   console.log(`the updated Order is ${e.body, null, 2}`)
    // });

    // let newOrder = Order.createInstance();
    // theInvoice.order.orderStatus = "invoiced";
    // this.objectUtilOrder.objectToInstance(newOrder, theInvoice.order);
    // let order = theInvoice.order



    let newOrder = Order.createInstance();
    theInvoice.order.orderStatus = "raised invoices"
    this.objectUtilOrder.objectToInstance(newOrder, theInvoice.order)
    console.log("the order from this is ", theInvoice.order)

    this.httpService.putRequest("/orders/update", theInvoice.order).subscribe(e => {
      console.log(`the updated Order is ${e.body, null, 2}`)
    });


    // this.httpService.putRequest("/orders/update", theInvoice.order).subscribe(e => {
    //   console.log(`the updated Order is ${e.body, null, 2}`)
    // });

  }

  ngOnInit() {

    this.populateOrderView();
    this.dateCtrl = new FormControl("", [Validators.required]);


  }

}


    // let mr = {
    //   "order": {
    //     "conveyanceMethod": "",
    //     "deliveryTerms": "",
    //     "deliveryTime": "",
    //     "department": "",
    //     "id": 3,
    //     "industryType": "Oil and Gas",
    //     "isbnNumber": "",
    //     "itemDescription": "",
    //     "itemName": "",
    //     "orderStatus": "approved",
    //     "paymentTerms": "",
    //     "placeOfDelivery": "",
    //     "saleUnit": "",
    //     // timestamp: null
    //     "timestampStr": "2020-03-20 08:00:05",
    //     "supplier": {
    //       "email": "kab@gmail.com",
    //       // emailVerifiedAt: null
    //       "id": 1,
    //       "name": "kab kabs",
    //       "password": "kab",
    //       "phoneNumber": "+25677657657",
    //       "refUserId": 123,
    //       "supplierEmailverifiedAtStr": "2020-03-20 02:32:35",
    //       "userType": "supplier"
    //     },

    //     "buyer": {
    //       "id": 2,
    //       "email": "ken@gmail.com",
    //       "name": "ken ken",
    //       "buyerEmailverifiedAtStr": "2020-03-20 02:33:26",
    //       // emailVerifiedAt: null, 
    //       "password": "ken",
    //       "phoneNumber": "+25665645646",
    //       "refUserId": 123,
    //       "userType": "buyer"
    //     },
    //     "wallet": {
    //       "id": 1,
    //       "name": "SME",
    //       "walletTimestampStr": "2020-03-20 06:39:24",
    //       // "timestamp": null

    //       "user": {
    //         "email": "kab@gmail.com",
    //         // emailVerifiedAt: null
    //         "id": 1,
    //         "name": "kab kabs",
    //         "password": "kab",
    //         "phoneNumber": "+25677657657",
    //         "refUserId": 123,
    //         "userType": "supplier",
    //         "userwalletTimestampStr": "2020-03-20 02:32:35"
    //       }
    //     }


    //   },
    //   "sponsor": {
    //     "id": 3,
    //     "email": "tintino@gmail.com",
    //     "emailVerifiedAtStr": "2019-11-21 10:01:09",
    //     "password": "jothi",
    //     "phoneNumber": "0781123456",
    //     "refUserId": 102,
    //     "name": "Tin Tin",
    //     "userType": "sponsor"
    //   },
    //   "invoiceDueDateStr": "2020-1-19 7:44:23",
    //   "invoiceStatus": "Pending",
    //   "transactionFeePercentage": 5,
    //   "transactionFees": 10,
    //   "interestRate": 3,
    //   "amountToPay": 15,
    //   "withHoldingAmount": 33,
    //   "withHoldingTaxPercentage": 10,
    //   "notificationStatus": "Approved",
    //   "buyerNotificationStatus": "Accepted",
    //   "declineReason": "Insufficient Funds",
    //   "getPaid": 1,
    //   "authorizeStatus": 1,
    //   "sponsorStatus": 1

    // }
    // let invoice = Invoice.createInstance()
    // create a value for invoice date

    // const invoicedateStr = "invoicedateStr";

    // invoice[invoicedateStr] = invoice.theTimestamp
    // invoice[invoicedateStr] = DateUtils.convertDateFormatToParsable(invoice.theTimestamp)
    // invoice.theTimestamp = null

    // invoice.order = supplierOrder.order;

    //   var inputValue = "2020-03-13 07:39:00"


    // let x = this.toTimestamp('2020-03-13 07:39:00');

    // var inputValue = (<HTMLInputElement>document.getElementById("dates")).value;
    // let invoiceOrderDueDate = DateUtils.convertDateFormatToParsable(inputValue)


    // invoice.order = neededOrder
    // invoice.sponsor = this.temporarySponsor()
    // invoice.invoiceDueDate = x
    // invoice.invoiceStatus = "pending"
    // invoice.invoiceDate = x
    // invoice.transactionFeePercentage = 5;
    // invoice.transactionFees = 788;
    // invoice.withHoldingAmount = 55;
    // invoice.withHoldingTaxPercentage = 7;
    // invoice.interestRate = 9;

    // notificationStatus: string;
    // buyerNotificationStatus: string;
    // declineReason: string;
    // getPaid: Boolean;
    // authorizeStatus: Boolean;
    // sponsorStatus: Boolean;
    // invoice.amountToPay = 234;
    // invoice.notificationStatus = "sdfsdf";
    // invoice.buyerNotificationStatus = "gfgdgf";
    // invoice.declineReason = "dsfgf"
    // invoice.getPaid = true;
    // invoice.authorizeStatus = true;
    // invoice.sponsorStatus = true

    // const newOrder = this.objectUtil.objectToInstance(invoice, );
    // invoice.invoiceDueDate = Date()

    // const invoiceDueDateStr = "invoiceDueDateStr";
    // // const invoiceDueDatestamps = invoice
    // invoice[invoiceDueDateStr] = invoice.invoiceDueDate;
    // // invoice[invoiceDueDateStr] = "2020-03-20 08:00:05"
    // orderInfo[timestampStr] = DateUtils.convertDateFormatToParsable(orderInfo.timestamp)

    // invoice[invoiceDueDateStr] = DateUtils.convertDateFormatToParsable("2012-07-21 12:11:12")
    // invoice.invoiceDueDate = null



    // // let invoice = Invoice.createInstance()
    // let smallInv = new Invoice(0, neededOrder, this.temporarySponsor(), null, invoice[invoiceDueDateStr], "pending", null, null, null, null, null, null, null, null, null, null, null, null, null)

    // console.log("the invoice i want to send is ", smallInv)
    //     let p = {
    //       order:
    //         billingAddress: ""
    // buyer:
    //       buyerEmailverifiedAtStr: "2020-03-20 02:33:26"
    // email: "ken@gmail.com"
    // emailVerifiedAt: null
    // id: 2
    // name: "ken ken"
    // password: "ken"
    // phoneNumber: "+25665645646"
    // refUserId: 123
    // userType: "buyer"
    // __proto__: Object
    // conveyanceMethod: ""
    // deliveryTerms: ""
    // deliveryTime: ""
    // department: ""
    // id: 3
    // industryType: "Oil and Gas"
    // isbnNumber: ""
    // itemDescription: ""
    // itemName: ""
    // orderStatus: "approved"
    // paymentTerms: ""
    // placeOfDelivery: ""
    // saleUnit: ""
    // supplier: { id: 1, email: "kab@gmail.com", emailVerifiedAt: null, password: "kab", phoneNumber: "+25677657657", … }
    // timestamp: null
    // timestampStr: undefined
    // wallet: { id: 1, name: "SME", timestamp: null, user: { … }, walletTimestampStr: "2020-03-20 06:39:24" }
    // __proto__: Object
    // sponsor: User { id: 2, email: "judie@gmail.com", emailVerifiedAt: null, password: "rec", phoneNumber: "+25624534534", … }
    //     sponsorStatus: null
    //     theTimestamp: null
    //     transactionFeePercentage: null
    //     transactionFees: null
    //     withHoldingAmount: null
    //     withHoldingTaxPercentage: null
    //     __proto__: Object
    //     zone - evergreen.js: 2952
    //     "order": {
    //       "id": "3",
    //       "isbnNumber": "",
    //       "itemName": "",
    //       "itemDescription": "",
    //       "billingAddress": "",
    //       "saleUnit": "",

    //       "department": "",
    //       "conveyanceMethod": "",
    //       "deliveryTerms": "",
    //       "paymentTerms": "",
    //       "placeOfDelivery": "",
    //       "deliveryTime": "",
    //       // "orderDueDate": "2020-01-29 13:37:05",
    //       "orderStatus": "approved",
    //       "raiseInvoice": "raise invoice",
    //       "notificationStatus": "the notification status",
    //       "timestampStr": "2020-03-18 10:37:23.161940",
    //       "industryType": "Manufacturing",

    //                                                 "buyer": {
    //         "id": 1,
    //           "name": "Okia Jacob",
    //             "email": "jacob@gmail.com",
    //               // "refUserId": 100,
    //                 // "emailVerifiedAtStr": "2020-03-20 02:33:26",
    //                 //   "password": "passs",
    //                 //     "phoneNumber": "07005677789",
    //                 //       "userType": "buyer"
    //       },

    //       "supplier": {
    //         "id": 2,
    //           "name": "Deb",
    //             "email": "deb@gmail.com",
    //               "refUserId": 105,
    //                 "emailVerifiedAtStr": "2020-02-26 08:27:31.116151",
    //                   "password": "passs",
    //                     "phoneNumber": "0700",
    //                       "userType": "supplier"
    //       },

    //       "wallet": {
    //         "id": 1,
    //           "name": "SME",
    //             "timestampStr": "2020-03-03 10:30:45.603888",
    //               "user": {
    //           "id": 1,
    //             "name": "Okia Jacob",
    //               "email": "jacob@gmail.com",
    //                 "refUserId": 100,
    //                   "emailVerifiedAtStr": "2020-03-03 10:01:49.192690",
    //                     "password": "passs",
    //                       "phoneNumber": "07005677789",
    //                         "userType": "buyer"
    //         }
    //       }
    //     },

    //     "sponsor": {
    //       "id": 3,
    //         "email": "tintino@gmail.com",
    //           "emailVerifiedAtStr": "2019-11-21 10:01:09",
    //             "password": "jothi",
    //               "phoneNumber": "0781123456",
    //                 "refUserId": 102,
    //                   "name": "Tin Tin",
    //                     "userType": "sponsor"
    //     },

    //     "invoiceDueDateStr": "2020-1-19 7:44:23",
    //       "invoiceStatus": "Pending",
    //         "transactionFeePercentage": 5,
    //           "transactionFees": 10,
    //             "interestRate": 3,
    //               "amountToPay": 15,
    //                 "withHoldingAmount": 33,
    //                   "withHoldingTaxPercentage": 10,
    //                     "notificationStatus": "Approved",
    //                       "buyerNotificationStatus": "Accepted",
    //                         "declineReason": "Insufficient Funds",
    //                           "getPaid": 1,
    //                             "authorizeStatus": 1,
    //                               "sponsorStatus": 1

    //   }
    //     this.httpService.postRequest("/invoices/create", smallInv).subscribe(e => {
    // console.log(`the supplier Order is ${e.body, null, 2}`)
    // });
    // const supplierOrder = SupplierApprovedOrdersData.getsupplierApprovedOrdersMap().get(
    //   SupplierApprovedOrdersData.getIdOfOrderToView())

    // console.log("the supplier order returned is ", this.Order())
    // const buyers = this.temporarySponsor
    // let inv = new Invoice(null, this.Order(), this.temporarySponsor(), null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null)
    // console.log("the data i want to send iss", inv)
    // let inv = new Invoice($order: Order, $sponsor: User, $wallet: Wallet, $invoiceDate: string, $invoiceDueDate: string, $invoiceStatus: string, $transactionFeePercentage: number, $transactionFees: number, $interestRate: number, $amountToPay: number, $withHoldingAmount: number, $withHoldingTaxPercentage: number, $notificationStatus: string, $buyerNotificationStatus: string, $declineReason: string, $getPaid: Boolean, $authorizeStatus: Boolean, $sponsorStatus: Boolean, $theTimestamp: string)
    // let = new Order(d: number, buyer: User, supplier: User, isbnNumber: string, itemName: string, itemDescription: string, billingAddress: string, saleUnit: string, quantity: number, department: string, conveyanceMethod: string, deliveryTerms: string, paymentTerms: string, placeOfDelivery: string, deliveryTime: string, orderDueDate: string, timePeriod: string, qrCode: string, wallet: Wallet, orderStatus: string, raiseInvoice: string, notificationStatus: string, timestamp: string, industryType: string)

    // let inv = new Invoice($order: Order, $sponsor: User, $wallet: Wallet, $invoiceDate: string, $invoiceDueDate: string, $invoiceStatus: string, $transactionFeePercentage: number, $transactionFees: number, $interestRate: number, $amountToPay: number, $withHoldingAmount: number, $withHoldingTaxPercentage: number, $notificationStatus: string, $buyerNotificationStatus: string, $declineReason: string, $getPaid: Boolean, $authorizeStatus: Boolean, $sponsorStatus: Boolean, $theTimestamp: string)



    // // change ordertimessatmp string
    // const timestampStr = "timestampStr";
    // supplierOrder.order[timestampStr] = supplierOrder.order.timestamp
    // supplierOrder[timestampStr] = DateUtils.convertDateFormatToParsable(supplierOrder.order.timestamp)
    // supplierOrder.order.timestamp = null

    // // change timestamp string for buyer email verified at

    // const buyerEmailVerifiedStr = "buyerEmailVerifiedStr";
    // supplierOrder.order.buyer[buyerEmailVerifiedStr] = supplierOrder.order.buyer.emailVerifiedAt;
    // supplierOrder.order.buyer[buyerEmailVerifiedStr] = DateUtils.convertDateFormatToParsable(supplierOrder.order.buyer.emailVerifiedAt)
    // supplierOrder.order.buyer.emailVerifiedAt = null

    //   // change timestamp string for supplier email verified at

    //   const supplierEmailVerifiedStr = "supplierEmailVerifiedStr";
    //   supplierOrder.order.supplier[supplierEmailVerifiedStr] = supplierOrder.order.supplier.emailVerifiedAt;
    //   supplierOrder.order.supplier[supplierEmailVerifiedStr] = DateUtils.convertDateFormatToParsable(supplierOrder.order.supplier.emailVerifiedAt)
    //   supplierOrder.order.supplier.emailVerifiedAt = null 

    // convert supplier order timestampstr to timestamp
    // const timestampStrOrder = "timestampStr";
    // supplierOrder[timestampStrOrder] = DateUtils.convertDateFormatToParsable(
    //   supplierOrder.timestamp
    // );
    // supplierOrder.timestamp = null;

    // const timestampStrOrderorder = "timestampStr";
    // let order = supplierOrder.order;
    // // order[timestampStrOrderorder] = DateUtils.convertDateFormatToParsable(
    // //   order.timestamp
    // // );
    // order.timestamp = null;

    // const emailVerifiedAtStrBuyer = "emailVerifiedAtStr";
    // const buyer = supplierOrder.order.buyer;
    // // buyer[emailVerifiedAtStrBuyer] = DateUtils.convertDateFormatToParsable(
    // //   buyer.emailVerifiedAt
    // // );
    // buyer.emailVerifiedAt = null;


    // const supplier = supplierOrder.order.supplier;
    // const emailVerifiedAtStrSupplier = "emailVerifiedAtStr";
    // // supplier[emailVerifiedAtStrSupplier] = DateUtils.convertDateFormatToParsable(supplier.emailVerifiedAt);
    // supplier.emailVerifiedAt = null;

    // supplierOrder.order.wallet = this.temporaryWallet(buyer);

    // const invoice = Invoice.createInstance();
    // invoice.order = supplierOrder.order;
    // var inputValue = (<HTMLInputElement>document.getElementById("dates")).value;
    // let invoiceOrderDueDate = DateUtils.convertDateFormatToParsable(inputValue)



    // invoice.invoiceStatus = "pending";

    // invoice.invoiceDueDate = invoiceOrderDueDate;
    // invoice.sponsor = this.temporarySponsor();
    // invoice.order.timestamp = null;
    // invoice.order["timestampStr"] = "2020-03-31 00:00:00";
    // invoice.invoiceDate = invoice.theTimestamp

    // const timestampStrInvoice = "invoiceDueDateStr";
    // invoice[ timestampStrInvoice] = DateUtils.convertDateFormatToParsable(
    //   invoice.timestamp
    // );
    // supplierOrder.timestamp = null;

    // const newInvoice = this.objectUtilInvoice.objectToInstance(invoice, supplierOrder);

    // console.log("teh shit i want to send is ", newInvoice)

    // this.httpService.postRequest("/invoices/create", mr).subscribe(e => {
    //   console.log(`the supplier Order is ${e.body, null, 2}`)
    // });





  // onSubmit(form: NgForm) {
  //   // get the order
  //   const order = SupplierPendingOrderData.getSupplierPendingOrderMap().get(
  //     SupplierPendingOrderData.getIdOfOrderToView()

  //   );

  //   const timestampStrOrder = "timestampStr";
  //   order[timestampStrOrder] = DateUtils.convertDateFormatToParsable(
  //     order.timestamp
  //   );
  //   order.timestamp = null;
  //   // create a transient emailVerifiedAtStr
  //   const emailVerifiedAtStrBuyer = "emailVerifiedAtStr";
  //   const buyer = order.buyer;
  //   buyer[emailVerifiedAtStrBuyer] = DateUtils.convertDateFormatToParsable(
  //     buyer.emailVerifiedAt
  //   );
  //   buyer.emailVerifiedAt = null;
  //   const supplier = order.supplier;
  //   const emailVerifiedAtStrSupplier = "emailVerifiedAtStr";
  //   supplier[emailVerifiedAtStrSupplier] = DateUtils.convertDateFormatToParsable(supplier.emailVerifiedAt);
  //   supplier.emailVerifiedAt = null;
  //   order.wallet = this.temporaryWallet(buyer);
  //   // order.supplier = supplier;
  //   // order.buyer = buyer;
  //   console.log(`The Order: ${JSON.stringify(order, null, 2)} `);
  //   let supplierOrder = SupplierOrder.createInstance();
  //   supplierOrder = this.objectUtilSupplierOrder.objectToInstance(
  //     supplierOrder,
  //     form.value
  //   );
  //   supplierOrder.id = 0;
  //   supplierOrder.order = order;
  //   console.log(`the orrrrrrrrder: ${JSON.stringify(order, null, 2)} `);
  //   supplierOrder.totalPrice = this.parseStringToNumber(
  //     this.totalBeforeTax.toString()
  //   );
  //   supplierOrder.subTotal = this.parseStringToNumber(this.subTotal.toString());
  //   supplierOrder.finalTotal = this.parseStringToNumber(
  //     this.totalAfterTax.toString()
  //   );
  //   supplierOrder.shippingCharges = this.parseStringToNumber(
  //     this.shipping.toString()
  //   );
  //   supplierOrder.status = "invoiced"
  //   supplierOrder.taxRate = this.parseStringToNumber(this.tax.toString());
  //   supplierOrder.pricePerItem = this.parseStringToNumber(
  //     this.price.toString()
  //   );
  //   console.log(
  //     `The Supplier Order: ${JSON.stringify(supplierOrder, null, 2)} `
  //   );
  //   console.log(`total before tax: ${this.totalBeforeTax} `);
  //   console.log(`total after tax: ${this.totalAfterTax} `);
  //   console.log(`sub tot: ${this.subTotal} `);
  //   console.log(
  //     `The Supplier.Order: ${JSON.stringify(supplierOrder.order, null, 2)} `
  //   );
  //   // (<HTMLInputElement>document.getElementById('totalAfterTax')).value
  //   supplierOrder.subTotal = this.pasreNumber(
  //     Number((<HTMLInputElement>document.getElementById("subtotal")).value)
  //   );
  //   supplierOrder.finalTotal = this.pasreNumber(
  //     Number((<HTMLInputElement>document.getElementById("totalAfterTax")).value)
  //   );
  //   supplierOrder.totalPrice = this.pasreNumber(
  //     Number(
  //       (<HTMLInputElement>document.getElementById("totalBeforeTax")).value
  //     )
  //   );

  //   let OldOrder = SupplierPendingOrderData.getSupplierPendingOrderMap().get(
  //     SupplierPendingOrderData.getIdOfOrderToView()
  //   );
  //   let supplierNewOrder = SupplierOrder.createInstance();
  //   let newOrder = Order.createInstance();
  //   OldOrder.orderStatus = "invoiced";
  //   this.objectUtilOrder.objectToInstance(newOrder, OldOrder);

  //   this.httpService.putRequest("/orders/update", OldOrder).subscribe(e => {
  //     console.log(`the updated Order is ${e.body, null, 2}`)
  //   });

    // this.httpService.postRequest("/supplierOrders/create", mr).subscribe(e => {
    //   console.log(`the supplier Order is ${e.body, null, 2}`)
    // });


  //   this.invoiceStatus = true;
  //   setTimeout(() => {
  //     this.router.navigate(['/supplier/pendingorder-orders']);
  //   }, 2000);

  // }


//   ngOnInit() {

//     this.populateOrderView();
//     this.dateCtrl = new FormControl("", [Validators.required]);


//   }

// }