import { List } from '../../../../src/app/utils/collections/list';
import { Mapp } from '../../../../src/app/utils/collections/map';
import { Invite } from 'src/app/model/buyer/invites/invite-model';

export class BuyerInviteData {

    private static buyerInviteList: List<Invite>;
    private static buyerInviteMap: Mapp<number, Invite>;
    private static idOfInviteToView: number;

    public static setbuyerInviteList(allbuyerInvites): void {
        BuyerInviteData.buyerInviteList = allbuyerInvites;
    }

    public static  getbuyerInviteList(): List<Invite> {
        return BuyerInviteData.buyerInviteList;
    }

    public static   setbuyerInviteMap(allbuyerInvites: Mapp<number, Invite>): void {
        BuyerInviteData.buyerInviteMap = allbuyerInvites;
    }

    public static  getbuyerInviteMap(): Mapp<number, Invite> {
        return BuyerInviteData.buyerInviteMap;
    }

    public static setidOfInviteToView(id: number): void {
        BuyerInviteData.idOfInviteToView = id;
    }

    public static getidOfInviteToView(): number {
        return BuyerInviteData.idOfInviteToView;
    }

    static addAnInvite(anInvite: Invite): void {

        if (BuyerInviteData. getbuyerInviteList() == null || BuyerInviteData. getbuyerInviteList().isEmpty()) {

            const newList = new List<Invite>();
            newList.add(anInvite);
            BuyerInviteData.setbuyerInviteList(newList);

        } else {

            BuyerInviteData. getbuyerInviteList().add(anInvite);

        }

    }

    static  addAnInviteToMap(anInvite: Invite, id: number): void {

        if (BuyerInviteData. getbuyerInviteMap() == null || BuyerInviteData. getbuyerInviteMap().isEmpty()) {

            const newMap = new Mapp<number, Invite>();
            newMap.put(id, anInvite);

            BuyerInviteData.  setbuyerInviteMap(newMap);

        } else {

            BuyerInviteData. getbuyerInviteMap().put(id, anInvite);

        }
    }


}
