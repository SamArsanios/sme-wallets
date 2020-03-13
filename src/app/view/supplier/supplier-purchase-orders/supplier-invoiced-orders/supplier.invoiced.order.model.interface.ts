import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';
import { Order } from 'src/app/model/buyer/order/order-model';

export interface ISupplierInvoicedOrders {
    orderNo: string;
    orderDate: any;
    orderDueDate: any;
    senderName: string;
    orderStatus: string;
    action: any;
  }


export class PopulateSupplierInvoicedOrderTable {

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
        orderNo: `ORD-${e.id}`,
        orderDate: e.timestamp,
        orderDueDate: e.orderDueDate,
        // senderName: e.buyer.name,
        orderStatus: e.orderStatus,
        action: e.id
      };

    });
  }

}
