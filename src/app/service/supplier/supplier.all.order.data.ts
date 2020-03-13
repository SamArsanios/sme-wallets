import {List} from '../../utils/collections/list';
import {Order} from '../../model/buyer/order/order-model';
import {Mapp} from '../../utils/collections/map';

export class SupplierAllOrderData {

  private static supplierAllOrderLists: List<Order>;
  private static supplierAllOrderMap: Mapp<number, Order>;
  private static idOfOrderToView: number;

  public static setsupplierAllOrderLists(supplierAllOrders: List<Order>): void {
    SupplierAllOrderData.supplierAllOrderLists = supplierAllOrders;
  }

  public static getsupplierAllOrderLists(): List<Order> {
    return SupplierAllOrderData.supplierAllOrderLists;
  }

  public static setsupplierAllOrderMap(supplierAllOrder: Mapp<number, Order>): void {
    SupplierAllOrderData.supplierAllOrderMap = supplierAllOrder;
  }

  public static getsupplierAllOrderMap(): Mapp<number, Order> {
    return SupplierAllOrderData.supplierAllOrderMap;
  }


  public static setIdOfOrderToView(id: number): void {
    SupplierAllOrderData.idOfOrderToView = id;
  }

  public static getIdOfOrderToView(): number {
    return SupplierAllOrderData.idOfOrderToView;
  }

  static addAsupplierAllOrder(anOrder: Order): void {

      if (SupplierAllOrderData.getsupplierAllOrderLists() == null || SupplierAllOrderData.getsupplierAllOrderLists().isEmpty()) {

        const newList = new List<Order>();
        newList.add(anOrder);
        SupplierAllOrderData.setsupplierAllOrderLists(newList);

      } else {

        SupplierAllOrderData.getsupplierAllOrderLists().add(anOrder);

    }

  }

  static addAsupplierAllOrderToMap(anOrder: Order, id: number): void {

      if (SupplierAllOrderData.getsupplierAllOrderMap() == null || SupplierAllOrderData.getsupplierAllOrderMap().isEmpty()) {

        const newMap = new Mapp<number, Order>();
        newMap.put(id, anOrder);

        SupplierAllOrderData.setsupplierAllOrderMap(newMap);

      } else {

        SupplierAllOrderData.getsupplierAllOrderMap().put(id, anOrder);

      }
    }


}
