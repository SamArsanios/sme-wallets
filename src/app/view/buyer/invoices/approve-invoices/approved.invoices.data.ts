import { Invoice } from '../../../../model/buyer/invoices/invoice-model';

export interface IApprovedInvoices {
    orderNo: string;
    orderDate: any;
    orderDueDate: any;
    senderName: string;
    orderStatus: string;
    action: number;
}

export class ApprovedInvoicesTable {

    public static displayedColumns: string[] = [
        'orderNo',
        'orderDate',
        'orderDueDate',
        'senderName',
        'orderStatus',
        'action'
    ];


    public static populateTableOnInit(fromResponse: Invoice[]) {

        return fromResponse.map(e => {

            return {
                orderNo: `ORD-${e.id}`,
                invoiceDate: e.invoiceDate,
                invoiceDueDate: e.invoiceDueDate,
                supplierName: "unknown",
                InvoiceStatus: "pending",
                action: e.id
            };

        });
    }

}
