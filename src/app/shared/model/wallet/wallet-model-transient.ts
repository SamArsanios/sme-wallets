/**
 * @author Daniel Comboni
 * 
 * a model / entity class WalletTransient.
 */

import { User } from '../user/user-model';
import { Wallet } from './wallet-model';

export class WalletTransient extends Wallet {

    timestampStr: String;

    constructor($id: number, $name: string, $timestamp: string, $user: User, $timestampStr: String) {
        super($id, $name, $timestamp, $user);
        this.timestampStr = $timestampStr;
    }

}