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


@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.css']
})
export class PendingOrdersComponent implements OnInit {

  pendingOrdersInfoTable: IPendingOrder[] = [];
  pendingOrdersInfoTableDataSource = new MatTableDataSource(this.pendingOrdersInfoTable);

  displayedColumns: string[] = [
    'orderNo',
    'orderDate',
    'orderDueDate',
    'orderStatus',
    'action'
  ];
  constructor(private httpService: HttpService<Order>, private objectsUtil: ObjectsUtil<Order>) {}
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  populateTableOnInit(fromResponse: Order[]) {

    return fromResponse.map(e => {

      // var d = new Date("Feb 21, 2020 10:12:36 AM");
      // console.log(d.getMinutes()); // 3
      // console.log(d.getHours()); // 13
      // d.setMinutes(d.getMinutes() );
      // console.log(d.getMinutes()); // 53
      // console.log(d.getHours()); // 12
      // console.log(d.getFullYear());
      // console.log(d.getDay());
      // console.log(d.getMonth());



    //   Date.prototype.addDays = function(days) {
    //     var date = new Date("01/30/2019");
    //     date.setDate(date.getDate() + days);
    //     return date;
    // }
    
    // var date = new Date();
    
    // alert(date.addDays(5));

        return  {
          orderNo: e.id,
          orderDate: e.timestamp,
          orderDueDate: e.timestamp,
          orderStatus: "pending"
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
  }

  logData(row) {
    console.log(row);
  }

  applyFilter(filterValue: string) {
    this.pendingOrdersInfoTableDataSource.filter = filterValue.trim().toLowerCase();
  }
}