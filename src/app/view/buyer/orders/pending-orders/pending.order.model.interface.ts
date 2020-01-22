import {Order} from '../../../../model/buyer/order/order-model';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ViewChild} from '@angular/core';

export interface IPendingOrder {
  orderNo: any;
  orderDate: any;
  orderDueDate: any;
  orderStatus: any;
  // action: any;
}

export class PopulatePendingOrderTable {

  public static displayedColumns: string[] = [
    'orderNo',
    'orderDate',
    'orderDueDate',
    'orderStatus',
    'action'
  ];


  // tslint:disable-next-line:max-line-length
  public static populateTable(values: Order[], pendingOrdersInfoTable: IPendingOrder[], pendingOrdersInfoTableDataSource: MatTableDataSource<IPendingOrder>): IPendingOrder[] {
    pendingOrdersInfoTable = PopulatePendingOrderTable.populateTableOnInit(values);
    return pendingOrdersInfoTable;
  }

  private  static populateTableOnInit(fromResponse: Order[]) {

    return fromResponse.map(e => {

      return  {
        orderNo: e.id,
        orderDate: e.timestamp,
        orderDueDate: e.id,
        orderStatus: e.id
      };

    });
  }

}
