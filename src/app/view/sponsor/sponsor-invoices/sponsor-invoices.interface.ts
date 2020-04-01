import { Invoice } from 'src/app/model/buyer/invoices/invoice-model';

export interface ISponsorInvoices {
    invoiceNo: string;
    accountDebtor: any;
    industryType: any;
    invoiceDate: string;
    invoiceDueDate: string;
    faceValue: string;
    action: number;
}

export class SponsorInvoicesTable {

    public static displayedColumns: string[] = [

  "invoiceNo",
  "accountDebtor",
  "industryType",
  "invoiceDate",
  "invoiceDueDate",
  "faceValue",
  "action"

    ];


    public static populateTableOnInit(fromResponse: Invoice[]) {

        return fromResponse.map(e => {

            return {
                invoiceNo: `INV-${e.id}`,
                accountDebtor: e.order.buyer.name,
                industryType: e.order.industryType,
                invoiceDate: e.theTimestamp,
                invoiceDueDate: e.invoiceDueDate,
                // faceValue: string;
                action: e.id
            };

        });
    }

}
