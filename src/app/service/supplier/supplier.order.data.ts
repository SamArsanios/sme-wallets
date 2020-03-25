import { Mapp } from "src/app/utils/collections/map";
import { SupplierOrder } from "src/app/model/supplier/order/SupplierOrder";
import { List } from "src/app/utils/collections/list";
import { ApproveOrderData } from "../order/approve.order.data";

export class ApproveSupplierQotData {
  private static approveSupplierQotLists: List<SupplierOrder>;
  private static approveOrderMap: Mapp<number, SupplierOrder>;
  private static idOfOrderToView: number;

  public static setApproveOrderLists(approveOrders: List<SupplierOrder>): void {
    ApproveSupplierQotData.approveSupplierQotLists = approveOrders;
  }

  public static getApproveOrderLists(): List<SupplierOrder> {
    return ApproveSupplierQotData.approveSupplierQotLists;
  }

  public static setApproveOrderMap(
    approveOrders: Mapp<number, SupplierOrder>
  ): void {
    ApproveSupplierQotData.approveOrderMap = approveOrders;
  }

  public static getApproveOrderMap(): Mapp<number, SupplierOrder> {
    return ApproveSupplierQotData.approveOrderMap;
  }

  public static setIdOfOrderToView(id: number): void {
    ApproveSupplierQotData.idOfOrderToView = id;
  }

  public static getIdOfOrderToView(): number {
    return ApproveSupplierQotData.idOfOrderToView;
  }

  static addApproveOrder(anOrder: SupplierOrder): void {
    if (
      ApproveSupplierQotData.getApproveOrderLists() == null ||
      ApproveSupplierQotData.getApproveOrderLists().isEmpty()
    ) {
      const newList = new List<SupplierOrder>();
      newList.add(anOrder);
      ApproveSupplierQotData.setApproveOrderLists(newList);
    } else {
      ApproveSupplierQotData.getApproveOrderLists().add(anOrder);
    }
  }

  static addApproveOrderToMap(anOrder: SupplierOrder, id: number): void {
    if (
      ApproveSupplierQotData.getApproveOrderMap() == null ||
      ApproveOrderData.getApproveOrderMap().isEmpty()
    ) {
      const newMap = new Mapp<number, SupplierOrder>();
      newMap.put(id, anOrder);

      ApproveSupplierQotData.setApproveOrderMap(newMap);
    } else {
      ApproveSupplierQotData.getApproveOrderMap().put(id, anOrder);
    }
  }
}
