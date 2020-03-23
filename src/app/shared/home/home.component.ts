import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/utils/http/http-service';
import { User } from '../model/user/user-model';
import { ObjectsUtil } from 'src/app/utils/objects/objects';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
// export function myFunc(){
//   buyers: boolean = "false";
// };
export class HomeComponent implements OnInit {

  constructor(private httpService: HttpService<User>, private objectUtil: ObjectsUtil<User>) { }

  ngOnInit() {
    this.httpService.getRequest('/users/findAll').subscribe(e => {
      console.log(`the result ${JSON.stringify(this.objectUtil.dataObjectToArray(e))} `);
    });
  }

}
