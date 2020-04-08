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
    var buttonString;

    return fromResponse.map(e => {
      if(e.invoiceStatus == "approved"){
        buttonString = "Discount Amount"
      }
      else{
        buttonString = "Discounted"
      }
      return  {
        orderNo: `inv-${e.id}`,
        orderDate: e.theTimestamp,
        orderDueDate: e.invoiceDueDate,
        
        senderName: e.order.buyer.name,
        invoiceTotal: "unknown",
        invoiceStatus: e.invoiceStatus,
        action: e.id,
        buttonString: buttonString
      };

    });
  }

}
