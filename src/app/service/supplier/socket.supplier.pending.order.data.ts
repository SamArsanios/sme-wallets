import {List} from '../../utils/collections/list';
import {Order} from '../../model/buyer/order/order-model';
import {Mapp} from '../../utils/collections/map';

export class SocketSupplierPendingOrderData {

  private static allPendingOrderLists: List<Order>;
  private static allPendingOrderMap: Mapp<number, Order>;
  private static idOfOrderToView: number;

  public static setAllPendingOrderLists(pendingOrders: List<Order>): void {
    SocketSupplierPendingOrderData.allPendingOrderLists = pendingOrders;
  }

  public static getAllPendingOrderLists(): List<Order> {
    return SocketSupplierPendingOrderData.allPendingOrderLists;
  }

  public static setAllPendingOrderMap(pendingOrder: Mapp<number, Order>): void {
    SocketSupplierPendingOrderData.allPendingOrderMap = pendingOrder;
  }

  public static getAllPendingOrderMap(): Mapp<number, Order> {
    return SocketSupplierPendingOrderData.allPendingOrderMap;
  }


  public static setIdOfOrderToView(id: number): void {
    SocketSupplierPendingOrderData.idOfOrderToView = id;
  }

  public static getIdOfOrderToView(): number {
    return SocketSupplierPendingOrderData.idOfOrderToView;
  }

  static addAPendingOrder(anOrder: Order): void {

      if (SocketSupplierPendingOrderData.getAllPendingOrderLists() == null || SocketSupplierPendingOrderData.getAllPendingOrderLists().isEmpty()) {

        const newList = new List<Order>();
        newList.add(anOrder);
        SocketSupplierPendingOrderData.setAllPendingOrderLists(newList);

      } else {

        SocketSupplierPendingOrderData.getAllPendingOrderLists().add(anOrder);

    }

  }

  static addAPendingOrderToMap(anOrder: Order, id: number): void {

      if (SocketSupplierPendingOrderData.getAllPendingOrderMap() == null || SocketSupplierPendingOrderData.getAllPendingOrderMap().isEmpty()) {

        const newMap = new Mapp<number, Order>();
        newMap.put(id, anOrder);

        SocketSupplierPendingOrderData.setAllPendingOrderMap(newMap);

      } else {

        SocketSupplierPendingOrderData.getAllPendingOrderMap().put(id, anOrder);

      }
    }


}
