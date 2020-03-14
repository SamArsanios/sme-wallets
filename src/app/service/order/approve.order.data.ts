import { List } from 'src/app/utils/collections/list';
import { Mapp } from 'src/app/utils/collections/map';
import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';




export class ApproveOrderData {

    private static approveOrderLists: List<SupplierOrder>;
    private static approveOrderMap: Mapp<number, SupplierOrder>;
    private static idOfOrderToView: number;


    public static setApproveOrderLists(approveOrders: List<SupplierOrder>): void {
        ApproveOrderData.approveOrderLists = approveOrders;
    }

    public static getApproveOrderLists(): List<SupplierOrder> {
        return ApproveOrderData.approveOrderLists;
    }
    
    public static setApproveOrderMap(approveOrders: Mapp<number, SupplierOrder>): void {
        ApproveOrderData.approveOrderMap = approveOrders;
    }
  

    public static getApproveOrderMap(): Mapp<number, SupplierOrder> {
        return ApproveOrderData.approveOrderMap;
    }


    public static setIdOfOrderToView(id: number): void {
        ApproveOrderData.idOfOrderToView = id;
    }

    public static getIdOfOrderToView(): number {
        return ApproveOrderData.idOfOrderToView;
    }

    static addApproveOrder(anOrder: SupplierOrder): void {

        if (ApproveOrderData.getApproveOrderLists() == null || ApproveOrderData.getApproveOrderLists().isEmpty()) {

            const newList = new List<SupplierOrder>();
            newList.add(anOrder);
            ApproveOrderData.setApproveOrderLists(newList);

        } else {

            ApproveOrderData.getApproveOrderLists().add(anOrder);

        }

    }

    static addApproveOrderToMap(anOrder: SupplierOrder, id: number): void {

        if (ApproveOrderData.getApproveOrderMap() == null || ApproveOrderData.getApproveOrderMap().isEmpty()) {

            const newMap = new Mapp<number, SupplierOrder>();
            newMap.put(id, anOrder);

            ApproveOrderData.setApproveOrderMap(newMap);

        } else {

            ApproveOrderData.getApproveOrderMap().put(id, anOrder);

        }
    }


}
