// import { Mapp } from "src/app/utils/collections/map";
// import { SupplierOrder } from "src/app/model/supplier/SupplierOrder/SupplierOrder";
// import { List } from "src/app/utils/collections/list";
import { Mapp } from 'src/app/utils/collections/map';
import { List } from 'src/app/utils/collections/list';
import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';

export class SupplierAllSupplierOrderData {
  private static supplierAllSupplierOrderList: List<SupplierOrder>;
  private static supplierAllSupplierOrderMap: Mapp<number, SupplierOrder>;
  private static idOfSupplierOrderToView: number;

  public static setAllSupplierOrderLists(supplierAllSupplierOrders: List<SupplierOrder>): void {
    SupplierAllSupplierOrderData.supplierAllSupplierOrderList = supplierAllSupplierOrders;
  }

  public static getSupplierAllSupplierOrderLists(): List<SupplierOrder> {
    return SupplierAllSupplierOrderData.supplierAllSupplierOrderList;
  }

  public static setsupplierAllSupplierOrderMap(
    supplierAllSupplierOrders: Mapp<number, SupplierOrder>
  ): void {
    SupplierAllSupplierOrderData.supplierAllSupplierOrderMap = supplierAllSupplierOrders;
  }

  public static getsupplierAllSupplierSupplierOrderMap(): Mapp<number, SupplierOrder> {
    return SupplierAllSupplierOrderData.supplierAllSupplierOrderMap;
  }

  // public static getApproveOrderMap(): Mapp<number, SupplierOrder> {
  //   return ApproveSupplierQotData.approveOrderMap;
  // }

  public static setIdOfSupplierOrderToView(id: number): void {
    SupplierAllSupplierOrderData.idOfSupplierOrderToView = id;
  }

  public static getIdOfSupplierOrderToView(): number {
    return SupplierAllSupplierOrderData.idOfSupplierOrderToView;
  }

  static addAAllSupplierSupplierOrder(anSupplierOrder: SupplierOrder): void {
    if (
      SupplierAllSupplierOrderData.getSupplierAllSupplierOrderLists() == null ||
      SupplierAllSupplierOrderData.getSupplierAllSupplierOrderLists().isEmpty()
    ) {
      const newList = new List<SupplierOrder>();
      newList.add(anSupplierOrder);
      SupplierAllSupplierOrderData.setAllSupplierOrderLists(newList);
    } else {
      SupplierAllSupplierOrderData.getSupplierAllSupplierOrderLists().add(anSupplierOrder);
    }
  }

  static addAAllSupplierSupplierOrderToMap(anSupplierOrder: SupplierOrder, id: number): void {
    if (
      SupplierAllSupplierOrderData.getsupplierAllSupplierSupplierOrderMap() == null ||
      SupplierAllSupplierOrderData.getsupplierAllSupplierSupplierOrderMap().isEmpty()
    ) {
      const newMap = new Mapp<number, SupplierOrder>();
      newMap.put(id, anSupplierOrder);

      SupplierAllSupplierOrderData.setsupplierAllSupplierOrderMap(newMap);
    } else {
      SupplierAllSupplierOrderData.getsupplierAllSupplierSupplierOrderMap().put(id, anSupplierOrder);
    }
}
}