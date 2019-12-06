/**
 * @author Daniel Comboni
 * 
 * a model / entity class PasswordReset.
 */

export class PasswordReset {

     id: number;
     email: string;
     token: string;
     createAt: string;

    constructor($id: number, $email: string, $token: string, $createAt: string) {
        this.id = $id;
        this.email = $email;
        this.token = $token;
        this.createAt = $createAt;
    }

}
