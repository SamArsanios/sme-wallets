// import { Component, OnInit, ViewChild } from "@angular/core";
// import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";

// export interface ISupplierPendingOrders {
//   orderNo: string;
//   orderDate: any;
//   orderDueDate: any;
//   senderName: string;
//   orderStatus: string;

// }

// const ELEMENT_DATA: ISupplierPendingOrders[] = [
//   {
//     orderNo: "ORD-1",
//     orderDate: "12 - 12 - 2011",
//     orderDueDate: "1 - 1 - 2012",
//     senderName: "Comboni",
//     orderStatus: "Processing"
//   },
//   {
//     orderNo: "ORD-2",
//     orderDate: "10 - 1 - 2014",
//     orderDueDate: "2 - 2 - 2014",
//     senderName: "Comboni",
//     orderStatus: "Approved"
//   },
//   {
//     orderNo: "ORD-3",
//     orderDate: "12 - 12 - 2019",
//     orderDueDate: "20 - 12 - 2019",
//     senderName: "Comboni",
//     orderStatus: "Approved"
//   },
//   {
//     orderNo: "ORD-4",
//     orderDate: "10 - 11 - 1997",
//     orderDueDate: "10 - 11 - 1997",
//     senderName: "Comboni",
//     orderStatus: "Processing"
//   },
//   {
//     orderNo: "ORD-5",
//     orderDate: "10 - 5 - 2014",
//     orderDueDate: "15 - 5 - 2014",
//     senderName: "Comboni",
//     orderStatus: "Approved"
//   },
//   {
//     orderNo: "ORD-6",
//     orderDate: "10 - 12 - 2015",
//     orderDueDate: "11 - 12 - 2015",
//     senderName: "Comboni",
//     orderStatus: "Processing"
//   },
//   {
//     orderNo: "ORD-7",
//     orderDate: "1 - 5 - 2016",
//     orderDueDate: "1 - 6 - 2016",
//     senderName: "Comboni",
//     orderStatus: "Approved"
//   },
//   {
//     orderNo: "ORD-8",
//     orderDate: "1 - 2 - 1996",
//     orderDueDate: "10 - 2 - 1996",
//     senderName: "Comboni",
//     orderStatus: "Processing"
//   },
//   {
//     orderNo: "ORD-9",
//     orderDate: "10 - 12 - 1999",
//     orderDueDate: "15 - 12 - 1999",
//     senderName: "Comboni",
//     orderStatus: "Processing"
//   },
//   {
//     orderNo: "ORD-10",
//     orderDate: "10 - 1 - 2018",
//     orderDueDate: "1 - 1 - 2018",
//     senderName: "Comboni",
//     orderStatus: "Approved"
//   }
// ];

// @Component({
//   selector: "app-supplier-pending-orders",
//   templateUrl: "./supplier-pending-orders.component.html",
//   styleUrls: ["./supplier-pending-orders.component.css"]
// })
// export class SupplierPendingOrdersComponent implements OnInit {
//   constructor() {}

//   displayedColumns: string[] = [
//     "orderNo",
//     "orderDate",
//     "orderDueDate",
//     "senderName",
//     "orderStatus",
//     "action"
//   ];

//   dataSource = new MatTableDataSource(ELEMENT_DATA);
//   @ViewChild(MatSort, { static: true }) sort: MatSort;
//   @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

//   ngOnInit() {
//     this.dataSource.sort = this.sort;
//     this.dataSource.paginator = this.paginator;
//   }

//   applyFilter(filterValue: string) {
//     this.dataSource.filter = filterValue.trim().toLowerCase();
//   }
// }

import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import {HttpService} from '../../../../utils/http/http-service';
import {Order} from '../../../../model/buyer/order/order-model';
import {ObjectsUtil} from '../../../../utils/objects/objects';
import {ISupplierPendingOrders, PopulateSupplierPendingOrderTable} from './supplier.pending.order.model.interface';
import {PopulateTable} from '../../../../utils/tables/populate.table';
import {SupplierPendingOrderData} from '../../../../service/order/supplier.pending.order.data';
import {Router} from '@angular/router';

@Component({
  selector: "app-supplier-pending-orders",
  templateUrl: "./supplier-pending-orders.component.html",
  styleUrls: ["./supplier-pending-orders.component.css"]
})
export class SupplierPendingOrdersComponent implements OnInit {
  

  supplierPendingOrdersInfoTable: ISupplierPendingOrders[] = [];
  supplierPendingOrdersInfoTableDataSource = new MatTableDataSource(this.supplierPendingOrdersInfoTable);

  displayedColumns: string[] = PopulateSupplierPendingOrderTable.displayedColumns;

  // tslint:disable-next-line:max-line-length
  constructor(private httpService: HttpService<Order>, private objectsUtil: ObjectsUtil<Order>, private populateTable: PopulateTable<Order, ISupplierPendingOrders>, private router: Router) {}

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  private populateTheTable(): void {

    this.httpService.getRequest('/orders/findAll').subscribe(response => {

      const result = this.populateTable.populateTable(this.objectsUtil.dataObjectToArray(response.body), this.supplierPendingOrdersInfoTable,
        this.supplierPendingOrdersInfoTableDataSource, PopulateSupplierPendingOrderTable.populateTableOnInit);

      this.supplierPendingOrdersInfoTableDataSource = new MatTableDataSource<ISupplierPendingOrders>(result);

      this.objectsUtil.dataObjectToArray(response.body).forEach(e => {

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
    const id = parseInt($event.target.closest('button').id);

    this.router.navigate(['/supplier/view-supplier-pendingorder-orders']).then(e => {
      console.log(`the order to view again: ${JSON.stringify(SupplierPendingOrderData.getSupplierPendingOrderMap().get(id), null, 2)} `);
      SupplierPendingOrderData.setIdOfOrderToView(id);
    });

    

  }

  applyFilter(filterValue: string) {
    this.supplierPendingOrdersInfoTableDataSource.filter = filterValue.trim().toLowerCase();
  }
}
