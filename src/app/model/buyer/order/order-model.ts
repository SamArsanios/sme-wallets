/**
 * @author Daniel Comboni
 * 
 *  a model / entity class Order
 */

import { User } from '../../../shared/model/user/user-model';
import { Wallet } from '../../../shared/model/wallet/wallet-model';

export class Order {

    id: number;
    user: User;
    isbnNumber: String;
    itemName: String;
    itemDescription: String;
    billingAddress: String;
    saleUnit: String;
    quantity: number;
    department: String;
    conveyanceMethod: String;
    deliveryTerms: String;
    paymentTerms: String;
    placeOfDelivery: String;
    deliveryTime: String;
    orderDueDate: String;
    timePeriod: String;
    qrCode: String;
    wallet: Wallet;
    orderStatus: String;
    raiseInvoice: String;
    notificationStatus: String;


    constructor($id: number, $user: User, $isbnNumber: String, $itemName: String, $itemDescription: String, $billingAddress: String, $saleUnit: String, $quantity: number, $department: String, $conveyanceMethod: String, $deliveryTerms: String, $paymentTerms: String, $placeOfDelivery: String, $deliveryTime: String, $orderDueDate: String, $timePeriod: String, $qrCode: String, $wallet: Wallet, $orderStatus: String, $raiseInvoice: String, $notificationStatus: String) {
        this.id = $id;
        this.user = $user;
        this.isbnNumber = $isbnNumber;
        this.itemName = $itemName;
        this.itemDescription = $itemDescription;
        this.billingAddress = $billingAddress;
        this.saleUnit = $saleUnit;
        this.quantity = $quantity;
        this.department = $department;
        this.conveyanceMethod = $conveyanceMethod;
        this.deliveryTerms = $deliveryTerms;
        this.paymentTerms = $paymentTerms;
        this.placeOfDelivery = $placeOfDelivery;
        this.deliveryTime = $deliveryTime;
        this.orderDueDate = $orderDueDate;
        this.timePeriod = $timePeriod;
        this.qrCode = $qrCode;
        this.wallet = $wallet;
        this.orderStatus = $orderStatus;
        this.raiseInvoice = $raiseInvoice;
        this.notificationStatus = $notificationStatus;
    }


}