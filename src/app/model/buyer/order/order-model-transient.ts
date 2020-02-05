import { User } from '../../../shared/model/user/user-model';
import { Wallet } from '../../../shared/model/wallet/wallet-model';
import { Order } from './order-model';
export class OrderTransient extends Order {
  timestampStr: string;
  // tslint:disable-next-line:max-line-length
  constructor(id: number, buyer: User, supplier: User, isbnNumber: string, itemName: string, itemDescription: string, billingAddress: string, saleUnit: string, quantity: number,
              // tslint:disable-next-line:max-line-length
              department: string, conveyanceMethod: string, deliveryTerms: string, paymentTerms: string, placeOfDelivery: string, deliveryTime: string,
              // tslint:disable-next-line:max-line-length
              orderDueDate: string, timePeriod: string, qrCode: string, wallet: Wallet, orderStatus: string, raiseInvoice: string, notificationStatus: string,

              timestampStr: string, timestamp: string, industryType: string) {

    // tslint:disable-next-line:max-line-length
    super(id, buyer, supplier, isbnNumber, itemName, itemDescription, billingAddress, saleUnit, quantity, department, conveyanceMethod, deliveryTerms, paymentTerms, placeOfDelivery, deliveryTime, orderDueDate, timePeriod, qrCode, wallet, orderStatus, raiseInvoice, notificationStatus, timestamp, industryType);

    this.timestampStr = timestampStr;
  }
}










