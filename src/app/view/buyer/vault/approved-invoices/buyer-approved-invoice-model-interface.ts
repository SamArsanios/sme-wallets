import { Invoice } from '../../../../model/buyer/invoices/invoice-model';

export interface IApprovedInvoices {
    orderNo: string;
    invoiceDate: any;
    orderDueDate: any;
    senderName: string;
    invoiceStatus: string;
    action: number;
}

export class ApprovedInvoicesTable {

    public static displayedColumns: string[] = [
        'invoiceNo',
        'invoiceDate',
        'orderDueDate',
        'supplierName',
        'invoiceStatus',
        'action'
    ];


    public static populateTableOnInit(fromResponse: Invoice[]) {

        return fromResponse.map(e => {

            return {
                invoiceNo: `INV-${e.id}`,
                invoiceDate: e.theTimestamp,
                invoiceDueDate: e.invoiceDueDate,
                supplierName: e.order.supplier.name,
                InvoiceStatus: e.invoiceStatus,
                action: e.id
            };

        });
    }

}
