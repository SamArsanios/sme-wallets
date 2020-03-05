// import { Component, OnInit, ViewChild } from "@angular/core";
// import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
// import { Router } from '@angular/router';
// import { AllOrderData } from 'src/app/service/order/all.order.data';

// export interface IAllInvoices {
//   invoiceNo: string;
//   invoiceDate: any;
//   invoiceDueDate: any;
//   supplierName: string;
//   invoiceStatus: string;
//   // action:;
// }

// const ELEMENT_DATA: IAllInvoices[] = [
//   {
//     invoiceNo: "INV_1",
//     invoiceDate: "10/12/2019",
//     invoiceDueDate: "20/12/2019",
//     supplierName: "Samson Kibrom",
//     invoiceStatus: "Approved"
//   },
//   {
//     invoiceNo: "INV_2",
//     invoiceDate: "1/1/2018",
//     invoiceDueDate: "2/2/2019",
//     supplierName: "Keren Jacob",
//     invoiceStatus: "Approved"
//   },
//   {
//     invoiceNo: "INV_3",
//     invoiceDate: "11/12/2017",
//     invoiceDueDate: "13/12/2017",
//     supplierName: "Senior",
//     invoiceStatus: "Approved"
//   }
// ];

// @Component({
//   selector: "app-all-invoices",
//   templateUrl: "./all-invoices.component.html",
//   styleUrls: ["./all-invoices.component.css"]
// })
// export class AllInvoicesComponent implements OnInit {
//   constructor(private router: Router) {}

//   displayedColumns: string[] = [
//     "invoiceNo",
//     "invoiceDate",
//     "invoiceDueDate",
//     "supplierName",
//     "invoiceStatus",
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

//   handleViewOrderClick($event): void {

//     // tslint:disable-next-line:radix
//     const id = parseInt($event.target.closest('button').id);

//     this.router.navigate(['view-all-approved-orders']).then(e => {
//       console.log(`the order to view again: ${JSON.stringify(AllOrderData.getAllAllOrderMap().get(id), null, 2)} `);
//       AllOrderData.setIdOfOrderToView(id);
//     });

//   }
// }

import { Component, ViewChild, OnInit } from "@angular/core";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import { HttpService } from "../../../../utils/http/http-service";
import { Order } from "../../../../model/buyer/order/order-model";
import { ObjectsUtil } from "../../../../utils/objects/objects";
import {
  IBuyerAllInvoices,
  PopulateSupplierPendingOrderTable
} from "./buyer-all-invoices-model";
import { PopulateTable } from "../../../../utils/tables/populate.table";
import { SupplierPendingOrderData } from "../../../../service/order/supplier.pending.order.data";
import { Router } from "@angular/router";

@Component({
  selector: "app-all-invoices",
  templateUrl: "./all-invoices.component.html",
  styleUrls: ["./all-invoices.component.css"]
})
export class AllInvoicesComponent implements OnInit {
  supplierPendingOrdersInfoTable: IBuyerAllInvoices[] = [];
  supplierPendingOrdersInfoTableDataSource = new MatTableDataSource(
    this.supplierPendingOrdersInfoTable
  );

  displayedColumns: string[] =
    PopulateSupplierPendingOrderTable.displayedColumns;

  // tslint:disable-next-line:max-line-length
  constructor(
    private httpService: HttpService<Order>,
    private objectsUtil: ObjectsUtil<Order>,
    private populateTable: PopulateTable<Order, IBuyerAllInvoices>,
    private router: Router
  ) {}

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  private populateTheTable(): void {
    this.httpService.getRequest("/orders/findAll").subscribe(response => {
      const result = this.populateTable.populateTable(
        this.objectsUtil.dataObjectToArray(response.body),
        this.supplierPendingOrdersInfoTable,
        this.supplierPendingOrdersInfoTableDataSource,
        PopulateSupplierPendingOrderTable.populateTableOnInit
      );

      this.supplierPendingOrdersInfoTableDataSource = new MatTableDataSource<
      IBuyerAllInvoices
      >(result);

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
    this.supplierPendingOrdersInfoTableDataSource.filter = filterValue
      .trim()
      .toLowerCase();
  }
}
