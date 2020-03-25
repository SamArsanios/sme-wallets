import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';

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


  public  static populateTableOnInit(fromResponse: SupplierOrder[]) {

    return fromResponse.map(e => {

      return  {
        orderNo: `ord-${e.order.id}`,
        orderDate: e.timestamp,
        orderDueDate: e.order.orderDueDate,
        senderName : e.order.buyer.name,
        orderStatus: e.order.orderStatus,
        action: e.id
      };

    });
  }

}
 