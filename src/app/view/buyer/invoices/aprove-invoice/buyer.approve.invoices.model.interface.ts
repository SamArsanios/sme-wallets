import {Order} from '../../../../model/buyer/order/order-model';
import { Invoice } from 'src/app/model/buyer/invoices/invoice-model';

export interface IBuyerApproveInvoices {
    orderNo: string;
    invoiceDate: any;
    invoiceDueDate: any;
    senderName: string;
    invoiceStatus: string;
    action: any;
  }


export class PopulateBuyerApproveInvoiceTable {

  public static displayedColumns: string[] = [
        "invoiceNo",
        "invoiceDate",
        "invoiceDueDate",
        "supplierName",
        "invoiceStatus",
        "action"
      ];        


  public  static populateTableOnInit(fromResponse: Invoice[]) {

    return fromResponse.map(e => {

      return  {
        invoiceNo: e.id,
        invoiceDate: e.theTimestamp,
        invoiceDueDate: e.invoiceDueDate,
        supplierName: e.order.supplier.name,
        invoiceStatus: e.invoiceStatus,
        action: e.id
      };

    });
  }

}
