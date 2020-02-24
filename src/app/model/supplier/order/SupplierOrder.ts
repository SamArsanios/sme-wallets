/**
 * @author Samson Kibrom
 *
 * a model / entity class SupplierOrder.
 */

import { User } from "../../../shared/model/user/user-model";
import { Order } from "../../buyer/order/order-model";
// import { stat } from "fs";

export class SupplierOrder {
  id: number;
  order: Order;
  pricePerItem: number;
  totalPrice: number;
  taxRate: number;
  shippingCharges: number;
  subTotal: number;
  finalTotal: number;
  status: string;
  timestamp: string;

  constructor(
    id: number,
    order: Order,
    pricePerItem: number,
    totalPrice: number,
    taxRate: number,
    shippingCharges: number,
    subTotal: number,
    finalTotal: number,
    status: string,
    timestamp: string
  ) {
    this.id = id;
    this.order = order;
    this.pricePerItem = pricePerItem;
    this.totalPrice = totalPrice;
    this.taxRate = taxRate;
    this.shippingCharges = shippingCharges;
    this.subTotal = subTotal;
    this.finalTotal = finalTotal;
    this.status = status;
    this.timestamp = timestamp;
  }

  static createInstance(): SupplierOrder {
    const instance = new SupplierOrder(
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
