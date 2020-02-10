/**
 * @author Daniel Comboni
 * 
 * a model / entity class Wallet.
 */

import { User } from '../user/user-model';
import { WalletTransient } from './wallet-model-transient';

export class Wallet {

        id: number;
        name: string;
        timestamp: string;
        user: User;

        constructor(id: number, name: string, timestamp: string, user: User) {
                this.id = id;
                this.name = name;
                this.timestamp = timestamp;
                this.user = user;
        }

        static createInstance(): WalletTransient{
                return new WalletTransient(null, null, null, null,null);
              }

}