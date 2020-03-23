import { Injectable } from '@angular/core';
import {tap} from 'rxjs/operators'
import { User } from './shared/model/user/user-model';
import { HttpService } from './utils/http/http-service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HtpsService {
  private productUrl = "'https://jsonplaceholder.typicode.com/todos/1'"

  constructor(private http: HttpClient) { }

  // getUsers(): Observable<User>{
  //   return this.http.get<User>(this.productUrl).pipe(tap(data=>
  //     console.log(`all staff ${JSON.stringify(data)}`)));
  // }
  profile = {};
  getUser() {
    return this.http.get(`app/buyers.json`);
  }
}
