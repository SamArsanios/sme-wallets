import {Order} from '../../../../model/buyer/order/order-model';

export interface IBuyerAllInvoices {
    invoiceNo: string;
  invoiceDate: any;
  invoiceDueDate: any;
  supplierName: string;
  invoiceStatus: string;
    action: any;
  }



export class PopulateSupplierPendingOrderTable {

  public static displayedColumns: string[] = [
        "invoiceNo",
        "invoiceDate",
        "invoiceDueDate",
        "supplierName",
        "invoiceStatus",
        "action"
      ];


  public  static populateTableOnInit(fromResponse: Order[]) {

    return fromResponse.map(e => {

      return  {
        invoiceNo: `ORD-${e.id}`,
        invoiceDate: e.timestamp,
        invoiceDueDate: e.orderDueDate,
        supplierName: e.buyer.name,
        invoiceStatus: 'pending',
        action: e.id
      };

    });
  }

}
