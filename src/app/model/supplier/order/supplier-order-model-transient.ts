/**
 *
 *
 * a model / entity class SupplierOrderTransient.
 */

import { User } from "../../../shared/model/user/user-model";
import { SupplierOrder } from "./SupplierOrder";
import { Order } from "../../buyer/order/order-model";

export class SupplierOrderTransient extends SupplierOrder {
  timestampStr: string;

  constructor(
    id: number,
    order: Order,
    price_per_item: number,
    total_price: number,
    tax_rate: number,
    shipping_charges: number,
    sub_total: number,
    final_total: number,
    timestampStr: string,
    status: string,
    timestamp: string
  ) {
    super(
      id,
      order,
      price_per_item,
      total_price,
      tax_rate,
      shipping_charges,
      sub_total,
      final_total,
      status,
      timestamp
    );
    this.timestampStr = timestampStr;
  }

  static createInstance(): SupplierOrderTransient {
    return new SupplierOrderTransient(
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
  }
}
