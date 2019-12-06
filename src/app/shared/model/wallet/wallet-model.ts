/**
 * @author Daniel Comboni
 * 
 * a model / entity class Wallet.
 */

import { User } from '../user/user-model';

export class Wallet {

        id: number;
        name: string;
        timestamp: string;
        user: User;

        constructor($id: number, $name: string, $timestamp: string, $user: User) {
                this.id = $id;
                this.name = $name;
                this.timestamp = $timestamp;
                this.user = $user;
        }

}