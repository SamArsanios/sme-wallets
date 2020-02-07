import { List } from 'src/app/utils/collections/list';
import { Order } from 'src/app/model/buyer/order/order-model';
import { Mapp } from 'src/app/utils/collections/map';

export class ApproveOrderData {

    private static approveOrderLists: List<Order>;
    private static approveOrderMap: Mapp<number, Order>;
    private static idOfOrderToView: number;

    public static setApproveOrderLists(approveOrders: List<Order>): void {
        ApproveOrderData.approveOrderLists = approveOrders;
    }

    public static getApproveOrderLists(): List<Order> {
        return ApproveOrderData.approveOrderLists;
    }

    public static setApproveOrderMap(approveOrders: Mapp<number, Order>): void {
        ApproveOrderData.approveOrderMap = approveOrders;
    }

    public static getApproveOrderMap(): Mapp<number, Order> {
        return ApproveOrderData.approveOrderMap;
    }

    public static setIdOfOrderToView(id: number): void {
        ApproveOrderData.idOfOrderToView = id;
    }

    public static getIdOfOrderToView(): number {
        return ApproveOrderData.idOfOrderToView;
    }

    static addApproveOrder(anOrder: Order): void {

        if (ApproveOrderData.getApproveOrderLists() == null || ApproveOrderData.getApproveOrderLists().isEmpty()) {

            const newList = new List<Order>();
            newList.add(anOrder);
            ApproveOrderData.setApproveOrderLists(newList);

        } else {

            ApproveOrderData.getApproveOrderLists().add(anOrder);

        }

    }

    static addApproveOrderToMap(anOrder: Order, id: number): void {

        if (ApproveOrderData.getApproveOrderMap() == null || ApproveOrderData.getApproveOrderMap().isEmpty()) {

            const newMap = new Mapp<number, Order>();
            newMap.put(id, anOrder);

            ApproveOrderData.setApproveOrderMap(newMap);

        } else {

            ApproveOrderData.getApproveOrderMap().put(id, anOrder);

        }
    }


}
