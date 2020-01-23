import { Component, ViewChild, OnInit } from '@angular/core';
// data source for filtering and Matsort for sorting
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import {HttpService} from '../../../../utils/http/http-service';
import {Order} from '../../../../model/buyer/order/order-model';
import {ObjectsUtil} from '../../../../utils/objects/objects';
import {IPendingOrder, PopulatePendingOrderTable} from './pending.order.model.interface';

@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.css']
})

export class PendingOrdersComponent implements OnInit {

  pendingOrdersInfoTable: IPendingOrder[] = [];
  pendingOrdersInfoTableDataSource = new MatTableDataSource(this.pendingOrdersInfoTable);

  displayedColumns: string[] = PopulatePendingOrderTable.displayedColumns;

  constructor(private httpService: HttpService<Order>, private objectsUtil: ObjectsUtil<Order>) {}

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

<<<<<<< HEAD
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

=======
>>>>>>> 0133f0752ffc73c27da8961e7962b931b9c86377
  ngOnInit() {

    this.httpService.getRequest('/orders/findAll').subscribe(response => {
      // tslint:disable-next-line:max-line-length
      const result = PopulatePendingOrderTable.populateTable(this.objectsUtil.dataObjectToArray(response.body), this.pendingOrdersInfoTable, this.pendingOrdersInfoTableDataSource);
      this.pendingOrdersInfoTableDataSource = new MatTableDataSource<IPendingOrder>(result);
    });

    this.pendingOrdersInfoTableDataSource.sort = this.sort;
    this.pendingOrdersInfoTableDataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.pendingOrdersInfoTableDataSource.filter = filterValue.trim().toLowerCase();
  }
}