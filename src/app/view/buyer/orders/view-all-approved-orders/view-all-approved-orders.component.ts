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
    private objectUtilOrder: ObjectsUtil<SupplierOrder>,
    private objectUtilSupplierOrder: ObjectsUtil<SupplierOrder>,
    private httpService: HttpService<SupplierOrder>,
    private location: Location
  ) {

    this.populateOrderView();


  }

  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }

  gees() {
    console.log(`you have clicked meman`)
  }

  private populateOrderView(): void {
    //     const order = SupplierAllSupplierOrderData.getsupplierAllSupplierSupplierOrderMap().get(SupplierAllSupplierOrderData.getIdOfSupplierOrderToView());


    const order = ApproveOrderData.getApproveOrderMap().get(ApproveOrderData.getIdOfOrderToView());

    if (order !== undefined && order != null) {

      this.buyerName = order.order.buyer.name;
      this.buyerPhone = order.order.buyer.phoneNumber;
      this.buyerEmail = order.order.buyer.email;

      this.supplierName = order.order.supplier.name;
      this.supplierPhone = order.order.supplier.phoneNumber;
      this.supplierEmail = order.order.supplier.email;

      this.orderId = `ord-${order.id}`;
      this.placeOfDelivery = order.order.placeOfDelivery;
      // this.termsOfPayment = order.order.paymentTerms;
      this.termsOfDelivery = order.order.deliveryTerms;

      this.srNo = `ord-${order.id}`;
      this.itemName = order.order.itemName;
      this.itemDescription = order.order.itemDescription;
      this.salesUnit = order.order.saleUnit;
      this.price = order.pricePerItem;
      this.totalBeforeTax = order.totalPrice;

      this.subTotal = order.subTotal;
      this.tax = order.taxRate;
      this.shipping = order.shippingCharges;
      this.quantity = order.order.quantity;
      this.totalBeforeTax =order.totalPrice;
      this.totalAfterTax = order.finalTotal;

    } else {

    }

  }

  ngOnInit() {

    this.populateOrderView();
    console.log(`you have clicked meman`)


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

    const timestampStrSupplierOrder = "timestampStr";
    supplerOrder[timestampStrSupplierOrder] = DateUtils.convertDateFormatToParsable(
      supplerOrder.timestamp
    );
    supplerOrder.timestamp = null;

    const timestampStrOrder = "timestampStr";
    supplerOrder.order[timestampStrOrder] = DateUtils.convertDateFormatToParsable(
      supplerOrder.order.timestamp
    );
    supplerOrder.order.timestamp = null;
    supplerOrder.order["orderStatus"] = "approved"


    const emailVerifiedAtStrBuyer = "emailVerifiedAtStr";
    const buyer = supplerOrder.order.buyer;
    buyer[emailVerifiedAtStrBuyer] = DateUtils.convertDateFormatToParsable(
      buyer.emailVerifiedAt
    );
    buyer.emailVerifiedAt = null;
    const supplier = supplerOrder.order.supplier;
    const emailVerifiedAtStrSupplier = "emailVerifiedAtStr";
    supplier[emailVerifiedAtStrSupplier] = DateUtils.convertDateFormatToParsable(supplier.emailVerifiedAt);
    supplier.emailVerifiedAt = null;
    supplerOrder.order.wallet = this.temporaryWallet(buyer);
    
    let OldOrder = ApproveOrderData.getApproveOrderMap().get(
      ApproveOrderData.getIdOfOrderToView())

    let supplierNewOrders = SupplierOrder.createInstance();
    // let newOrder = Order.createInstance();
    OldOrder.status = "approved";
    console.log("the old order is  ", JSON.stringify(OldOrder))
    this.objectUtilOrder.objectToInstance(supplierNewOrders, OldOrder); 

    
    // this.httpService.putRequest("/supplierOrders/update", OldOrder).subscribe(e => {
    //   console.log(`the updated Order is ${JSON.stringify(e.body)}`)
    // });

      
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