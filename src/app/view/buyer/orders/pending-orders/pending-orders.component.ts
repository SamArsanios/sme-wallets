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
