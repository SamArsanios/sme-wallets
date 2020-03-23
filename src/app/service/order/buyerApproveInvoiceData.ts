import { List } from '../../../../src/app/utils/collections/list';
import { Mapp } from '../../../../src/app/utils/collections/map';
import { Invoice } from 'src/app/model/buyer/invoices/invoice-model';

export class BuyerapproveInvoicesData {

    private static buyerInvoicesList: List<Invoice>;
    private static buyerInvoiceMap: Mapp<number, Invoice>;
    private static idOfInvoiceToView: number;

    public static setBuyerInvoicesList(allBuyerInvoices: List<Invoice>): void {
        BuyerapproveInvoicesData.buyerInvoicesList = allBuyerInvoices;
    }

    public static  getBuyerInvoicesList(): List<Invoice> {
        return BuyerapproveInvoicesData.buyerInvoicesList;
    }

    public static   setBuyerInvoiceMap(allBuyerInvoices: Mapp<number, Invoice>): void {
        BuyerapproveInvoicesData.buyerInvoiceMap = allBuyerInvoices;
    }

    public static  getBuyerInvoiceMap(): Mapp<number, Invoice> {
        return BuyerapproveInvoicesData.buyerInvoiceMap;
    }

    public static setIdOfInvoiceToView(id: number): void {
        BuyerapproveInvoicesData.idOfInvoiceToView = id;
    }

    public static getIdOfInvoiceToView(): number {
        return BuyerapproveInvoicesData.idOfInvoiceToView;
    }

    static addSupplierPendingInvoice(anInvoice: Invoice): void {

        if (BuyerapproveInvoicesData. getBuyerInvoicesList() == null || BuyerapproveInvoicesData. getBuyerInvoicesList().isEmpty()) {

            const newList = new List<Invoice>();
            newList.add(anInvoice);
            BuyerapproveInvoicesData.setBuyerInvoicesList(newList);

        } else {

            BuyerapproveInvoicesData. getBuyerInvoicesList().add(anInvoice);

        }

    }

    static  addSupplierPendingInvoiceToMap(anInvoice: Invoice, id: number): void {

        if (BuyerapproveInvoicesData. getBuyerInvoiceMap() == null || BuyerapproveInvoicesData. getBuyerInvoiceMap().isEmpty()) {

            const newMap = new Mapp<number, Invoice>();
            newMap.put(id, anInvoice);

            BuyerapproveInvoicesData.  setBuyerInvoiceMap(newMap);

        } else {

            BuyerapproveInvoicesData. getBuyerInvoiceMap().put(id, anInvoice);

        }
    }


}
