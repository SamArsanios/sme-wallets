// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-view-all-approved-orders',
//   templateUrl: './view-all-approved-orders.component.html',
//   styleUrls: ['./view-all-approved-orders.component.css']
// })
// export class ViewAllApprovedOrdersComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit, ViewChild } from "@angular/core";
import { ApproveOrderData } from "../../../../service/order/approve.order.data";
import { Location } from "@angular/common";
import { SupplierPendingOrderData } from "src/app/service/order/supplier.pending.order.data";
import { ApproveSupplierQotData } from "src/app/service/supplier/supplier.order.data";
import { HttpService } from "src/app/utils/http/http-service";
import { SupplierOrder } from "src/app/model/supplier/order/SupplierOrder";
import { Router } from "@angular/router";
import { ISupplierPendingOrders } from "src/app/view/supplier/supplier-purchase-orders/supplier-pending-orders/supplier.pending.order.model.interface";
import { PopulateTable } from "src/app/utils/tables/populate.table";
import { ObjectsUtil } from "src/app/utils/objects/objects";
import { WebsocketService } from "src/app/utils/websocket/websocket.service";
import { MatSort, MatPaginator, MatTableDataSource } from "@angular/material";
import { PopulateApproveOrderTable } from "../approve-orders/approve.order.model.interface";
import { ISupplierApproveOrder } from "./supplier.qot.order.model.interface";
import { ApproveOrdersComponent } from "../approve-orders/approve-orders.component";

@Component({
  selector: "app-view-all-approved-orders",
  templateUrl: "./view-all-approved-orders.component.html",
  styleUrls: ["../view-orders/view-orders.component.css"]
})
export class ViewAllApprovedOrdersComponent implements OnInit {
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

  supplierPendingOrdersInfoTable: ISupplierApproveOrder[] = [];
  supplierPendingOrdersInfoTableDataSource = new MatTableDataSource(
    this.supplierPendingOrdersInfoTable
  );

  constructor(
    // private approveOrders: ApproveOrdersComponent,
    private location: Location,
    private httpService: HttpService<SupplierOrder>,
    private objectsUtil: ObjectsUtil<SupplierOrder>,
    private populateTable: PopulateTable<SupplierOrder, ISupplierApproveOrder>,
    private router: Router,
    private webSocketService: WebsocketService
  ) {

    this.populateOrderView();
    this.populateTheTableApprovedOrders();
    const x = ApproveOrdersComponent.returnId()
    console.log(`teh value returned as id is ${x}`)

    
  }

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  private populateTheTableApprovedOrders(): void {
    this.httpService
      .getRequest("/supplierOrders/findAll")
      .subscribe(response => {
        console.log(`Response is ${JSON.stringify(response.body, null, 2)}`);

        this.objectsUtil.dataObjectToArray(response.body).forEach(e => {
          console.log(`the selected id ${localStorage.getItem("viewid")}`)

          ApproveSupplierQotData.addApproveOrder(e);
          ApproveSupplierQotData.addApproveOrderToMap(e, e.id);
          console.log(`Responsessss ${e.finalTotal}`);
          // this.price = e.pricePerItem;
          // this.subTotal = e.subTotal;
          // this.tax = e.taxRate;
          // this.shipping = e.shippingCharges;
          // this.totalBeforeTax = e.pricePerItem;
          // this.totalAfterTax = e.finalTotal;
        });
      });

    // this.supplierPendingOrdersInfoTableDataSource.sort = this.sort;
    // this.supplierPendingOrdersInfoTableDataSource.paginator = this.paginator;
  }

  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }

  private populateOrderView(): void {
    const order = ApproveOrderData.getApproveOrderMap().get(
      ApproveOrderData.getIdOfOrderToView()
    );

    // const quotation = ApproveSupplierQotData.getApproveOrderMap().get(
    //   ApproveSupplierQotData.getIdOfOrderToView()
    // );

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
      this.quantity = order.quantity;
      this.price = 0;

      // this.subTotal = 0;
      // this.tax = 0;
      // this.shipping = 0;
      // this.totalBeforeTax = 0;
      // this.totalAfterTax = 0;

      // this.tax = quotation.taxRate;
      // this.shipping = quotation.shippingCharges;
      // this.subTotal = quotation.subTotal;
      // this.totalBeforeTax = quotation.pricePerItem;
      // this.totalAfterTax = quotation.finalTotal;
    } else {
      // fetch the order direct from the db basing on the ID provided
    }
  }

  // }
  ngOnInit() {
    this.populateOrderView();
    this.populateTheTableApprovedOrders();

    // const theID = this.approveOrders.returnId();
    // console.log(`Once upon a time: ${theID}`);
  }

  // handleViewOrderClick($event): void {
  //   // tslint:disable-next-line:radix
  //   const id = parseInt($event.target.closest("button").id);

  //   this.router
  //     .navigate(["/buyer/orders/view-all-approved-orders"])
  //     .then(() => {

  //       ApproveSupplierQotData.setIdOfOrderToView(id);
  //     });
  // }
}
