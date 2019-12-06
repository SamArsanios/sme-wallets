/**
 * @author Daniel Comboni
 * 
 * a model / entity class Charge.
 */

import { User } from '../../../shared/model/user/user-model';
import { Wallet } from '../../../shared/model/wallet/wallet-model';

export class Charge {

        id: number;
        withHoldingTax: number;
        discountAmount: number;
        transactionFeesSupplier: number;
        exciseDutySupplier: number;
        transactionFeesSponsor: number;
        exciseDutySponsor: number;
        cbr: number;
        interestRate: number;
        timestamp: string;
        user: User;
        wallet: Wallet;


        constructor($id: number, $withHoldingTax: number, $discountAmount: number, $transactionFeesSupplier: number, $exciseDutySupplier: number, $transactionFeesSponsor: number, $exciseDutySponsor: number, $cbr: number, $interestRate: number, $timestamp: string, $user: User, $wallet: Wallet) {
                this.id = $id;
                this.withHoldingTax = $withHoldingTax;
                this.discountAmount = $discountAmount;
                this.transactionFeesSupplier = $transactionFeesSupplier;
                this.exciseDutySupplier = $exciseDutySupplier;
                this.transactionFeesSponsor = $transactionFeesSponsor;
                this.exciseDutySponsor = $exciseDutySponsor;
                this.cbr = $cbr;
                this.interestRate = $interestRate;
                this.timestamp = $timestamp;
                this.user = $user;
                this.wallet = $wallet;
        }

}