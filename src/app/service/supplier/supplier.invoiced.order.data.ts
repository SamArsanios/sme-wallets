import { List } from '../../../../src/app/utils/collections/list';

import { Mapp } from '../../../../src/app/utils/collections/map';
import { Order } from 'src/app/model/buyer/order/order-model';

export class SupplierInvoicedOrderData {

    private static SupplierInvoicedOrderList: List<Order>;
    private static SupplierInvoicedOrderMap: Mapp<number, Order>;
    private static idOfOrderToView: number;

    public static setSupplierInvoicedOrderList(allSupplierInvoicedOrders: List<Order>): void {
        SupplierInvoicedOrderData.SupplierInvoicedOrderList = allSupplierInvoicedOrders;
    }

    public static  getSupplierInvoicedOrderList(): List<Order> {
        return SupplierInvoicedOrderData.SupplierInvoicedOrderList;
    }

    public static   setSupplierInvoicedOrderMap(allSupplierOrder: Mapp<number, Order>): void {
        SupplierInvoicedOrderData.SupplierInvoicedOrderMap = allSupplierOrder;
    }

    public static  getSupplierInvoicedOrderMap(): Mapp<number, Order> {
        return SupplierInvoicedOrderData.SupplierInvoicedOrderMap;
    }

    public static setIdOfOrderToView(id: number): void {
        SupplierInvoicedOrderData.idOfOrderToView = id;
    }

    public static getIdOfOrderToView(): number {
        return SupplierInvoicedOrderData.idOfOrderToView;
    }

    static addSupplierInvoicedOrder(anOrder: Order): void {

        if (SupplierInvoicedOrderData. getSupplierInvoicedOrderList() == null || SupplierInvoicedOrderData. getSupplierInvoicedOrderList().isEmpty()) {

            const newList = new List<Order>();
            newList.add(anOrder);
            SupplierInvoicedOrderData.setSupplierInvoicedOrderList(newList);

        } else {

            SupplierInvoicedOrderData. getSupplierInvoicedOrderList().add(anOrder);

        }

    }

    static  addSupplierInvoicedOrderToMap(anOrder: Order, id: number): void {

        if (SupplierInvoicedOrderData. getSupplierInvoicedOrderMap() == null || SupplierInvoicedOrderData. getSupplierInvoicedOrderMap().isEmpty()) {

            const newMap = new Mapp<number, Order>();
            newMap.put(id, anOrder);

            SupplierInvoicedOrderData.  setSupplierInvoicedOrderMap(newMap);

        } else {

            SupplierInvoicedOrderData. getSupplierInvoicedOrderMap().put(id, anOrder);

        }
    }


}
