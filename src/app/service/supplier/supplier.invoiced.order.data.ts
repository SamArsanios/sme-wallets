import { List } from '../../../../src/app/utils/collections/list';

import { Mapp } from '../../../../src/app/utils/collections/map';
import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';

export class SupplierInvoicedOrderData {

    private static SupplierInvoicedOrderList: List<SupplierOrder>;
    private static SupplierInvoicedOrderMap: Mapp<number, SupplierOrder>;
    private static idOfOrderToView: number;

    public static setSupplierInvoicedOrderList(allSupplierInvoicedOrders: List<SupplierOrder>): void {
        SupplierInvoicedOrderData.SupplierInvoicedOrderList = allSupplierInvoicedOrders;
    }

    public static  getSupplierInvoicedOrderList(): List<SupplierOrder> {
        return SupplierInvoicedOrderData.SupplierInvoicedOrderList;
    }

    public static   setSupplierInvoicedOrderMap(allSupplierOrder: Mapp<number, SupplierOrder>): void {
        SupplierInvoicedOrderData.SupplierInvoicedOrderMap = allSupplierOrder;
    }

    public static  getSupplierInvoicedOrderMap(): Mapp<number, SupplierOrder> {
        return SupplierInvoicedOrderData.SupplierInvoicedOrderMap;
    }

    public static setIdOfOrderToView(id: number): void {
        SupplierInvoicedOrderData.idOfOrderToView = id;
    }

    public static getIdOfOrderToView(): number {
        return SupplierInvoicedOrderData.idOfOrderToView;
    }

    static addSupplierInvoicedOrder(anOrder: SupplierOrder): void {

        if (SupplierInvoicedOrderData. getSupplierInvoicedOrderList() == null || SupplierInvoicedOrderData. getSupplierInvoicedOrderList().isEmpty()) {

            const newList = new List<SupplierOrder>();
            newList.add(anOrder);
            SupplierInvoicedOrderData.setSupplierInvoicedOrderList(newList);

        } else {

            SupplierInvoicedOrderData. getSupplierInvoicedOrderList().add(anOrder);

        }

    }

    static  addSupplierInvoicedOrderToMap(anOrder: SupplierOrder, id: number): void {

        if (SupplierInvoicedOrderData. getSupplierInvoicedOrderMap() == null || SupplierInvoicedOrderData. getSupplierInvoicedOrderMap().isEmpty()) {

            const newMap = new Mapp<number, SupplierOrder>();
            newMap.put(id, anOrder);

            SupplierInvoicedOrderData.  setSupplierInvoicedOrderMap(newMap);

        } else {

            SupplierInvoicedOrderData. getSupplierInvoicedOrderMap().put(id, anOrder);

        }
    }


}
