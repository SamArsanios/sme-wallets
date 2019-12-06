import { PasswordReset } from './PasswordReset';

/**
 * @author Daniel Comboni
 * 
 * a model / entity class PasswordResetTransient.
 */

export class PasswordResetTransient extends PasswordReset {

    createAtStr: string;

    constructor($id: number, $email: string, $token: string, $createAt: string, $createdAtStr: string) {

        super($id, $email, $token, $createAt);
        this.createAt = $createdAtStr;

    }

}
