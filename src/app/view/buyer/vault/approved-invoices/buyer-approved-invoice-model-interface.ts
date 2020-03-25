import { Invoice } from '../../../../model/buyer/invoices/invoice-model';
import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';

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


    public static populateTableOnInit(fromResponse: SupplierOrder[]) {

        return fromResponse.map(e => {

            return {
                invoiceNo: `INV-${e.id}`,
                invoiceDate: e.timestamp,
                invoiceDueDate: "not fixed yet",
                supplierName: e.order.supplier.name,
                InvoiceStatus: e.order.orderStatus,
                action: e.id
            };

        });
    }

}
