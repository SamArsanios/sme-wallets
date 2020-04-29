import { List } from 'src/app/utils/collections/list';
import { Mapp } from 'src/app/utils/collections/map';
import { Wallet } from 'src/app/shared/model/wallet/wallet-model';




export class AllWalletsData {

    private static AllOrderLists: List<Wallet>;
    private static AllOrderMap: Mapp<number, Wallet>;
    private static idOfOrderToView: number;


    public static setAllOrderLists(allOrders: List<Wallet>): void {
        AllWalletsData.AllOrderLists = allOrders;
    }

    public static getAllOrderLists(): List<Wallet> {
        return AllWalletsData.AllOrderLists;
    }
    
    public static setAllOrderMap(allOrders: Mapp<number, Wallet>): void {
        AllWalletsData.AllOrderMap = allOrders;
    }
  

    public static getAllOrderMap(): Mapp<number, Wallet> {
        return AllWalletsData.AllOrderMap;
    }


    public static setIdOfOrderToView(id: number): void {
        AllWalletsData.idOfOrderToView = id;
    }

    public static getIdOfOrderToView(): number {
        return AllWalletsData.idOfOrderToView;
    }

    static addAllOrder(anOrder: Wallet): void {

        if (AllWalletsData.getAllOrderLists() == null || AllWalletsData.getAllOrderLists().isEmpty()) {

            const newList = new List<Wallet>();
            newList.add(anOrder);
            AllWalletsData.setAllOrderLists(newList);

        } else {

            AllWalletsData.getAllOrderLists().add(anOrder);

        }

    }

    static addAllOrderToMap(anOrder: Wallet, id: number): void {

        if (AllWalletsData.getAllOrderMap() == null || AllWalletsData.getAllOrderMap().isEmpty()) {

            const newMap = new Mapp<number, Wallet>();
            newMap.put(id, anOrder);

            AllWalletsData.setAllOrderMap(newMap);

        } else {

            AllWalletsData.getAllOrderMap().put(id, anOrder);

        }
    }


}
