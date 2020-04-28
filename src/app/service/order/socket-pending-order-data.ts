import {List} from '../../utils/collections/list';
import {Order} from '../../model/buyer/order/order-model';
import {Mapp} from '../../utils/collections/map';

export class SocketPendingOrderData {

  private static allPendingOrderLists: List<Order>;
  private static allPendingOrderMap: Mapp<number, Order>;
  private static idOfOrderToView: number;

  public static setAllPendingOrderLists(pendingOrders: List<Order>): void {
    SocketPendingOrderData.allPendingOrderLists = pendingOrders;
  }

  public static getAllPendingOrderLists(): List<Order> {
    return SocketPendingOrderData.allPendingOrderLists;
  }

  public static setAllPendingOrderMap(pendingOrder: Mapp<number, Order>): void {
    SocketPendingOrderData.allPendingOrderMap = pendingOrder;
  }

  public static getAllPendingOrderMap(): Mapp<number, Order> {
    return SocketPendingOrderData.allPendingOrderMap;
  }


  public static setIdOfOrderToView(id: number): void {
    SocketPendingOrderData.idOfOrderToView = id;
  }

  public static getIdOfOrderToView(): number {
    return SocketPendingOrderData.idOfOrderToView;
  }

  static addAPendingOrder(anOrder: Order): void {

      if (SocketPendingOrderData.getAllPendingOrderLists() == null || SocketPendingOrderData.getAllPendingOrderLists().isEmpty()) {

        const newList = new List<Order>();
        newList.add(anOrder);
        SocketPendingOrderData.setAllPendingOrderLists(newList);

      } else {

        SocketPendingOrderData.getAllPendingOrderLists().add(anOrder);

    }

  }

  static addAPendingOrderToMap(anOrder: Order, id: number): void {

      if (SocketPendingOrderData.getAllPendingOrderMap() == null || SocketPendingOrderData.getAllPendingOrderMap().isEmpty()) {

        const newMap = new Mapp<number, Order>();
        newMap.put(id, anOrder);

        SocketPendingOrderData.setAllPendingOrderMap(newMap);

      } else {

        SocketPendingOrderData.getAllPendingOrderMap().put(id, anOrder);

      }
    }


}
