import {Order} from '../../../../model/buyer/order/order-model';

export interface ISupplierPendingOrders {
    orderNo: string;
    orderDate: any;
    orderDueDate: any;
    senderName: string;
    orderStatus: string;
    action: any;
  }


export class SocketPopulateSupplierPendingOrderTable {

  public static displayedColumns: string[] = [
        "orderNo",
        "orderDate",
        "orderDueDate",
        "senderName",
        "orderStatus",
        "action"
      ];


  public  static populateTableOnInit(fromResponse: Order[]) {

    return fromResponse.map(e => {

      return  {
        orderNo: `ord-${e.id}`,
        orderDate: e.timestamp,
        orderDueDate: e.orderDueDate,
        senderName: e.buyer.name,
        orderStatus: e.orderStatus,
        action: e.id
      };

    });
  }

}
