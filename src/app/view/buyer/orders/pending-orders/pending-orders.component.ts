import { Component, ViewChild, OnInit } from '@angular/core';
// data source for filtering and Matsort for sorting
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import {HttpService} from '../../../../utils/http/http-service';
import {Order} from '../../../../model/buyer/order/order-model';
import {ObjectsUtil} from '../../../../utils/objects/objects';
import {IPendingOrder, PopulatePendingOrderTable} from './pending.order.model.interface';
import {PopulateTable} from '../../../../utils/tables/populate.table';

@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.css']
})

export class PendingOrdersComponent implements OnInit {

  pendingOrdersInfoTable: IPendingOrder[] = [];
  pendingOrdersInfoTableDataSource = new MatTableDataSource(this.pendingOrdersInfoTable);

  displayedColumns: string[] = PopulatePendingOrderTable.displayedColumns;

  // tslint:disable-next-line:max-line-length
  constructor(private httpService: HttpService<Order>, private objectsUtil: ObjectsUtil<Order>, private populateTable: PopulateTable<Order, IPendingOrder>) {}

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  private populateTheTable() {

    this.httpService.getRequest('/orders/findAll').subscribe(response => {

      const result = this.populateTable.populateTable(this.objectsUtil.dataObjectToArray(response.body), this.pendingOrdersInfoTable,
        this.pendingOrdersInfoTableDataSource, PopulatePendingOrderTable.populateTableOnInit);

      this.pendingOrdersInfoTableDataSource = new MatTableDataSource<IPendingOrder>(result);

    });

    this.pendingOrdersInfoTableDataSource.sort = this.sort;
    this.pendingOrdersInfoTableDataSource.paginator = this.paginator;

  }

  ngOnInit() {
    this.populateTheTable();
  }

  applyFilter(filterValue: string) {
    this.pendingOrdersInfoTableDataSource.filter = filterValue.trim().toLowerCase();
  }
}
