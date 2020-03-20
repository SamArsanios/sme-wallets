import { User } from './user-model';
import { RegistrationTransient } from './registration-model-transient';

/**
 * @author Daniel Comboni
 * 
 * a model / entity class Regsitration.
 */

export class Registration {

        id: number;
        user: User;
        industryType: string;
        name: string;
        email: string;
        address: string;
        contactNumber: string;
        city: string;
        state: string;
        country: string;
        zip: string;
        corContact: string;
        corCity: string;
        corState: string;
        corCountry: string;
        corZipCode: string;
        companyName: string;
        crName: string;
        companyEmail: string;
        crbNumber:number;
        companyAddress: string;
        timestamp: string;

        constructor(
                id: number, 
                user: User, 
                industryType: string, 
                name: string,
                email: string, 
                address: string, 
                contactNumber: string, 
                city: string, 
                state: string, 
                country: string, 
                zip: string, 
                corContact: string, 
                corCity: string, 
                corState: string, 
                corCountry: string, 
                corZipCode: string, 
                companyName: string, 
                crName: string, 
                companyEmail: string, 
                crbNumber:number, 
                companyAddress: string, 
                timestamp: string
                ) 
                
                {
                this.id = id;
                this.user = user;
                this.industryType = industryType;
                this.name = name;
                this.email = email;
                this.address = address;
                this.contactNumber = contactNumber;
                this.city = city;
                this.state = state;
                this.country = country;
                this.zip = zip;
                this.corContact = corContact;
                this.corCity = corCity;
                this.corState = corState;
                this.corCountry = corCountry;
                this.corZipCode = corZipCode;
                this.companyName = companyName;
                this.crName = crName;
                this.companyEmail = companyEmail;
                this.crbNumber = crbNumber;
                this.companyAddress = companyAddress;
                this.timestamp = timestamp;
        }

        static createInstance(): Registration{
                let newRegistration = new Registration(
                         null,
                         null, 
                         null,
                         null,
                         null, 
                         null, 
                         null, 
                         null, 
                         null, 
                         null, 
                         null, 
                         null,
                         null, 
                         null, 
                         null, 
                         null, 
                         null, 
                         null, 
                         null, 
                         null, 
                         null, 
                         null
                         )
                return newRegistration ;
              }
}

