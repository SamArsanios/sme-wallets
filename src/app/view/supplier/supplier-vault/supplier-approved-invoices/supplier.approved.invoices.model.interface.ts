import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';

// import { Order } from 'src/app/model/buyer/order/order-model';
// import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';
// import { Invoice } from 'src/app/model/buyer/invoices/invoice-model';
// import { Invoice } from 'src/app/model/buyer/invoices/invoice-model';

export interface ISupplierApprovedOrders {
    orderNo: string;
    orderDate: any;
    orderDueDate: any;
    senderName: string;
    orderStatus: string;
    action: any;
  }


export class PopulateSupplierApprovedOrderTable {

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
      console.log(`the naaame ${JSON.stringify(e.order.buyer.name, null, 2)}`)
      return  {
        orderNo: `inv-${e.order.id}`,
        orderDate: e.order.timestamp,
        orderDueDate: e.order.orderDueDate,
        senderName: e.order.buyer.name,
        orderStatus: e.order.orderStatus,
        action: e.id
      };

    });
  }

}
