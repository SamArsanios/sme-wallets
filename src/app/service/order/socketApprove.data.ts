import { List } from 'src/app/utils/collections/list';
import { Mapp } from 'src/app/utils/collections/map';
import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';




export class SocketApproveOrderData {

    private static approveOrderLists: List<SupplierOrder>;
    private static approveOrderMap: Mapp<number, SupplierOrder>;
    private static idOfOrderToView: number;


    public static setApproveOrderLists(approveOrders: List<SupplierOrder>): void {
        SocketApproveOrderData.approveOrderLists = approveOrders;
    }

    public static getApproveOrderLists(): List<SupplierOrder> {
        return SocketApproveOrderData.approveOrderLists;
    }
    
    public static setApproveOrderMap(approveOrders: Mapp<number, SupplierOrder>): void {
        SocketApproveOrderData.approveOrderMap = approveOrders;
    }
  

    public static getApproveOrderMap(): Mapp<number, SupplierOrder> {
        return SocketApproveOrderData.approveOrderMap;
    }


    public static setIdOfOrderToView(id: number): void {
        SocketApproveOrderData.idOfOrderToView = id;
    }

    public static getIdOfOrderToView(): number {
        return SocketApproveOrderData.idOfOrderToView;
    }

    static addApproveOrder(anOrder: SupplierOrder): void {

        if (SocketApproveOrderData.getApproveOrderLists() == null || SocketApproveOrderData.getApproveOrderLists().isEmpty()) {

            const newList = new List<SupplierOrder>();
            newList.add(anOrder);
            SocketApproveOrderData.setApproveOrderLists(newList);

        } else {

            SocketApproveOrderData.getApproveOrderLists().add(anOrder);

        }

    }

    static addApproveOrderToMap(anOrder: SupplierOrder, id: number): void {

        if (SocketApproveOrderData.getApproveOrderMap() == null || SocketApproveOrderData.getApproveOrderMap().isEmpty()) {

            const newMap = new Mapp<number, SupplierOrder>();
            newMap.put(id, anOrder);

            SocketApproveOrderData.setApproveOrderMap(newMap);

        } else {

            SocketApproveOrderData.getApproveOrderMap().put(id, anOrder);

        }
    }


}
