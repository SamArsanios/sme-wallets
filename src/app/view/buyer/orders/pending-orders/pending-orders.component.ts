<<<<<<< HEAD
import { Component, ViewChild, OnInit } from "@angular/core";
//data source for filtering and Matsort for sorting
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import { HttpService } from 'src/app/utils/http/http-service';
import { User } from 'src/app/shared/model/user/user-model';
import { Order } from 'src/app/model/buyer/order/order-model';
import { ObjectsUtil } from 'src/app/utils/objects/objects';

// export interface IPendingOrder {
//   orderNo: string;
//   orderDate: any;
//   orderDueDate: any;
//   orderStatus: string;
//   // action: any;
// }


// let ELEMENT_DATA: IPendingOrder[] = [
//   {

//     orderNo: "ORD-1",
//     orderDate: "12 - 12 - 2011",
//     orderDueDate: "1 - 1 - 2012",
//     orderStatus: "Processing"
//   }
// ];
=======
import { Component, ViewChild, OnInit } from '@angular/core';
// data source for filtering and Matsort for sorting
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import {HttpService} from '../../../../utils/http/http-service';
import {Order} from '../../../../model/buyer/order/order-model';
import {ObjectsUtil} from '../../../../utils/objects/objects';

export interface IPendingOrder {
  orderNo: any;
  orderDate: any;
  orderDueDate: any;
  orderStatus: any;
  // action: any;
}

>>>>>>> d16bef5e7d2ec5e0cb8fefe7fd9cba691ee0783a

@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.css']
})
export class PendingOrdersComponent implements OnInit {
<<<<<<< HEAD
  constructor(private httpService: HttpService<Order>, private objectUtil: ObjectsUtil<Order>) {
    this.httpService.getRequest('/orders/findAll').subscribe(e => {
      console.log(`the orders retrieved ${JSON.stringify(this.objectUtil.dataObjectToArray(e), null, 2)} `);
    });
  }
=======

  pendingOrdersInfoTable: IPendingOrder[] = [];
  pendingOrdersInfoTableDataSource = new MatTableDataSource(this.pendingOrdersInfoTable);

>>>>>>> d16bef5e7d2ec5e0cb8fefe7fd9cba691ee0783a
  displayedColumns: string[] = [
    'orderNo',
    'orderDate',
    'orderDueDate',
    'orderStatus',
    'action'
  ];
<<<<<<< HEAD
  dataSource;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  orders: Array<Order>;
  
  ngOnInit() {
    this.httpService.getRequest('/orders/findAll').subscribe(e => {
      this.orders = this.objectUtil.dataObjectToArray(e.body);
      console.log(`order list`, this.orders)

      const theItems = this.orders.map(t => {
        
        const theObj = {
          orderNo: t.id,
          orderDate: t.orderDueDate,
          orderDueDate: t.orderDueDate,
          orderStatus: t.supplier
        }

        return theObj;

      })
      console.log(theItems)

      this.dataSource = new MatTableDataSource(theItems)
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;







      // console.log(`the result ${JSON.stringify(this.objectUtil.dataObjectToArray(e))} `);
    });
=======
  constructor(private httpService: HttpService<Order>, private objectsUtil: ObjectsUtil<Order>) {}
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  populateTableOnInit(fromResponse: Order[]) {

    return fromResponse.map(e => {

        return  {
          orderNo: e.id,
          orderDate: e.timestamp,
          orderDueDate: e.id,
          orderStatus: e.id
        };

    });
  }

  ngOnInit() {

    this.httpService.getRequest('/orders/findAll').subscribe(response => {

      console.log(`the response is ${JSON.stringify(response.body, null, 2)} `);

      this.pendingOrdersInfoTable = this.populateTableOnInit(this.objectsUtil.dataObjectToArray(response.body));
      this.pendingOrdersInfoTableDataSource = new MatTableDataSource<IPendingOrder>(this.pendingOrdersInfoTable);

      console.log(`the test ${ JSON.stringify( this.populateTableOnInit(this.objectsUtil.dataObjectToArray(response.body))  )} `);
    });

    this.pendingOrdersInfoTableDataSource.sort = this.sort;
    this.pendingOrdersInfoTableDataSource.paginator = this.paginator;
>>>>>>> d16bef5e7d2ec5e0cb8fefe7fd9cba691ee0783a
  }

  logData(row) {
    console.log(row);
  }

  applyFilter(filterValue: string) {
    this.pendingOrdersInfoTableDataSource.filter = filterValue.trim().toLowerCase();
  }
}
