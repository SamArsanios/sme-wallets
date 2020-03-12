import { Invoice } from 'src/app/model/buyer/invoices/invoice-model';

export interface IBuyerAllInvoices {
    invoiceNo: string;
  invoiceDate: any;
  invoiceDueDate: any;
  supplierName: string;
  invoiceStatus: string;
    action: any;
  }



export class  PopulateBuyerInvoiceInfoTable {

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
      console.log(`the order due date is ${ JSON.stringify(e.order)}`)
      return  {
        invoiceNo: `ORD-${e.id}`,
        invoiceDate: e.order.timestamp,
        // invoiceDueDate: e.orderDueDate,
        supplierName: e.order.supplier.name,
        invoiceStatus: 'pending',
        action: e.id
      };

    });
  }

}