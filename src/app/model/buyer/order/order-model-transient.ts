/**
 * @author Daniel Comboni
 * 
 *  a model / entity class OrderTransient
 */
import { User } from '../../../shared/model/user/user-model';
import { Wallet } from '../../../shared/model/wallet/wallet-model';
import { Order } from './order-model';


export class OrderTransient extends Order {

    timestampStr: string;

    constructor($id: number, $user: User, $isbnNumber: String, $itemName: String, $itemDescription: String, $billingAddress: String, $saleUnit: String, $quantity: number, $department: String, $conveyanceMethod: String, $deliveryTerms: String, $paymentTerms: String, $placeOfDelivery: String, $deliveryTime: String, $orderDueDate: String, $timePeriod: String, $qrCode: String, $wallet: Wallet, $orderStatus: String, $raiseInvoice: String, $notificationStatus: String, $timestampStr: string) {
        super($id, $user, $isbnNumber, $itemName, $itemDescription, $billingAddress, $saleUnit, $quantity, $department, $conveyanceMethod, $deliveryTerms, $paymentTerms, $placeOfDelivery, $deliveryTime, $orderDueDate, $timePeriod, $qrCode, $wallet, $orderStatus, $raiseInvoice, $notificationStatus);
        this.timestampStr = $timestampStr;
    }

}