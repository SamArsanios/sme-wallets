// import { Component, ViewChild, OnInit } from "@angular/core";
// import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
// export interface IApproveOrder {
//   orderNo: string;
//   orderDate: any;
//   orderDueDate: any;
//   orderStatus: string;
 
// }

// const ELEMENT_DATA: IApproveOrder[] = [
//   {
//     orderNo: "ORD-1",
//     orderDate: "12 - 12 - 2011",  
//     orderDueDate: "1 - 1 - 2012",
//     orderStatus: "Processing"
//   },
//   {
//     orderNo: "ORD-2",
//     orderDate: "10 - 1 - 2014",
//     orderDueDate: "2 - 2 - 2014",
//     orderStatus: "Approved"
//   },
//   {
//     orderNo: "ORD-3",
//     orderDate: "12 - 12 - 2019",
//     orderDueDate: "20 - 12 - 2019",
//     orderStatus: "Approved"
//   },
//   {
//     orderNo: "ORD-4",
//     orderDate: "10 - 11 - 1997",
//     orderDueDate: "10 - 11 - 1997",
//     orderStatus: "Processing"
//   },
//   {
//     orderNo: "ORD-5",
//     orderDate: "10 - 5 - 2014",
//     orderDueDate: "15 - 5 - 2014",
//     orderStatus: "Approved"
//   },
//   {
//     orderNo: "ORD-6",
//     orderDate: "10 - 12 - 2015",
//     orderDueDate: "11 - 12 - 2015",
//     orderStatus: "Processing"
//   },
//   {
//     orderNo: "ORD-7",
//     orderDate: "1 - 5 - 2016",
//     orderDueDate: "1 - 6 - 2016",
//     orderStatus: "Approved"
//   },
//   {
//     orderNo: "ORD-8",
//     orderDate: "1 - 2 - 1996",
//     orderDueDate: "10 - 2 - 1996",
//     orderStatus: "Processing"
//   },
//   {
//     orderNo: "ORD-9",
//     orderDate: "10 - 12 - 1999",
//     orderDueDate: "15 - 12 - 1999",
//     orderStatus: "Processing"
//   },
//   {
//     orderNo: "ORD-10",
//     orderDate: "10 - 1 - 2018",
//     orderDueDate: "1 - 1 - 2018",
//     orderStatus: "Approved"
//   }
// ];
// @Component({
//   selector: "app-approve-orders",
//   templateUrl: "./approve-orders.component.html",
//   styleUrls: ["./approve-orders.component.css"]
// })
// export class ApproveOrdersComponent implements OnInit {
//   constructor() {}

//   displayedColumns: string[] = [
//     "orderNo",
//     "orderDate",
//     "orderDueDate",
//     "action",
//     "orderStatus",
//     "empty"
//   ];

//   dataSource = new MatTableDataSource(ELEMENT_DATA);
//   @ViewChild(MatSort, { static: true }) sort: MatSort;
//   @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

//   ngOnInit() {
//     this.dataSource.sort = this.sort;
//     this.dataSource.paginator = this.paginator;
//   }

//   logData(row) {
//     console.log(row);
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
import {PopulateTable} from '../../../../utils/tables/populate.table';
import {PendingOrderData} from '../../../../service/order/pending.order.data';
import {Router} from '@angular/router';
import { IApproveOrder } from '../../payment-info/payment-info.component';
import { PopulateApproveOrderTable } from './approve.order.model.interface';
import { ApproveOrderData } from 'src/app/service/order/approve.order.data';

@Component({
  selector: "app-approve-orders",
  templateUrl: "./approve-orders.component.html",
  styleUrls: ["./approve-orders.component.css"]
})
export class ApproveOrdersComponent implements OnInit {


  approvedOrdersInfoTable: IApproveOrder[] = [];
  approveOrdersInfoTableDataSource = new MatTableDataSource(this.approvedOrdersInfoTable);

  displayedColumns: string[] = PopulateApproveOrderTable.displayedColumns;

  // tslint:disable-next-line:max-line-length
  constructor(private httpService: HttpService<Order>, private objectsUtil: ObjectsUtil<Order>, private populateTable: PopulateTable<Order, IApproveOrder>, private router: Router) {}

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  private populateTheTable(): void {

    this.httpService.getRequest('/orders/findAll').subscribe(response => {

      const result = this.populateTable.populateTable(this.objectsUtil.dataObjectToArray(response.body), this.approvedOrdersInfoTable,
        this.approveOrdersInfoTableDataSource, PopulateApproveOrderTable.populateTableOnInit);

      this.approveOrdersInfoTableDataSource = new MatTableDataSource<IApproveOrder>(result);

      this.objectsUtil.dataObjectToArray(response.body).forEach(e => {

        ApproveOrderData.addApproveOrder(e);
        ApproveOrderData.addApproveOrderToMap(e, e.id);       

      });

    });
    
    this.approveOrdersInfoTableDataSource.sort = this.sort;
    this.approveOrdersInfoTableDataSource.paginator = this.paginator;

  }

  ngOnInit() {
    this.populateTheTable();
  }

  handleViewOrderClick($event): void {

    // tslint:disable-next-line:radix
    const id = parseInt($event.target.closest('button').id);

    this.router.navigate(['/buyer/orders/view-orders']).then(e => {
      console.log(`the order to view again: ${JSON.stringify(ApproveOrderData.getApproveOrderMap().get(id), null, 2)} `);
      ApproveOrderData.setIdOfOrderToView(id);
    });

  }

  applyFilter(filterValue: string) {
    this.approveOrdersInfoTableDataSource.filter = filterValue.trim().toLowerCase();
  }
}

