/**
 * @author Daniel Comboni
 * 
 * a model / entity class InviteTransient.
 */

import { User } from '../../../shared/model/user/user-model';
import { Invite } from './invite-model';

export class InviteTransient extends Invite {

    timestampStr: string;

    constructor($id: number, $user: User, $inviteCode: string, $name: string, $email: string, $timestamp: string, $timestampStr: string) {
        super($id, $user, $inviteCode, $name, $email, $timestamp);
        this.timestampStr = $timestampStr;
    }

}

