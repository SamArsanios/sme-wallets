import { List } from '../../../../src/app/utils/collections/list';
import { Mapp } from '../../../../src/app/utils/collections/map';
import { Invoice } from 'src/app/model/buyer/invoices/invoice-model';

export class BuyerAllInvoicesInvoiceData {

    private static buyerInvoicesList: List<Invoice>;
    private static buyerInvoiceMap: Mapp<number, Invoice>;
    private static idOfInvoiceToView: number;

    public static setBuyerInvoicesList(allBuyerInvoices: List<Invoice>): void {
        BuyerAllInvoicesInvoiceData.buyerInvoicesList = allBuyerInvoices;
    }

    public static  getBuyerInvoicesList(): List<Invoice> {
        return BuyerAllInvoicesInvoiceData.buyerInvoicesList;
    }

    public static   setBuyerInvoiceMap(allBuyerInvoices: Mapp<number, Invoice>): void {
        BuyerAllInvoicesInvoiceData.buyerInvoiceMap = allBuyerInvoices;
    }

    public static  getBuyerInvoiceMap(): Mapp<number, Invoice> {
        return BuyerAllInvoicesInvoiceData.buyerInvoiceMap;
    }

    public static setIdOfInvoiceToView(id: number): void {
        BuyerAllInvoicesInvoiceData.idOfInvoiceToView = id;
    }

    public static getIdOfInvoiceToView(): number {
        return BuyerAllInvoicesInvoiceData.idOfInvoiceToView;
    }

    static addSupplierPendingInvoice(anInvoice: Invoice): void {

        if (BuyerAllInvoicesInvoiceData. getBuyerInvoicesList() == null || BuyerAllInvoicesInvoiceData. getBuyerInvoicesList().isEmpty()) {

            const newList = new List<Invoice>();
            newList.add(anInvoice);
            BuyerAllInvoicesInvoiceData.setBuyerInvoicesList(newList);

        } else {

            BuyerAllInvoicesInvoiceData. getBuyerInvoicesList().add(anInvoice);

        }

    }

    static  addSupplierPendingInvoiceToMap(anInvoice: Invoice, id: number): void {

        if (BuyerAllInvoicesInvoiceData. getBuyerInvoiceMap() == null || BuyerAllInvoicesInvoiceData. getBuyerInvoiceMap().isEmpty()) {

            const newMap = new Mapp<number, Invoice>();
            newMap.put(id, anInvoice);

            BuyerAllInvoicesInvoiceData.  setBuyerInvoiceMap(newMap);

        } else {

            BuyerAllInvoicesInvoiceData. getBuyerInvoiceMap().put(id, anInvoice);

        }
    }


}
