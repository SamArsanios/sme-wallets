import { User } from './user-model';

/**
 * @author Daniel Comboni
 * 
 * a model / entity class UserTransient.
 */

export class UserTransient extends User {

    emailVerifiedAtStr: String;

    constructor($id: number, $email: string,$emailVerifiedAtStr: string, $password: string, $phoneNumber: string, $refUserId: number, $name: string, $userType:string, $emailVerifiedAt: string) {
        super($id, $email,  $emailVerifiedAt, $password, $phoneNumber, $refUserId, $name, $userType);
        this.emailVerifiedAtStr = $emailVerifiedAtStr;
    }

}