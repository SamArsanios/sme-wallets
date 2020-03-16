import {Order} from '../../../../model/buyer/order/order-model';

export interface IAllOrders {
  orderNo: string;
  orderDate: any;
  orderDueDate: any;
  senderName: string;
  orderStatus: string;
  action: number;
}

export class PopulateAllOrderTable {

  public static displayedColumns: string[] = [
    'orderNo',
    'orderDate',
    'orderDueDate',
    'senderName',
    'orderStatus',
    'action'
  ];


  public  static populateTableOnInit(fromResponse: Order[]) {

    return fromResponse.map(e => {

      return  {
        orderNo: e.isbnNumber,
        orderDate: e.timestamp,
        orderDueDate: e.orderDueDate,
        // senderName : e.buyer.name,
        orderStatus: e.orderStatus,
        action: e.id
      };

    });
  }

}
 