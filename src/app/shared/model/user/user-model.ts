/**
 * @author Daniel Comboni
 * 
 * a model / entity class User.
 */

export class User {

    id: number;
    email: string; 
    emailVerifiedAt: string;
    password: string;
    phoneNumber: string;
    refUserId: number;
    name: string;
    userType: string;

    constructor(id: number, email: string, emailVerifiedAt: string, password: string, phoneNumber: string, refUserId: number, name: string, userType: string) {
        this.id = id;
        this.email = email;
        this.emailVerifiedAt = emailVerifiedAt;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.refUserId = refUserId;
        this.name = name;
        this.userType = userType;
    }

}