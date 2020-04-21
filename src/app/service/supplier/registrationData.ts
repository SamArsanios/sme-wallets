import { List } from '../../utils/collections/list';
import { Observable } from 'rxjs';
import { Mapp } from 'src/app/utils/collections/map';
import { Registration } from 'src/app/shared/model/user/Registration';

export class RegistrationData {

    private static allRegisteredPromise: Promise<List<Registration>>;
    private static allSuppliers: List<Registration>;
    private static allSuppliersss;
    private static mapOfIdToSupplier: Mapp<number, Registration> ;

    static setMapOfIdToSupplier(mapOfIdToSupplier: Mapp<number, Registration>) {
        RegistrationData.mapOfIdToSupplier = mapOfIdToSupplier;
    }
    static setAllSuppliersss(allSuppliersss) {
        RegistrationData.allSuppliersss = allSuppliersss;
    }

    static getAllSuppliersss() {
        return RegistrationData.allSuppliersss
    }

    static getMapOfIdToSupplier(): Mapp<number, Registration> {
        return RegistrationData.mapOfIdToSupplier;
    }

    static setallRegisteredPromise(allRegisteredPromise: Promise<List<Registration>>): void {
        RegistrationData.allRegisteredPromise = allRegisteredPromise;
    }

    static getallRegisteredPromise(): Promise<List<Registration>> {
        return RegistrationData.allRegisteredPromise;
    }

    static getAllSuppliers(): List<Registration> {
        return RegistrationData.allSuppliers;
    }

    static setAllSuppliers(suppliers: List<Registration>): void {
        RegistrationData.allSuppliers = suppliers;
    }

    static addASupplier(aSupplier: Registration): void {

        if (aSupplier.user.userType === 'supplier') {

            if (RegistrationData.getAllSuppliers() == null || RegistrationData.getAllSuppliers().isEmpty()) {

                const newList = new List<Registration>();
                newList.add(aSupplier);
                RegistrationData.setAllSuppliers(newList);

            } else {

                RegistrationData.getAllSuppliers().add(aSupplier);

            }
        }

    }

    static addASupplierToMap(aSupplier: Registration, id: number): void {

        if (aSupplier.user.userType === 'supplier') {

            if (RegistrationData.getMapOfIdToSupplier() == null || RegistrationData.getMapOfIdToSupplier().isEmpty()) {

                const newMap = new Mapp<number, Registration>();
                newMap.put(id, aSupplier);

                RegistrationData.setMapOfIdToSupplier(newMap);

            } else {

                RegistrationData.getMapOfIdToSupplier().put(id, aSupplier);

            }
        }

    }

}
