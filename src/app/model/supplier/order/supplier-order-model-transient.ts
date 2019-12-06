/**
 * @author Daniel Comboni
 * 
 * a model / entity class SupplierOrderTransient.
 */

import { User } from '../../../shared/model/user/user-model';
import { SupplierOrder } from './SupplierOrder';

export class SupplierOrderTransient extends SupplierOrder {

    timestampStr: string

    constructor($id: number, $user: User, $inviteCode: string, $email: string, $timestamp: string, $timestampStr: string) {
        super($id, $user, $inviteCode, $email, $timestamp);
        this.timestampStr = $timestampStr;
    }

}