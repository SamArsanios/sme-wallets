import { Registration } from './Registration';
import { User } from './user-model';

/**
 * @author Daniel Comboni
 * 
 * a model / entity class RegsitrationTransient.
 */

export class RegistrationTransient extends Registration {

    timestampStr: string;

    constructor($id: number, $user: User, $industryType: string, $name: string, $email: string, $address: string, $contactNumber: string, $city: string, $state: string, $country: string, $zip: string, $corAddress: string, $corCity: string, $corState: string, $corCountry: string, $corZipCode: string, $companyName: string, $crName: string, $companyEmail: string, $crbNumber:number, $companyAddress: string, $timestamp: string, $timestampStr: string) {
        super($id, $user, $industryType, $name, $email, $address, $contactNumber, $city, $state, $country, $zip, $corAddress, $corCity, $corState, $corCountry, $corZipCode, $companyName, $crName, $companyEmail,$crbNumber ,$companyAddress, $timestamp);
        this.timestampStr = $timestampStr;
    }
}

