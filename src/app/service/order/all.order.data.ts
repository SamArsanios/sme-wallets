import { List } from 'src/app/utils/collections/list';
import { Order } from 'src/app/model/buyer/order/order-model';
import { Mapp } from 'src/app/utils/collections/map';

export class AllOrderData {

    private static allAllOrderLists: List<Order>;
    private static allAllOrderMap: Mapp<number, Order>;
    private static idOfOrderToView: number;

    public static setAllAllOrderLists(allOrders: List<Order>): void {
        AllOrderData.allAllOrderLists = allOrders;
    }

    public static getAllAllOrderLists(): List<Order> {
        return AllOrderData.allAllOrderLists;
    }

    public static setAllAllOrderMap(allOrder: Mapp<number, Order>): void {
        AllOrderData.allAllOrderMap = allOrder;
    }

    public static getAllAllOrderMap(): Mapp<number, Order> {
        return AllOrderData.allAllOrderMap;
    }

    public static setIdOfOrderToView(id: number): void {
        AllOrderData.idOfOrderToView = id;
    }

    public static getIdOfOrderToView(): number {
        return AllOrderData.idOfOrderToView;
    }

    static addAAllOrder(anOrder: Order): void {

        if (AllOrderData.getAllAllOrderLists() == null || AllOrderData.getAllAllOrderLists().isEmpty()) {

            const newList = new List<Order>();
            newList.add(anOrder);
            AllOrderData.setAllAllOrderLists(newList);

        } else {

            AllOrderData.getAllAllOrderLists().add(anOrder);

        }

    }

    static addAAllOrderToMap(anOrder: Order, id: number): void {

        if (AllOrderData.getAllAllOrderMap() == null || AllOrderData.getAllAllOrderMap().isEmpty()) {

            const newMap = new Mapp<number, Order>();
            newMap.put(id, anOrder);

            AllOrderData.setAllAllOrderMap(newMap);

        } else {

            AllOrderData.getAllAllOrderMap().put(id, anOrder);

        }
    }


}
