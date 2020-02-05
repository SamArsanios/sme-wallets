/**
 * @author Daniel Comboni
 * 
 * a model / entity class Invoice.
 */

import { User } from '../../../shared/model/user/user-model';
import { Wallet } from '../../../shared/model/wallet/wallet-model';
import { Order } from '../order/order-model';

export class Invoice {

         id: number;
         order: Order;
         sponsor: User;
         wallet: Wallet;
         invoiceDate: string;
         invoiceDueDate: string;
         invoiceStatus: string;
         transactionFeePercentage: number;
         transactionFees: number;
         interestRate: number;
         amountToPay: number;
         withHoldingAmount: number;
         withHoldingTaxPercentage: number;
         notificationStatus: string;
         buyerNotificationStatus: string;
         declineReason: string;
         getPaid: Boolean;
         authorizeStatus: Boolean;
         sponsorStatus: Boolean;
         theTimestamp: string;


        constructor($id: number, $order: Order, $sponsor: User, $wallet: Wallet, $invoiceDate: string, $invoiceDueDate: string, $invoiceStatus: string, $transactionFeePercentage: number, $transactionFees: number, $interestRate: number, $amountToPay: number, $withHoldingAmount: number, $withHoldingTaxPercentage: number, $notificationStatus: string, $buyerNotificationStatus: string, $declineReason: string, $getPaid: Boolean, $authorizeStatus: Boolean, $sponsorStatus: Boolean, $theTimestamp: string) {
                this.id = $id;
                this.order = $order;
                this.sponsor = $sponsor;
                this.wallet = $wallet;
                this.invoiceDate = $invoiceDate;
                this.invoiceDueDate = $invoiceDueDate;
                this.invoiceStatus = $invoiceStatus;
                this.transactionFeePercentage = $transactionFeePercentage;
                this.transactionFees = $transactionFees;
                this.interestRate = $interestRate;
                this.amountToPay = $amountToPay;
                this.withHoldingAmount = $withHoldingAmount;
                this.withHoldingTaxPercentage = $withHoldingTaxPercentage;
                this.notificationStatus = $notificationStatus;
                this.buyerNotificationStatus = $buyerNotificationStatus;
                this.declineReason = $declineReason;
                this.getPaid = $getPaid;
                this.authorizeStatus = $authorizeStatus;
                this.sponsorStatus = $sponsorStatus;
                this.theTimestamp = $theTimestamp;
        }
        static createInstance(): Invoice{
                return new Invoice(null, null, null, null, null, null, null, null, null,
                    null, null, null, null, null, null, null, null, null, null, null);
            }
}
