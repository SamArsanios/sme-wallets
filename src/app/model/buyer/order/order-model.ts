import { User } from "../../../shared/model/user/user-model";
import { Wallet } from "../../../shared/model/wallet/wallet-model";
import { UserTransient } from "src/app/shared/model/user/user-model-transient";
export class Order {
  id: number;
  buyer: User;
  supplier: User;
  isbnNumber: string;
  itemName: string;
  itemDescription: string;
  billingAddress: string;
  saleUnit: number;
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

  industryType: string;
  // tslint:disable-next-line:max-line-length
  constructor(
    id: number,
    buyer: User,
    supplier: User,
    isbnNumber: string,
    itemName: string,
    itemDescription: string,
    billingAddress: string,
    saleUnit: // tslint:disable-next-line:max-line-length align
    number,
    quantity: number,
    department: string,
    conveyanceMethod: string,
    deliveryTerms: string,
    paymentTerms: string,
    placeOfDelivery: string,
    // tslint:disable-next-line:max-line-length
    deliveryTime: string,
    orderDueDate: string,
    timePeriod: string,
    qrCode: string,
    wallet: Wallet,
    orderStatus: string,
    raiseInvoice: string,
    notificationStatus: string,
    timestamp: string,
    industryType: string
  ) {
    this.id = id;
    this.buyer = buyer;
    this.supplier = supplier;
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
    this.industryType = industryType;
  }

  static createInstance(): Order {
    let instance = new Order(
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    );
    return instance;
  }
}
