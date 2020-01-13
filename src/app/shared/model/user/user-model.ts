/**
 * @author Daniel Comboni
 * 
 * a model / entity class User.
 */

export class User {

    id: number;
    email: string;
    password: string;
    phoneNumber: string;
    refUserId: number;
    name: string;
    userType: string;
    emailVerifiedAt: string;


    constructor($id: number, $email: string, $password: string, $phoneNumber: string, $refUserId: number, $name: string, $userType:string, $emailVerifiedAt:string) {
        this.id = $id;
        this.email = $email;
        this.password = $password;
        this.phoneNumber = $phoneNumber;
        this.refUserId = $refUserId;
        this.name = $name;
        this.userType = $userType;
        this.emailVerifiedAt = $emailVerifiedAt;
    }

}