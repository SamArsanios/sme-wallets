import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';

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


  public  static populateTableOnInit(fromResponse: SupplierOrder[]) {

    return fromResponse.map(e => {

      return  {
        orderNo: `ord-${e.order.id}`,
        orderDate: e.order.timestamp,
        orderDueDate: e.order.orderDueDate,
        senderName: e.order.buyer.name,
        orderStatus: e.order.orderStatus,
        action: e.id
      };

    });
  }

}
