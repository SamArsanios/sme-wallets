import { User } from 'src/app/shared/model/user/user-model';
import { Registration } from 'src/app/shared/model/user/Registration';

export interface IInvitedSuppliers {
    name: string;
    email: string;
    industryType: string;
    contactNumber: number;
}

export class InvitedSuppliersTable {

    public static displayedColumns: string[] = [
        'name',
        'email',
        'industryType',
        'contactNumber',

    ];


    public static populateTableOnInit(fromResponse: Registration[]) {
        var invitedSuppliers = []
        return fromResponse.map(e => {
            console.log("the valuuuuue of", e)

            return {
                name: e.name,
                email: e.user.email,
                industryType: e.industryType,
                contactNumber: e.user.phoneNumber

            };

        });
    }
}
