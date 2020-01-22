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

<<<<<<< HEAD
    constructor(id: number, buyer: User, supplier: User, isbnNumber: string, itemName: string, itemDescription: string, billingAddress: string, saleUnit: string, quantity: number, department: string, conveyanceMethod: string, deliveryTerms: string, paymentTerms: string, placeOfDelivery: string, deliveryTime: string, orderDueDate: string, time_period: string, qrCode: string, wallet: Wallet, orderStatus: string, raiseInvoice: string, notificationStatus: string, industryType: string
        , timestampStr: string
    ) {
        super(id, buyer, supplier, isbnNumber, itemName, itemDescription, billingAddress, saleUnit, quantity, department, conveyanceMethod, deliveryTerms, paymentTerms, placeOfDelivery, deliveryTime, orderDueDate, time_period, qrCode, wallet, orderStatus, raiseInvoice, notificationStatus, industryType);
        this.timestampStr = timestampStr;
    }
=======
  constructor(id: number, user: User, isbnNumber: string, itemName: string, itemDescription: string, billingAddress: string, saleUnit: string, quantity: number,
              department: string, conveyanceMethod: string, deliveryTerms: string, paymentTerms: string, placeOfDelivery: string, deliveryTime: string,
              orderDueDate: string, timePeriod: string, qrCode: string, wallet: Wallet, orderStatus: string, raiseInvoice: string, notificationStatus: string,
              timestampStr: string, timestamp: string) {
    super(id, user, isbnNumber, itemName, itemDescription, billingAddress, saleUnit, quantity, department, conveyanceMethod, deliveryTerms, paymentTerms, placeOfDelivery, deliveryTime, orderDueDate, timePeriod, qrCode, wallet, orderStatus, raiseInvoice, notificationStatus, timestamp);
    this.timestampStr = timestampStr;
  }
>>>>>>> d16bef5e7d2ec5e0cb8fefe7fd9cba691ee0783a

}
