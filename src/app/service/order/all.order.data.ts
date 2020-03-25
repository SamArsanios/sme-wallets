import { List } from 'src/app/utils/collections/list';
import { Mapp } from 'src/app/utils/collections/map';
import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';




export class AllOrderData {

    private static AllOrderLists: List<SupplierOrder>;
    private static AllOrderMap: Mapp<number, SupplierOrder>;
    private static idOfOrderToView: number;


    public static setAllOrderLists(allOrders: List<SupplierOrder>): void {
        AllOrderData.AllOrderLists = allOrders;
    }

    public static getAllOrderLists(): List<SupplierOrder> {
        return AllOrderData.AllOrderLists;
    }
    
    public static setAllOrderMap(allOrders: Mapp<number, SupplierOrder>): void {
        AllOrderData.AllOrderMap = allOrders;
    }
  

    public static getAllOrderMap(): Mapp<number, SupplierOrder> {
        return AllOrderData.AllOrderMap;
    }


    public static setIdOfOrderToView(id: number): void {
        AllOrderData.idOfOrderToView = id;
    }

    public static getIdOfOrderToView(): number {
        return AllOrderData.idOfOrderToView;
    }

    static addAllOrder(anOrder: SupplierOrder): void {

        if (AllOrderData.getAllOrderLists() == null || AllOrderData.getAllOrderLists().isEmpty()) {

            const newList = new List<SupplierOrder>();
            newList.add(anOrder);
            AllOrderData.setAllOrderLists(newList);

        } else {

            AllOrderData.getAllOrderLists().add(anOrder);

        }

    }

    static addAllOrderToMap(anOrder: SupplierOrder, id: number): void {

        if (AllOrderData.getAllOrderMap() == null || AllOrderData.getAllOrderMap().isEmpty()) {

            const newMap = new Mapp<number, SupplierOrder>();
            newMap.put(id, anOrder);

            AllOrderData.setAllOrderMap(newMap);

        } else {

            AllOrderData.getAllOrderMap().put(id, anOrder);

        }
    }


}
