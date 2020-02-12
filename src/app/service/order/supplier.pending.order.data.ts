import { List } from '../../../../src/app/utils/collections/list';

import { Order } from '../../../../src/app/model/buyer/order/order-model';
import { Mapp } from '../../../../src/app/utils/collections/map';

export class SupplierPendingOrderData {

    private static supplierPendingOrderList: List<Order>;
    private static supplierPendingOrderMap: Mapp<number, Order>;
    private static idOfOrderToView: number;

    public static setSupplierPendingOrderList(allSupplierOrders: List<Order>): void {
        SupplierPendingOrderData.supplierPendingOrderList = allSupplierOrders;
    }

    public static  getSupplierPendingOrderList(): List<Order> {
        return SupplierPendingOrderData.supplierPendingOrderList;
    }

    public static   setSupplierPendingOrderMap(allSupplierOrder: Mapp<number, Order>): void {
        SupplierPendingOrderData.supplierPendingOrderMap = allSupplierOrder;
    }

    public static  getSupplierPendingOrderMap(): Mapp<number, Order> {
        return SupplierPendingOrderData.supplierPendingOrderMap;
    }

    public static setIdOfOrderToView(id: number): void {
        SupplierPendingOrderData.idOfOrderToView = id;
    }

    public static getIdOfOrderToView(): number {
        return SupplierPendingOrderData.idOfOrderToView;
    }

    static addSupplierPendingOrder(anOrder: Order): void {

        if (SupplierPendingOrderData. getSupplierPendingOrderList() == null || SupplierPendingOrderData. getSupplierPendingOrderList().isEmpty()) {

            const newList = new List<Order>();
            newList.add(anOrder);
            SupplierPendingOrderData.setSupplierPendingOrderList(newList);

        } else {

            SupplierPendingOrderData. getSupplierPendingOrderList().add(anOrder);

        }

    }

    static  addSupplierPendingOrderToMap(anOrder: Order, id: number): void {

        if (SupplierPendingOrderData. getSupplierPendingOrderMap() == null || SupplierPendingOrderData. getSupplierPendingOrderMap().isEmpty()) {

            const newMap = new Mapp<number, Order>();
            newMap.put(id, anOrder);

            SupplierPendingOrderData.  setSupplierPendingOrderMap(newMap);

        } else {

            SupplierPendingOrderData. getSupplierPendingOrderMap().put(id, anOrder);

        }
    }


}
