import { Mapp } from "src/app/utils/collections/map";
import { SupplierOrder } from "src/app/model/supplier/order/SupplierOrder";
import { List } from "src/app/utils/collections/list";
import { ApproveOrderData } from "../order/approve.order.data";
import { Invoice } from 'src/app/model/buyer/invoices/invoice-model';

export class SponsorInvoiceData {
  private static sponsorInvoiceLists: List<Invoice>;
  private static sponsorInvoiceMap: Mapp<number, Invoice>;
  private static idOfOrderToView: number;

  public static setSponsorInvoiceLists(approveOrders: List<Invoice>): void {
    SponsorInvoiceData.sponsorInvoiceLists = approveOrders;
  }

  public static getSupplierInvoiceLists(): List<Invoice> {
    return SponsorInvoiceData.sponsorInvoiceLists;
  }

  public static setSponsorInvoiceMap(
    approveOrders: Mapp<number, Invoice>
  ): void {
    SponsorInvoiceData.sponsorInvoiceMap = approveOrders;
  }

  public static getSponsorInvoiceMap(): Mapp<number, Invoice> {
    return SponsorInvoiceData.sponsorInvoiceMap;
  }

  public static setIdOfOrderToView(id: number): void {
    SponsorInvoiceData.idOfOrderToView = id;
  }

  public static getIdOfInvoiceToView(): number {
    return SponsorInvoiceData.idOfOrderToView;
  }

  static addSponsorInvoiceOrder(anOrder: Invoice): void {
    if (
      SponsorInvoiceData.getSupplierInvoiceLists() == null ||
      SponsorInvoiceData.getSupplierInvoiceLists().isEmpty()
    ) {
      const newList = new List<Invoice>();
      newList.add(anOrder);
      SponsorInvoiceData.setSponsorInvoiceLists(newList);
    } else {
      SponsorInvoiceData.getSupplierInvoiceLists().add(anOrder);
    }
  }

  static addSponsorInvoiceOrderToMap(anOrder: Invoice, id: number): void {
    if (
      SponsorInvoiceData.getSponsorInvoiceMap() == null ||
      SponsorInvoiceData.getSponsorInvoiceMap().isEmpty()
    ) {
      const newMap = new Mapp<number, Invoice>();
      newMap.put(id, anOrder);

      SponsorInvoiceData.setSponsorInvoiceMap(newMap);
    } else {
      SponsorInvoiceData.getSponsorInvoiceMap().put(id, anOrder);
    }
  }
}
