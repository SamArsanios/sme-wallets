import { User } from './user-model';

/**
 * @author Daniel Comboni
 * 
 * a model / entity class UserTransient.
 */

export class UserTransient extends User {

    emailVerifiedAtStr: String;

    constructor($id: number, $email: string, $emailVerifiedAt: String, $emailVerifiedAtStr: String, $password: String, $phoneNumber: String, $refUserId: number, $name: String) {
        super($id, $email, $emailVerifiedAt, $password, $phoneNumber, $refUserId, $name);
        this.emailVerifiedAtStr = $emailVerifiedAtStr;
    }

}