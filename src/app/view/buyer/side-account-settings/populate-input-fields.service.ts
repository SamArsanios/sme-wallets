import { User } from "../../../shared/model/user/user-model"
import { HttpService } from "../../../utils/http/http-service"
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopulateInputFieldsService {

  constructor(private httpServiceUser: HttpService<User>) { }
  public populateFieldsForUpdate( email: string): void {

    this.httpServiceUser.getRequest(`/users/findUserByEmail/${email}`).subscribe(e => {
        console.log(`the results: ${JSON.stringify(e.body)} `);
    });

}

}