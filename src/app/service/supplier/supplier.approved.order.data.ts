// SupplierApprovedOrdersData 
import { Mapp } from "src/app/utils/collections/map";
// import { SupplierOrder } from "src/app/model/supplier/order/SupplierOrder";
import { List } from "src/app/utils/collections/list";
import { Invoice } from 'src/app/model/buyer/invoices/invoice-model';
// import { ApproveOrderData } from "../order/approve.order.data";

export class SupplierApprovedOrdersData  {
  private static approveSupplierQotLists: List<Invoice>;
  private static approveOrderMap: Mapp<number, Invoice>;
  private static idOfOrderToView: number;

  public static setApproveOrderLists(approveOrders: List<Invoice>): void {
    SupplierApprovedOrdersData .approveSupplierQotLists = approveOrders;
  }

  public static getApproveOrderLists(): List<Invoice> {
    return SupplierApprovedOrdersData .approveSupplierQotLists;
  }

  public static setApproveOrderMap(
    approveOrders: Mapp<number, Invoice>
  ): void {
    SupplierApprovedOrdersData .approveOrderMap = approveOrders;
  }

  public static getApproveOrderMap(): Mapp<number, Invoice> {
    return SupplierApprovedOrdersData .approveOrderMap;
  }

  public static setIdOfOrderToView(id: number): void {
    SupplierApprovedOrdersData .idOfOrderToView = id;
  }

  public static getIdOfOrderToView(): number {
    return SupplierApprovedOrdersData .idOfOrderToView;
  }

  static addApproveOrder(anOrder: Invoice): void {
    if (
      SupplierApprovedOrdersData .getApproveOrderLists() == null ||
      SupplierApprovedOrdersData .getApproveOrderLists().isEmpty()
    ) {
      const newList = new List<Invoice>();
      newList.add(anOrder);
      SupplierApprovedOrdersData .setApproveOrderLists(newList);
    } else {
      SupplierApprovedOrdersData .getApproveOrderLists().add(anOrder);
    }
  }

  static addApproveOrderToMap(anOrder: Invoice, id: number): void {
    if (
      SupplierApprovedOrdersData .getApproveOrderMap() == null ||
      SupplierApprovedOrdersData.getApproveOrderMap().isEmpty()
    ) {
      const newMap = new Mapp<number, Invoice>();
      newMap.put(id, anOrder);

      SupplierApprovedOrdersData .setApproveOrderMap(newMap);
    } else {
      SupplierApprovedOrdersData .getApproveOrderMap().put(id, anOrder);
    }
  }
}
