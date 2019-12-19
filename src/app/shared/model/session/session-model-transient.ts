/**
 * @author Daniel Comboni
 * 
 * a model / entity class SessionTransient.
 */

import { User } from '../user/user-model'
import { Session } from './Session';

export class SessionTransient extends Session {

    timestampStr: string

    constructor($id: number, $userId: User, $ipAddress: string, $userAgent: string, $payload: string, $timestamp: string, $timestampStr: string) {
        super($id, $userId, $ipAddress, $userAgent, $payload, $timestamp);
        this.timestampStr = $timestampStr;
    }

}