import { List } from '../../utils/collections/list'
import { User } from '../../shared/model/user/user-model'
import { Observable } from 'rxjs';

export class SupplierData {
 

    private static allSuppliersPromise: Promise<List<User>>;
    private static allSuppliers: List<User>;

    static setAllSuppliersPromise(allSuppliersPromise: Promise<List<User>>): void {
        SupplierData.allSuppliersPromise = allSuppliersPromise;
    }

    static getAllSuppliersPromise(): Promise<List<User>> {
        return SupplierData.allSuppliersPromise;
    }

    static getAllSuppliers(): List<User> {
        return SupplierData.allSuppliers;
    }

    static setAllSuppliers(suppliers: List<User>): void {
        SupplierData.allSuppliers = suppliers;
    }

    static addASupplier(aSupplier: User): void {

        if (aSupplier.userType == "supplier") {

            if (SupplierData.getAllSuppliers() == null ) {

                let newList = new List<User>();
                newList.add(aSupplier);
                SupplierData.setAllSuppliers(newList);

            }

            else {

                SupplierData.getAllSuppliers().add(aSupplier);

            }
        }

    }

}