import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/model/user/user-model';
import { HttpService } from 'src/app/utils/http/http-service';

@Injectable({
  providedIn: 'root'
})
export class AccountsettingsService {

  constructor(private httpServiceUser: HttpService<User>) { 
    
  }





}
