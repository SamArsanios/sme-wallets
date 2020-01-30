import { List } from '../../utils/collections/list'
import { User } from '../../shared/model/user/user-model'
import { Observable } from 'rxjs';
import { Mapp } from 'src/app/utils/collections/map';

export class SupplierData {


    private static allSuppliersPromise: Promise<List<User>>;
    private static allSuppliers: List<User>;

    private static mapOfIdToSupplier: Mapp<Number,User> ;

    static setMapOfIdToSupplier(mapOfIdToSupplier: Mapp<Number,User>){
        SupplierData.mapOfIdToSupplier = mapOfIdToSupplier;
    }

    static getMapOfIdToSupplier(): Mapp<Number,User> {
        return SupplierData.mapOfIdToSupplier;
    }



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

            if (SupplierData.getAllSuppliers() == null || SupplierData.getAllSuppliers().isEmpty()) {

                let newList = new List<User>();
                newList.add(aSupplier);
                SupplierData.setAllSuppliers(newList);

            }

            else {

                SupplierData.getAllSuppliers().add(aSupplier);

            }
        }

    }

    static addASupplierToMap(aSupplier: User, id: number): void {

        if (aSupplier.userType == "supplier") {

            if (SupplierData.getMapOfIdToSupplier() == null || SupplierData.getMapOfIdToSupplier().isEmpty()) {

                let newMap = new Mapp<Number,User>();
                newMap.put(id,aSupplier);
                SupplierData.setMapOfIdToSupplier(newMap);

            }

            else {

                SupplierData.getMapOfIdToSupplier().put(id,aSupplier);

            }
        }

    }


}