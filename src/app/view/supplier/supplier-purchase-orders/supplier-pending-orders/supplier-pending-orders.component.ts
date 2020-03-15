// import { Component, ViewChild, OnInit } from "@angular/core";
// import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
// import { HttpService } from "../../../../utils/http/http-service";
// import { Order } from "../../../../model/buyer/order/order-model";
// import { ObjectsUtil } from "../../../../utils/objects/objects";
// import {
//   ISupplierPendingOrders,
//   PopulateSupplierPendingOrderTable
// } from "./supplier.pending.order.model.interface";
// import { PopulateTable } from "../../../../utils/tables/populate.table";
// import { SupplierPendingOrderData } from "../../../../service/order/supplier.pending.order.data";
// import { Router } from "@angular/router";

// @Component({
//   selector: "app-supplier-pending-orders",
//   templateUrl: "./supplier-pending-orders.component.html",
//   styleUrls: ["./supplier-pending-orders.component.css"]
// })
// export class SupplierPendingOrdersComponent implements OnInit {
//   supplierPendingOrdersInfoTable: ISupplierPendingOrders[] = [];
//   supplierPendingOrdersInfoTableDataSource = new MatTableDataSource(
//     this.supplierPendingOrdersInfoTable
//   );

//   displayedColumns: string[] =
//     PopulateSupplierPendingOrderTable.displayedColumns;

//   // tslint:disable-next-line:max-line-length
//   constructor(
//     private httpService: HttpService<Order>,
//     private objectsUtil: ObjectsUtil<Order>,
//     private populateTable: PopulateTable<Order, ISupplierPendingOrders>,
//     private router: Router
//   ) {}

//   @ViewChild(MatSort, { static: true }) sort: MatSort;
//   @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

//   private populateTheTable(): void {
//     this.httpService.getRequest("/orders/findAll").subscribe(response => {
//       const result = this.populateTable.populateTable(
//         this.objectsUtil.dataObjectToArray(response.body),
//         this.supplierPendingOrdersInfoTable,
//         this.supplierPendingOrdersInfoTableDataSource,
//         PopulateSupplierPendingOrderTable.populateTableOnInit
//       );

//       this.supplierPendingOrdersInfoTableDataSource = new MatTableDataSource<
//         ISupplierPendingOrders
//       >(result);

//       this.objectsUtil.dataObjectToArray(response.body).forEach(e => {
//         SupplierPendingOrderData.addSupplierPendingOrder(e);
//         SupplierPendingOrderData.addSupplierPendingOrderToMap(e, e.id);
//       });
//     });

//     this.supplierPendingOrdersInfoTableDataSource.sort = this.sort;
//     this.supplierPendingOrdersInfoTableDataSource.paginator = this.paginator;
//   }

//   ngOnInit() {
//     this.populateTheTable();
//   }

//   handleViewOrderClick($event): void {
//     // tslint:disable-next-line:radix
//     const id = parseInt($event.target.closest("button").id);

//     this.router
//       .navigate(["/supplier/supplier-purchase-orders/supplier-view-orders"])
//       .then(e => {
//         console.log(
//           `the order to view again: ${JSON.stringify(
//             SupplierPendingOrderData.getSupplierPendingOrderMap().get(id),
//             null,
//             2
//           )} `
//         );
//         SupplierPendingOrderData.setIdOfOrderToView(id);
//       });
//   }

//   applyFilter(filterValue: string) {
//     this.supplierPendingOrdersInfoTableDataSource.filter = filterValue
//       .trim()
//       .toLowerCase();
//   }
// }

import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { HttpService } from '../../../../utils/http/http-service';
import { Order } from '../../../../model/buyer/order/order-model';
import { ObjectsUtil } from '../../../../utils/objects/objects';
// import { ISupplierPendingOrders, PopulateSupplierPendingOrderTable } from './all.order.model.interface';
import { PopulateTable } from '../../../../utils/tables/populate.table';
// import {  SupplierPendingOrderData } from '../../../../service/order/all.order.data';
import { Router } from '@angular/router';
import { SupplierPendingOrderData } from 'src/app/service/order/supplier.pending.order.data';
import { ISupplierPendingOrders, PopulateSupplierPendingOrderTable } from './supplier.pending.order.model.interface';

@Component({
  selector: "app-supplier-pending-orders",
  templateUrl: "./supplier-pending-orders.component.html",
  styleUrls: ["./supplier-pending-orders.component.css"]
})
export class SupplierPendingOrdersComponent implements OnInit {
  receivers: Array<Order> = new Array<Order>();
  numberOfOrders;
  allOrdersInfoTable: ISupplierPendingOrders[] = [];
 supplierPendingOrdersInfoTableDataSource = new MatTableDataSource(this.allOrdersInfoTable);

  displayedColumns: string[] = PopulateSupplierPendingOrderTable.displayedColumns;

  // tslint:disable-next-line:max-line-length
  constructor( private httpService: HttpService<Order>,
     private objectsUtil: ObjectsUtil<Order>,
      private populateTable: PopulateTable<Order, ISupplierPendingOrders>, private router: Router) { }

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  private populateTheTable(): void {

    this.httpService.getRequest('/orders/findAll').subscribe(response => {

      this.objectsUtil.dataObjectToArray(response.body).map(theOder => {
        console.log(`the pending orders are ${JSON.stringify(theOder)}`)

        if (theOder.orderStatus === "pending") {

          this.receivers.push(theOder);
           SupplierPendingOrderData.addSupplierPendingOrder(theOder)
           SupplierPendingOrderData.addSupplierPendingOrderToMap(theOder, theOder.id)
          // alert(`these are all the orders made by id1 ${this.receivers}`)

        }
      });




      const result = this.populateTable.populateTable(this.objectsUtil.dataObjectToArray(this.receivers), this.allOrdersInfoTable,
        this.supplierPendingOrdersInfoTableDataSource, PopulateSupplierPendingOrderTable.populateTableOnInit);

      this.supplierPendingOrdersInfoTableDataSource = new MatTableDataSource<ISupplierPendingOrders>(result);

      this.objectsUtil.dataObjectToArray(this.receivers).forEach(e => {

         SupplierPendingOrderData.addSupplierPendingOrder(e);
         SupplierPendingOrderData.addSupplierPendingOrderToMap(e, e.id);

      });

    });

    this.supplierPendingOrdersInfoTableDataSource.sort = this.sort;
    this.supplierPendingOrdersInfoTableDataSource.paginator = this.paginator;

  }

  ngOnInit() {
    this.populateTheTable();
  }

  handleViewOrderClick($event): void {
        // tslint:disable-next-line:radix
        const id = parseInt($event.target.closest("button").id);
    
        this.router
          .navigate(["/supplier/supplier-purchase-orders/supplier-view-orders"])
          .then(e => {
            console.log(
              `the order to view again: ${JSON.stringify(
                SupplierPendingOrderData.getSupplierPendingOrderMap().get(id),
                null,
                2
              )} `
            );
            SupplierPendingOrderData.setIdOfOrderToView(id);
          });
      } 

  applyFilter(filterValue: string) {
    this.supplierPendingOrdersInfoTableDataSource.filter = filterValue.trim().toLowerCase();
  }
}

