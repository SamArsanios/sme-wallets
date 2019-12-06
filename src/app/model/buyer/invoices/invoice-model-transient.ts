/**
 * @author Daniel Comboni
 * 
 * a model / entity class InvoiceTransient.
 */

import { User } from '../../../shared/model/user/user-model';
import { Wallet } from '../../../shared/model/wallet/wallet-model';
import { Order } from '../order/order-model';
import { Invoice } from './invoice-model';

export class InvoiceTransient extends Invoice {

    theTimestampStr: string;
    invoiceDateStr: string;
    invoiceDueDateStr: string

    constructor($id: number, $order: Order, $sponsor: User, $wallet: Wallet, $invoiceDate: string, $invoiceDueDate: string, $invoiceStatus: string, $transactionFeePercentage: number, $transactionFees: number, $interestRate: number, $amountToPay: number, $withHoldingAmount: number, $withHoldingTaxPercentage: number, $notificationStatus: string, $buyerNotificationStatus: string, $declineReason: string, $getPaid: Boolean, $authorizeStatus: Boolean, $sponsorStatus: Boolean, $theTimestamp: string, $theTimestampStr: string, $invoiceDateStr: string) {
        super($id, $order, $sponsor, $wallet, $invoiceDate, $invoiceDueDate, $invoiceStatus, $transactionFeePercentage, $transactionFees, $interestRate, $amountToPay, $withHoldingAmount, $withHoldingTaxPercentage, $notificationStatus, $buyerNotificationStatus, $declineReason, $getPaid, $authorizeStatus, $sponsorStatus, $theTimestamp);
        this.theTimestampStr = $theTimestampStr;
        this.invoiceDateStr = $invoiceDateStr;
    }



}
