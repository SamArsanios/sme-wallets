
import { Component, OnInit } from '@angular/core';
import {PageScrollConfig} from 'ng2-page-scroll';
import { NgForm } from '@angular/forms';
import { ObjectsUtil } from 'src/app/utils/objects/objects';
import { User } from 'src/app/shared/model/user/user-model';
import { Registration } from 'src/app/shared/model/user/Registration';


@Component({
  selector: 'app-side-account-settings',
  templateUrl: './side-account-settings.component.html',
  styleUrls: ['./side-account-settings.component.scss']
})
export class SideAccountSettingsComponent implements OnInit{

  wallet: string;
  options:string[]=["Agric","SME", "Ogas"];
  
 
  constructor(private objectsUtils: ObjectsUtil<User>) { 

      PageScrollConfig.defaultScrollOffset = 260;
      PageScrollConfig.defaultEasingLogic = {
          ease: (t: number, b: number, c: number, d: number): number => {
              // easeInOutExpo easing
              if (t === 0) return b;
              if (t === d) return b + c;
              if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
              return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
          }
      };
  }
  
  onSubmit(form:NgForm ){
  console.log(form.value);
  
  }

  updatePersonalInfo(){

    const reg = Registration.i

    {
      "id": 1,
      "user": {
        "id": 1,
        "email": "samson@gmail.com",
        "emailVerifiedAt": "Feb 4, 2020 1:21:52 PM",
        "password": "samson",
        "phoneNumber": "+256756",
        "refUserId": 123.00,
        "name": "Samson Kibrom",
        "userType": "supplier"
      },
      "industryType": "Manufacturing",
      "name": "Samson Kibrom",
      "timestamp": "Feb 4, 2020 1:21:53 PM"
    }
  }


  ngOnInit() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedinUser'));
    
    User

    console.log(`the trick: ${ JSON.stringify(loggedInUser[0]) } `);

    
  }

  }


