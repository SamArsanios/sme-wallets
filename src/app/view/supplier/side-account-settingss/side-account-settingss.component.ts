import { Component, OnInit } from '@angular/core';
import {PageScrollConfig} from 'ng2-page-scroll';
import { User } from 'src/app/shared/model/user/user-model';
import { DateUtils } from 'src/app/utils/date/date-utils';
import { Registration } from 'src/app/shared/model/user/Registration';
import { ObjectsUtil } from 'src/app/utils/objects/objects';
import{HttpService} from 'src/app/utils/http/http-service'
import{NgForm} from '@angular/forms'
import { Wallet } from 'src/app/shared/model/wallet/wallet-model';



@Component({
  selector: 'app-side-account-settingss',
  templateUrl: './side-account-settingss.component.html',
  styleUrls: ['./side-account-settingss.component.css']
})
export class SideAccountSettingssComponent{

  wallet: string;
  options: string[] = ["Agric", "SME", "Ogas"];

  personalInfoName = '';
  personalInfoEmail = '';
  personalInfoWallet = '';
  userIdForUpdate: number;
  registrationIdForUpdate: number;
  userInfo: User;

  registration = new Registration(null, null, null, null, null, null, null,null,
    null, null, null, null, null, null, null, null, null, null, null, null, null, null)



  constructor(private objectsUtils: ObjectsUtil<User>, private objectsUtilsReg: ObjectsUtil<Registration>, private httpService: HttpService<Registration>, private httpServiceUser: HttpService<User>, private httpServiceWallet: HttpService<Wallet>) {

    this.pageView();
    this.findUserLoggedIn();
  }

  private findUserLoggedIn(): void {

    const userLoggedIn = JSON.parse(localStorage.getItem('loggedinUser'));
    this.httpService.getRequest(`/users/findUserByEmail/${userLoggedIn[0].email}`).subscribe(e => {
      let user = new User(null, null, null, null, null, null, null, null);
      user = e.body[0];
      this.userInfo = user;
      this.personalInfoName = user.name;
      this.personalInfoEmail = user.email;
    });

  }

  private pageView(): void {

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

  onSubmit(form: NgForm) {

    console.log(form.value);
    const formObject = form.value;
    console.log(`the form values: ${JSON.stringify(formObject)} `);
    // this.updatePersonalInfo();
    let theUser = User.createInstance();
    theUser = this.updateUserDetails(formObject);
    theUser.emailVerifiedAt = this.userInfo.emailVerifiedAt;
    theUser.id = this.userInfo.id;
    theUser.password = this.userInfo.password;
    theUser.refUserId = this.userInfo.refUserId;
    theUser.userType = this.userInfo.userType;
    theUser.email = this.userInfo.email;
    theUser.phoneNumber = this.userInfo.phoneNumber;
    const emailVerifiedAtStr = 'emailVerifiedAtStr';
    theUser[emailVerifiedAtStr] = DateUtils.convertDateFormatToParsable(this.userInfo.emailVerifiedAt);
    theUser.emailVerifiedAt = null;

    // finally update user details only
    this.updateOnlyUserInfo(theUser);


  }

  private updateUserDetails(userDetail: any): User {

    let newUser = User.createInstance();
 
    newUser = this.objectsUtils.objectToInstance(newUser, userDetail);
 
    return newUser;

  }

  private updateOnlyUserInfo(newUser: User): void {

    this.httpServiceUser.putRequest('/users/update', newUser).subscribe(e => {
      console.log(`result: ${e} `);
    });

  }

  updatePersonalInfo() {
    
    let user = new User(null, null, null, null, null, null, null, null);
    
    let reg = new Registration(null, null, null, null, null, null, null,null,
      null, null, null, null, null, null, null, null, null, null, null, null, null, null)

    const userObject = {
      "id": 2,
      "email": "deb@gmail.com",
      "emailVerifiedAt": "Feb 4, 2020 1:22:44 PM",
      "password": "deb",
      "phoneNumber": "+256704",
      "refUserId": 123.00,
      "name": "Deb Kalungi Nsubuga",
      "userType": "buyer"
    };

    user = this.objectsUtils.objectToInstance(user, userObject);

    let emailVerifiedAtStr = 'emailVerifiedAtStr';
    user[emailVerifiedAtStr] = DateUtils.convertDateFormatToParsable(user.emailVerifiedAt);
    user.emailVerifiedAt = null;

    const regObject =

    {
      "id": 2,
      "industryType": "Manufacturing",
      "name": "Deb Kalungi Nsubuga",
      "timestamp": "Feb 4, 2020 1:22:44 PM",
      "user": user
    };

    reg = this.objectsUtilsReg.objectToInstance(reg, regObject);
    let timestampStr = 'timestampStr';
    reg[timestampStr] = DateUtils.convertDateFormatToParsable(reg.timestamp);
    reg.timestamp = null;

    console.log(`The result is: ${JSON.stringify(reg, null, 2)} `);


    this.httpService.putRequest('/registrations/update', reg).subscribe(resposne => {
      console.log(`the response obtained: ${JSON.stringify(this.objectsUtilsReg.dataObjectToArray(resposne))} `);

    });


  }


  ngOnInit() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedinUser'));

    User

    console.log(`the trick: ${JSON.stringify(loggedInUser[0])} `);
    this.findUserLoggedIn();

  }

}


  

