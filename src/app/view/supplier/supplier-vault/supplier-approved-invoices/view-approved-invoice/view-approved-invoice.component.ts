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
  public data
  invoiceStatus = false;
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
  invoiceDueDate: string;

  constructor(
    private router: Router,
    private objectUtilOrder: ObjectsUtil<Order>,
    private httpService: HttpService<SupplierOrder>,
    private objectUtil: ObjectsUtil<SupplierOrder>,
    private location: Location
  ) {

    this.populateOrderView();

  }

  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }

  private populateOrderView(): void {
    const order = SupplierApprovedOrdersData.getApproveOrderMap().get(SupplierApprovedOrdersData.getIdOfOrderToView());
    if (order.invoiceStatus == "approved") {
      console.log("the order is aproved therefore the get  paid button should be there")
    }

    this.httpService.getRequest('/supplierOrders/findAll').subscribe(response => {

      this.objectUtil.dataObjectToArray(response.body).map(theOder => {
        if (theOder.order.id === order.order.id) {
          console.log("the suuuups order is", theOder)
          this.price = theOder.pricePerItem;
          this.shipping = theOder.shippingCharges;
          this.subTotal = theOder.subTotal;
          this.tax = theOder.taxRate;
          this.totalAfterTax = theOder.finalTotal;
        }
      });
    })


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
      // this.invoiceDueDate = order.invoiceDueDate;

      this.srNo = order.order.isbnNumber;
      this.itemName = order.order.itemName;
      this.itemDescription = order.order.itemDescription;
      this.salesUnit = order.order.saleUnit;
      this.quantity = order.order.quantity;


    } else {

    }

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
    const supplierOrders = SupplierApprovedOrdersData.getApproveOrderMap().get(
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


    const supplierOrders = SupplierApprovedOrdersData.getApproveOrderMap().get(
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


    let newOrder = Order.createInstance();
    theInvoice.order.orderStatus = "raised invoices"
    this.objectUtilOrder.objectToInstance(newOrder, theInvoice.order)
    console.log("the order from this is ", theInvoice.order)

    this.httpService.putRequest("/orders/update", theInvoice.order).subscribe(e => {
      console.log(`the updated Order is ${e.body, null, 2}`)
      this.invoiceStatus = true;
    });


  }

  ngOnInit() {

    this.populateOrderView();
    this.dateCtrl = new FormControl("", [Validators.required]);
  }

  generatePdf() {
    const invoices = SupplierApprovedOrdersData.getApproveOrderMap().get(SupplierApprovedOrdersData.getIdOfOrderToView())

    const id = SupplierApprovedOrdersData.getIdOfOrderToView();
    const orderToViewPdf = SupplierApprovedOrdersData.getApproveOrderMap().get(id);
    console.log("the data i want to view", orderToViewPdf)
    console.log(orderToViewPdf);

    this.httpService.getRequest('/supplierOrders/findAll').subscribe(response => {

      this.objectUtil.dataObjectToArray(response.body).map(theOder => {
        if (theOder.order.id === invoices.order.id) {
          this.data = theOder
          this.data.id = invoices.id

          console.log("the generated supplierOrder of the invoice is", theOder)
          
        }
      });
    })

    GenerateApprovedInvoicesPDF.generatePdf(this.data);
  }

}
