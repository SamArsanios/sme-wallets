/**
 * @author Daniel Comboni
 * 
 * a model / entity class User.
 */

export class User {

    id: number;
    email: string;
    emailVerifiedAt: String;
    password: String;
    phoneNumber: String;
    refUserId: number;
    name: String;


    constructor($id: number, $email: string, $emailVerifiedAt: String, $password: String, $phoneNumber: String, $refUserId: number, $name: String) {
        this.id = $id;
        this.email = $email;
        this.emailVerifiedAt = $emailVerifiedAt;
        this.password = $password;
        this.phoneNumber = $phoneNumber;
        this.refUserId = $refUserId;
        this.name = $name;
    }

}