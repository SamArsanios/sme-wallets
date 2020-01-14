import { Injectable } from '@angular/core';
import { HttpService } from '../../utils/http/http-service'
import { User } from '../../shared/model/user/user-model'
import { ObjectsUtil } from '../../utils/objects/objects'
import { SupplierData } from './supplier.data';
import { List } from '../../utils/collections/list';
@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private httpService: HttpService<User>, private objectUtil: ObjectsUtil<User>) { }


  getAllSuppliers(): void {

    if (SupplierData.getAllSuppliers() == null || SupplierData.getAllSuppliers().isEmpty()) {

      this.httpService.getRequest('/users/findAll').subscribe(e => {
        
        const theObj = this.objectUtil.dataObjectToArray(e.body);
        
        for (let i = 0; i < theObj.length; i++) {
          
          SupplierData.addASupplier(theObj[i]);
        }

        console.log(`the list: ${JSON.stringify(SupplierData.getAllSuppliers())} `);

      });
    }

  }
}