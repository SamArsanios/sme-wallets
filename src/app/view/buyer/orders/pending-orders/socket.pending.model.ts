import {Order} from '../../../../model/buyer/order/order-model';

export interface IPendingOrder {
  orderNo: any;
  orderDate: any;
  orderDueDate: any;
  orderStatus: any;
  action: any;
}

export class PopulateSocketPendingOrderTable {

  public static displayedColumns: string[] = [
    'orderNo',
    'orderDate',
    'orderDueDate',
    'orderStatus',
    'action'
  ];


  public  static populateTableOnInit(fromResponse: Order[]) {

    return fromResponse.map(e => {

      return  {
        orderNo: `ord-${e.id}`,
        orderDate: e.timestamp,
        orderDueDate: e.orderDueDate,
        orderStatus: e.orderStatus,
        action: e.id
      };

    });
  }

}
