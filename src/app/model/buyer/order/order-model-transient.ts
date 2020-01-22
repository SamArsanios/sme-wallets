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

  constructor(id: number, user: User, isbnNumber: string, itemName: string, itemDescription: string, billingAddress: string, saleUnit: string, quantity: number,
              department: string, conveyanceMethod: string, deliveryTerms: string, paymentTerms: string, placeOfDelivery: string, deliveryTime: string,
              orderDueDate: string, timePeriod: string, qrCode: string, wallet: Wallet, orderStatus: string, raiseInvoice: string, notificationStatus: string,
              timestampStr: string, timestamp: string) {
    super(id, user, isbnNumber, itemName, itemDescription, billingAddress, saleUnit, quantity, department, conveyanceMethod, deliveryTerms, paymentTerms, placeOfDelivery, deliveryTime, orderDueDate, timePeriod, qrCode, wallet, orderStatus, raiseInvoice, notificationStatus, timestamp);
    this.timestampStr = timestampStr;
  }

}
