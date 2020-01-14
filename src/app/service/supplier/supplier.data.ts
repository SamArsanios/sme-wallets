import { List } from '../../utils/collections/list'
import { User } from '../../shared/model/user/user-model'

export class SupplierData {

    private static allSuppliers: List<User>;

    static getAllSuppliers(): List<User> {
        return SupplierData.allSuppliers;
    }

    static setAllSuppliers(suppliers: List<User>): void {
        SupplierData.allSuppliers = suppliers;
    }


    static addASupplier(aSupplier: User): void {

        if(aSupplier.userType=="supplier"){
            if (SupplierData.getAllSuppliers() == null) {

                let newList = new List<User>();
                newList.add(aSupplier);
                SupplierData.setAllSuppliers(newList);
                SupplierData.getAllSuppliers();
    
            }
    
            else {
    
                SupplierData.getAllSuppliers().add(aSupplier);
    
            }
        }
    

        }

        
}