import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { SupplierInvoicedOrderData } from 'src/app/service/supplier/supplier.invoiced.order.data';
import { Order } from 'src/app/model/buyer/order/order-model';
import { GeneratePurchaseOrderPDF } from 'src/app/view/buyer/orders/pending-orders/view-orders/generatePurchaseOrderPDF';
import { GenerateSupplierInvoicedOrderPDF } from './generateSupplierInvoicedOrderPDF';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { DateUtils } from 'src/app/utils/date/date-utils';
import { ObjectsUtil } from 'src/app/utils/objects/objects';
import { HttpService } from 'src/app/utils/http/http-service';
import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';

@Component({
  selector: 'app-view-supplier-invoiced-orders',
  templateUrl: './view-supplier-invoiced-orders.component.html',
  styleUrls: ['./view-supplier-invoiced-orders.component.css']
})
export class ViewSupplierInvoicedOrdersComponent implements OnInit {
  invoiceStatus;
  date = new Date();
  dateCtrl: FormControl;
  buyerName: string;
  buyerPhone: string;
  buyerEmail: string;
  // date: string;
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
  salesUnit: number;
  quantity: number;
  price: number;
  totalBeforeTax: number;

  subTotal: number;
  tax: number;
  shipping: number;
  totalAfterTax: number;

  constructor(private location: Location,
    private objectUtilOrder: ObjectsUtil<Order>,
    private httpService: HttpService<SupplierOrder>,
    private objectUtil: ObjectsUtil<SupplierOrder>,
    ) {

    this.populateOrderView();

}

  private populateOrderView(): void {

    const order = SupplierInvoicedOrderData.getSupplierInvoicedOrderMap().get(SupplierInvoicedOrderData.getIdOfOrderToView());
    console.log("the order", order)

    if ( order !== undefined && order != null ) {
      // this.date = order.order.timestamp;
      // console.log("the date is ", this.date)
      this.orderNumber = order.order.id;
      this.buyerName = order.order.buyer.name;
      this.buyerPhone = order.order.buyer.phoneNumber;
      this.buyerEmail = order.order.buyer.email;

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
      this.price = order.pricePerItem;
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
    this.dateCtrl = new FormControl("", [Validators.required]);

    this.populateOrderView();

  }

  generatePdf() {
    const id = SupplierInvoicedOrderData.getIdOfOrderToView();
    const orderToViewPdf = SupplierInvoicedOrderData.getSupplierInvoicedOrderMap().get(id);

    console.log(orderToViewPdf);

    GenerateSupplierInvoicedOrderPDF.generatePdf(orderToViewPdf);
  }


  raiseInvoice(form: NgForm, updateInvoicesWebSocketback) {


    const supplierOrders = SupplierInvoicedOrderData.getSupplierInvoicedOrderMap().get(
      SupplierInvoicedOrderData.getIdOfOrderToView())
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

      "invoiceStatus": "pending"

    }


    this.httpService.postRequest("/invoices/create", theInvoice, ).subscribe(e => {
      console.log(`the raised invoice  is ${e.body, null, 2}`)
      setTimeout(() => {
        this.updateInvoicesWebSocketback()
        }, 6000);
      
    });


    let newOrder = Order.createInstance();
    theInvoice.order.orderStatus = "raised invoices"
    this.objectUtilOrder.objectToInstance(newOrder, theInvoice.order)
    console.log("the order from this is ", theInvoice.order)

    this.httpService.putRequest("/orders/update", theInvoice.order).subscribe(e => {
      console.log(`the updated Order is ${e.body, null, 2}`)
      this.invoiceStatus = true;

      setTimeout(() => {
        this.updateSupplierOrderWebSocketback()
        }, 3000);
    });
    

  }


  updateSupplierOrderWebSocketback(){
    this.httpService.getRequest("/orders/findAll").subscribe(e => {
      console.log("the order websocket has been updated")
    })
  }


  updateInvoicesWebSocketback(){
    this.httpService.getRequest("/invoices/findAll").subscribe(e => {
      console.log("the Supplier order websocket has been updated")
    })
  }
}

