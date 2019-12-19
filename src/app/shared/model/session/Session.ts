/**
 * @author Daniel Comboni
 * 
 * a model / entity class Session.
 */

import { User } from '../user/user-model'

export class Session {

        id: number;
        userId: User;
        ipAddress: string;
        userAgent: string;
        payload: string;
        lastActivity: number
        timestamp: string

        constructor($id: number, $userId: User, $ipAddress: string, $userAgent: string, $payload: string, $timestamp: string) {
                this.id = $id;
                this.userId = $userId;
                this.ipAddress = $ipAddress;
                this.userAgent = $userAgent;
                this.payload = $payload;
                this.timestamp = $timestamp;
        }

}