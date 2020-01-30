/**
 * @author Daniel Comboni
 *
 *  a model / entity class Order
 */

import { User } from '../../../shared/model/user/user-model';
import { Wallet } from '../../../shared/model/wallet/wallet-model';
import { UserTransient } from 'src/app/shared/model/user/user-model-transient';

export class Order {
  message = 'Hola Mundo!';

  id: number;
  user: User;
  isbnNumber: string;
  itemName: string;
  itemDescription: string;
  billingAddress: string;
  saleUnit: string;
  quantity: number;
  department: string;
  conveyanceMethod: string;
  deliveryTerms: string;
  paymentTerms: string;
  placeOfDelivery: string;
  deliveryTime: string;
  orderDueDate: string;
  timePeriod: string;
  qrCode: string;
  wallet: Wallet;
  orderStatus: string;
  raiseInvoice: string;
  notificationStatus: string;
  timestamp: string;

  constructor(id: number, user: User, isbnNumber: string, itemName: string, itemDescription: string, billingAddress: string, saleUnit:
                // tslint:disable-next-line:max-line-length
                string,   quantity: number, department: string, conveyanceMethod: string, deliveryTerms: string, paymentTerms: string, placeOfDelivery: string,
              // tslint:disable-next-line:max-line-length
              deliveryTime: string, orderDueDate: string, timePeriod: string, qrCode: string, wallet: Wallet, orderStatus: string, raiseInvoice: string,
              notificationStatus: string, timestamp: string) {
    this.id = id;
    this.user = user;
    this.isbnNumber = isbnNumber;
    this.itemName = itemName;
    this.itemDescription = itemDescription;
    this.billingAddress = billingAddress;
    this.saleUnit = saleUnit;
    this.quantity = quantity;
    this.department = department;
    this.conveyanceMethod = conveyanceMethod;
    this.deliveryTerms = deliveryTerms;
    this.paymentTerms = paymentTerms;
    this.placeOfDelivery = placeOfDelivery;
    this.deliveryTime = deliveryTime;
    this.orderDueDate = orderDueDate;
    this.timePeriod = timePeriod;
    this.qrCode = qrCode;
    this.wallet = wallet;
    this.orderStatus = orderStatus;
    this.raiseInvoice = raiseInvoice;
    this.notificationStatus = notificationStatus;
    this.timestamp = timestamp;
  }


}
