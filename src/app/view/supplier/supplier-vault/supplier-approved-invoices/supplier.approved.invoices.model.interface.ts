import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';
import { Invoice } from 'src/app/model/buyer/invoices/invoice-model';

// import { Order } from 'src/app/model/buyer/order/order-model';
// import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';
// import { Invoice } from 'src/app/model/buyer/invoices/invoice-model';
// import { Invoice } from 'src/app/model/buyer/invoices/invoice-model';

export interface ISupplierApprovedOrders {
    invoiceNo: string;
    invoiceDate: any;
    invoiceDueDate: any;
    senderName: string;
    invoiceTotal:any;
    invoiceStatus: string;
    action: any;
  }


export class PopulateSupplierApprovedOrderTable {

  public static displayedColumns: string[] = [
        "invoiceNo",
        "invoiceDate",
        "invoiceDueDate",
        "senderName",
        "invoiceTotal",
        "invoiceStatus",
        "action"
      ];


  public  static populateTableOnInit(fromResponse: Invoice[]) {

    return fromResponse.map(e => {
      console.log(`the naaame ${JSON.stringify(e.order.buyer.name, null, 2)}`)
      return  {
<<<<<<< HEAD
        orderNo: `inv-${e.id}`,
        orderDate: e.theTimestamp,
        orderDueDate: e.invoiceDueDate,
        senderName: e.order.buyer.name,
        orderStatus: e.invoiceStatus,
=======
        invoiceNo: `inv-${e.order.id}`,
        orderDate: e.order.timestamp,
        orderDueDate: e.order.orderDueDate,
        senderName: e.order.buyer.name,
        invoiceTotal:e.finalTotal,
        orderStatus: e.order.orderStatus,
>>>>>>> a4ef45d6e863c738b7e8faa4ae13daf265dd71ee
        action: e.id
      };

    });
  }

}
