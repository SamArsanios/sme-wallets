import { List } from 'src/app/utils/collections/list';
import { Mapp } from 'src/app/utils/collections/map';
// import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';
import { Order } from 'src/app/model/buyer/order/order-model';




export class AllOrderData {

    private static AllOrderLists: List<Order>;
    private static AllOrderMap: Mapp<number, Order>;
    private static idOfOrderToView: number;


    public static setAllOrderLists(allOrders: List<Order>): void {
        AllOrderData.AllOrderLists = allOrders;
    }

    public static getAllOrderLists(): List<Order> {
        return AllOrderData.AllOrderLists;
    }
    
    public static setAllOrderMap(allOrders: Mapp<number, Order>): void {
        AllOrderData.AllOrderMap = allOrders;
    }
  

    public static getAllOrderMap(): Mapp<number, Order> {
        return AllOrderData.AllOrderMap;
    }


    public static setIdOfOrderToView(id: number): void {
        AllOrderData.idOfOrderToView = id;
    }

    public static getIdOfOrderToView(): number {
        return AllOrderData.idOfOrderToView;
    }

    static addAllOrder(anOrder: Order): void {

        if (AllOrderData.getAllOrderLists() == null || AllOrderData.getAllOrderLists().isEmpty()) {

            const newList = new List<Order>();
            newList.add(anOrder);
            AllOrderData.setAllOrderLists(newList);

        } else {

            AllOrderData.getAllOrderLists().add(anOrder);

        }

    }

    static addAllOrderToMap(anOrder: Order, id: number): void {

        if (AllOrderData.getAllOrderMap() == null || AllOrderData.getAllOrderMap().isEmpty()) {

            const newMap = new Mapp<number, Order>();
            newMap.put(id, anOrder);

            AllOrderData.setAllOrderMap(newMap);

        } else {

            AllOrderData.getAllOrderMap().put(id, anOrder);

        }
    }


}
