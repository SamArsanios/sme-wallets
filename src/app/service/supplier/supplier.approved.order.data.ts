import {List} from '../../utils/collections/list';
// import {Order} from '../../model/buyer/order/order-model';
import {Mapp} from '../../utils/collections/map';
import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';

export class SupplierApprovedOrdersData {

  private static supplierApprovedOrdersLists: List<SupplierOrder>;
  private static supplierApprovedOrdersMap: Mapp<number, SupplierOrder>;
  private static idOfOrderToView: number;

  public static setsupplierApprovedOrdersLists(supplierApprovedOrderss: List<SupplierOrder>): void {
    SupplierApprovedOrdersData.supplierApprovedOrdersLists = supplierApprovedOrderss;
  }

  public static getsupplierApprovedOrdersLists(): List<SupplierOrder> {
    return SupplierApprovedOrdersData.supplierApprovedOrdersLists;
  }

  public static setsupplierApprovedOrdersMap(supplierApprovedOrders: Mapp<number, SupplierOrder>): void {
    SupplierApprovedOrdersData.supplierApprovedOrdersMap = supplierApprovedOrders;
  }

  public static getsupplierApprovedOrdersMap(): Mapp<number, SupplierOrder> {
    return SupplierApprovedOrdersData.supplierApprovedOrdersMap;
  }


  public static setIdOfOrderToView(id: number): void {
    SupplierApprovedOrdersData.idOfOrderToView = id;
  }

  public static getIdOfOrderToView(): number {
    return SupplierApprovedOrdersData.idOfOrderToView;
  }

  static addAsupplierApprovedOrders(anOrder: SupplierOrder): void {

      if (SupplierApprovedOrdersData.getsupplierApprovedOrdersLists() == null || SupplierApprovedOrdersData.getsupplierApprovedOrdersLists().isEmpty()) {

        const newList = new List<SupplierOrder>();
        newList.add(anOrder);
        SupplierApprovedOrdersData.setsupplierApprovedOrdersLists(newList);

      } else {

        SupplierApprovedOrdersData.getsupplierApprovedOrdersLists().add(anOrder);

    }

  }

  static addAsupplierApprovedOrdersToMap(anOrder: SupplierOrder, id: number): void {

      if (SupplierApprovedOrdersData.getsupplierApprovedOrdersMap() == null || SupplierApprovedOrdersData.getsupplierApprovedOrdersMap().isEmpty()) {

        const newMap = new Mapp<number, SupplierOrder>();
        newMap.put(id, anOrder);

        SupplierApprovedOrdersData.setsupplierApprovedOrdersMap(newMap);

      } else {

        SupplierApprovedOrdersData.getsupplierApprovedOrdersMap().put(id, anOrder);

      }
    }


}
