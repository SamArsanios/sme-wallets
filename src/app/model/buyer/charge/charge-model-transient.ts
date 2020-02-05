/**
 * @author Daniel Comboni
 *
 * a model / entity class ChargeTransient.
 */

import { Charge } from "./charge-model";
import { User } from "src/app/shared/model/user/user-model";
import { Wallet } from "src/app/shared/model/wallet/wallet-model";

export class ChargeTransient extends Charge {
  timestampStr: string;

  constructor(
    $id: number,
    $withHoldingTax: number,
    $discountAmount: number,
    $transactionFeesSupplier: number,
    $exciseDutySupplier: number,
    $transactionFeesSponsor: number,
    $exciseDutySponsor: number,
    $cbr: number,
    $interestRate: number,
    $timestamp: string,
    $user: User,
    $wallet: Wallet,
    $timestampStr: string
  ) {
    super(
      $id,
      $withHoldingTax,
      $discountAmount,
      $transactionFeesSupplier,
      $exciseDutySupplier,
      $transactionFeesSponsor,
      $exciseDutySponsor,
      $cbr,
      $interestRate,
      $timestamp,
      $user,
      $wallet
    );
    this.timestampStr = $timestampStr;
  }

  static createInstance(): ChargeTransient {
    return new ChargeTransient(null, null, null, null, null, null, null, null, null,
      null, null, null, null);
  }
}
