/**
 * @author Daniel Comboni
 *
 * a model / entity class SupplierOrder.
 */

import { User } from "../../../shared/model/user/user-model";

export class SupplierOrder {
  id: number;
  user: User;
  inviteCode: string;
  name: string;
  email: string;
  timestamp: string;

  constructor(
    id: number,
    user: User,
    inviteCode: string,
    email: string,
    timestamp: string
  ) {
    this.id = id;
    this.user = user;
    this.inviteCode = inviteCode;
    this.email = email;
    this.timestamp = timestamp;
  }

  static createInstance(): SupplierOrder {
    const inst = new SupplierOrder(null, null, null, null, null);
    return inst;
  }
}
