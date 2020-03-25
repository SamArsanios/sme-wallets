import {List} from '../../utils/collections/list';
// import {Order} from '../../model/buyer/order/order-model';
import {Mapp} from '../../utils/collections/map';
import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';

export class SupplierAllOrderData {

  private static supplierAllOrderLists: List<SupplierOrder>;
  private static supplierAllOrderMap: Mapp<number, SupplierOrder>;
  private static idOfOrderToView: number;

  public static setsupplierAllOrderLists(supplierAllOrders: List<SupplierOrder>): void {
    SupplierAllOrderData.supplierAllOrderLists = supplierAllOrders;
  }

  public static getsupplierAllOrderLists(): List<SupplierOrder> {
    return SupplierAllOrderData.supplierAllOrderLists;
  }

  public static setsupplierAllOrderMap(supplierAllOrder: Mapp<number, SupplierOrder>): void {
    SupplierAllOrderData.supplierAllOrderMap = supplierAllOrder;
  }

  public static getsupplierAllOrderMap(): Mapp<number, SupplierOrder> {
    return SupplierAllOrderData.supplierAllOrderMap;
  }


  public static setIdOfOrderToView(id: number): void {
    SupplierAllOrderData.idOfOrderToView = id;
  }

  public static getIdOfOrderToView(): number {
    return SupplierAllOrderData.idOfOrderToView;
  }

  static addAsupplierAllOrder(anOrder: SupplierOrder): void {

      if (SupplierAllOrderData.getsupplierAllOrderLists() == null || SupplierAllOrderData.getsupplierAllOrderLists().isEmpty()) {

        const newList = new List<SupplierOrder>();
        newList.add(anOrder);
        SupplierAllOrderData.setsupplierAllOrderLists(newList);

      } else {

        SupplierAllOrderData.getsupplierAllOrderLists().add(anOrder);

    }

  }

  static addAsupplierAllOrderToMap(anOrder: SupplierOrder, id: number): void {

      if (SupplierAllOrderData.getsupplierAllOrderMap() == null || SupplierAllOrderData.getsupplierAllOrderMap().isEmpty()) {

        const newMap = new Mapp<number, SupplierOrder>();
        newMap.put(id, anOrder);

        SupplierAllOrderData.setsupplierAllOrderMap(newMap);

      } else {

        SupplierAllOrderData.getsupplierAllOrderMap().put(id, anOrder);

      }
    }


}
