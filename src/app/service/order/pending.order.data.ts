import {List} from '../../utils/collections/list';
import {Order} from '../../model/buyer/order/order-model';
import {Mapp} from '../../utils/collections/map';

export class PendingOrderData {

  private static allPendingOrderLists: List<Order>;
  private static allPendingOrderMap: Mapp<number, Order>;
  private static idOfOrderToView: number;

  public static setAllPendingOrderLists(pendingOrders: List<Order>): void {
    PendingOrderData.allPendingOrderLists = pendingOrders;
  }

  public static getAllPendingOrderLists(): List<Order> {
    return PendingOrderData.allPendingOrderLists;
  }

  public static setAllPendingOrderMap(pendingOrder: Mapp<number, Order>): void {
    PendingOrderData.allPendingOrderMap = pendingOrder;
  }

  public static getAllPendingOrderMap(): Mapp<number, Order> {
    return PendingOrderData.allPendingOrderMap;
  }


  public static setIdOfOrderToView(id: number): void {
    PendingOrderData.idOfOrderToView = id;
  }

  public static getIdOfOrderToView(): number {
    return PendingOrderData.idOfOrderToView;
  }

  static addAPendingOrder(anOrder: Order): void {

      if (PendingOrderData.getAllPendingOrderLists() == null || PendingOrderData.getAllPendingOrderLists().isEmpty()) {

        const newList = new List<Order>();
        newList.add(anOrder);
        PendingOrderData.setAllPendingOrderLists(newList);

      } else {

        PendingOrderData.getAllPendingOrderLists().add(anOrder);

    }

  }

  static addAPendingOrderToMap(anOrder: Order, id: number): void {

      if (PendingOrderData.getAllPendingOrderMap() == null || PendingOrderData.getAllPendingOrderMap().isEmpty()) {

        const newMap = new Mapp<number, Order>();
        newMap.put(id, anOrder);

        PendingOrderData.setAllPendingOrderMap(newMap);

      } else {

        PendingOrderData.getAllPendingOrderMap().put(id, anOrder);

      }
    }


}
