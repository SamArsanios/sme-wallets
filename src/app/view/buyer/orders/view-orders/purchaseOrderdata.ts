import { Order } from "src/app/model/buyer/order/order-model";
import { Mapp } from "src/app/utils/collections/map";
import { List } from "src/app/utils/collections/list";

export class PurchaseOrderData {
  private static allPurchaseOrderLists: List<Order>;
  private static allPurchaseOrderMap: Mapp<number, Order>;
  private static idOfOrderToView: number;

  public static setAllPurchaseOrderLists(PurchaseOrders: List<Order>): void {
    PurchaseOrderData.allPurchaseOrderLists = PurchaseOrders;
  }

  public static getAllPurchaseOrderLists(): List<Order> {
    return PurchaseOrderData.allPurchaseOrderLists;
  }

  public static setAllPurchaseOrderMap(
    PurchaseOrder: Mapp<number, Order>
  ): void {
    PurchaseOrderData.allPurchaseOrderMap = PurchaseOrder;
  }

  public static getAllPurchaseOrderMap(): Mapp<number, Order> {
    return PurchaseOrderData.allPurchaseOrderMap;
  }

  public static setIdOfOrderToView(id: number): void {
    PurchaseOrderData.idOfOrderToView = id;
  }

  public static getIdOfOrderToView(): number {
    return PurchaseOrderData.idOfOrderToView;
  }

  static addAPurchaseOrder(anOrder: Order): void {
    if (
      PurchaseOrderData.getAllPurchaseOrderLists() == null ||
      PurchaseOrderData.getAllPurchaseOrderLists().isEmpty()
    ) {
      const newList = new List<Order>();
      newList.add(anOrder);
      PurchaseOrderData.setAllPurchaseOrderLists(newList);
    } else {
      PurchaseOrderData.getAllPurchaseOrderLists().add(anOrder);
    }
  }

  static addAPurchaseOrderToMap(anOrder: Order, id: number): void {
    if (
      PurchaseOrderData.getAllPurchaseOrderMap() == null ||
      PurchaseOrderData.getAllPurchaseOrderMap().isEmpty()
    ) {
      const newMap = new Mapp<number, Order>();
      newMap.put(id, anOrder);

      PurchaseOrderData.setAllPurchaseOrderMap(newMap);
    } else {
      PurchaseOrderData.getAllPurchaseOrderMap().put(id, anOrder);
    }
  }
}
