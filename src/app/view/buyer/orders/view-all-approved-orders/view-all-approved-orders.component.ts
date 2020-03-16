import { Component, OnInit } from '@angular/core';
import { ApproveOrderData } from 'src/app/service/order/approve.order.data';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { DateUtils } from 'src/app/utils/date/date-utils';
import { User } from 'src/app/shared/model/user/user-model';
import { Wallet } from 'src/app/shared/model/wallet/wallet-model';
import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';
import { ObjectsUtil } from 'src/app/utils/objects/objects';
import { Router } from '@angular/router';
import { Order } from 'src/app/model/buyer/order/order-model';
import { HttpService } from 'src/app/utils/http/http-service';
import { GenerateBUyerApproveOrderPDF } from './generateBuyerApproveOrderPDF';

@Component({
  selector: "app-view-all-approved-orders",
  templateUrl: "./view-all-approved-orders.component.html",
  styleUrls: ["../view-orders/view-orders.component.css"]
})
export class ViewAllApprovedOrdersComponent implements OnInit {
  approveStatus = false
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
    private objectUtilOrder: ObjectsUtil<Order>,
    private objectUtilSupplierOrder: ObjectsUtil<SupplierOrder>,
    private httpService: HttpService<SupplierOrder>,
    private location: Location
  ) {

    this.populateOrderView();


  }

  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }



  private populateOrderView(): void {

    const order = ApproveOrderData.getApproveOrderMap().get(ApproveOrderData.getIdOfOrderToView());

    if (order !== undefined && order != null) {

      this.buyerName = order.order.buyer.name;
      this.buyerPhone = order.order.buyer.phoneNumber;
      this.buyerEmail = order.order.buyer.email;

      this.supplierName = order.order.supplier.name;
      this.supplierPhone = order.order.supplier.phoneNumber;
      this.supplierEmail = order.order.supplier.email;

      this.orderId = `ord-${order.order.id}`;
      this.placeOfDelivery = order.order.placeOfDelivery;
      // this.termsOfPayment = order.order.paymentTerms;
      this.termsOfDelivery = order.order.deliveryTerms;

      this.srNo = order.order.isbnNumber;
      this.itemName = order.order.itemName;
      this.itemDescription = order.order.itemDescription;
      this.salesUnit = order.order.saleUnit;
      this.price = order.pricePerItem;
      this.totalBeforeTax = order.totalPrice;

      this.subTotal = order.subTotal;
      this.tax = order.taxRate;
      this.shipping = order.shippingCharges;
      this.quantity = order.order.quantity;
      this.totalBeforeTax = order.totalPrice;
      this.totalAfterTax = order.finalTotal;

    } else {

    }

  }

  ngOnInit() {

    this.populateOrderView();
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




  views() {
    // get the order

    const supplerOrder = ApproveOrderData.getApproveOrderMap().get(
      ApproveOrderData.getIdOfOrderToView()


    );
    const order = supplerOrder.order;

    const timestampStrOrderorder = "timestampStr";
    order[timestampStrOrderorder] = DateUtils.convertDateFormatToParsable(
      order.timestamp
    );
    order.timestamp = null;

    const emailVerifiedAtStrorderBuyer = "emailVerifiedAtStr";
    const orderbuyer = order.buyer;
    orderbuyer[emailVerifiedAtStrorderBuyer] = DateUtils.convertDateFormatToParsable(
      orderbuyer.emailVerifiedAt
    );
    orderbuyer.emailVerifiedAt = null;

    const ordersupplier = order.supplier;
    const emailVerifiedAtStrSupplierorder = "emailVerifiedAtStr";
    ordersupplier[emailVerifiedAtStrSupplierorder] = DateUtils.convertDateFormatToParsable(ordersupplier.emailVerifiedAt);
    ordersupplier.emailVerifiedAt = null;
    order.wallet = this.temporaryWallet(orderbuyer);

    let OldOrderorder = supplerOrder.order;

    let NewOrders = Order.createInstance();

    OldOrderorder.orderStatus = "approved";
    this.objectUtilOrder.objectToInstance(NewOrders, OldOrderorder);



    this.httpService.putRequest("/orders/update", OldOrderorder).subscribe(e => {
      console.log(`the updated Order is ${JSON.stringify(e.body)}`)
    });
    this.approveStatus = true;
    setTimeout(() => {
      this.router.navigate(['/buyer/orders']);
    }, 2000);
  }

  generatePdf() {
    const id = ApproveOrderData.getIdOfOrderToView();
    const orderToViewPdf = ApproveOrderData.getApproveOrderMap().get(id);

    console.log(orderToViewPdf);

    GenerateBUyerApproveOrderPDF.generatePdf(orderToViewPdf);
  }

}