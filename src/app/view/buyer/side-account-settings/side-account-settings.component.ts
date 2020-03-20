
import { Component, OnInit } from '@angular/core';
import { PageScrollConfig } from 'ng2-page-scroll';
import { NgForm } from '@angular/forms';
import { ObjectsUtil } from 'src/app/utils/objects/objects';
import { User } from 'src/app/shared/model/user/user-model';
import { Registration } from 'src/app/shared/model/user/Registration';
import { DateUtils } from 'src/app/utils/date/date-utils';
import { HttpService } from 'src/app/utils/http/http-service';
import { Wallet } from 'src/app/shared/model/wallet/wallet-model';
import { PopulateInputFieldsService } from 'src/app/view/buyer/side-account-settings/populate-input-fields.service';


@Component({
  selector: 'app-side-account-settings',
  templateUrl: './side-account-settings.component.html',
  styleUrls: ['./side-account-settings.component.scss']
})

export class SideAccountSettingsComponent implements OnInit {

  // wallet: string;
  wallets = ["SME", "AGRIC", "Test1", "Admin", "form", "ret", "test",
    "test_new", "OGAS Wallet", "test", "asd", "ert", "demo"]

  personalInfoName = '';
  personalInfoEmail = '';
  personalInfoWallet = '';
  userIdForUpdate: number;
  registrationIdForUpdate: number;
  userInfo: User;
  walletInfo: Wallet;
  registrationInfo: Registration;


  private idOfUserLoggedIn: number;
  private emailOfUserLoggedIn: string;

  registration = new Registration(null, null, null, null, null, null, null,null,
    null, null, null, null, null, null, null, null, null, null, null, null, null, null)



  constructor(private objectsUtils: ObjectsUtil<User>, private objectsUtilsReg: ObjectsUtil<Registration>, private objectUtilsWallet: ObjectsUtil<Wallet>, private httpServiceRegistration: HttpService<Registration>, private httpServiceUser: HttpService<User>, private httpServiceWallet: HttpService<Wallet>,
    private populateInputFieldsService: PopulateInputFieldsService
  ) {

    this.pageView();
    this.findUserLoggedIn();
  }

  private findUserLoggedIn(): void {

    const userLoggedIn = JSON.parse(localStorage.getItem('loggedinUser'));
    this.httpServiceRegistration.getRequest(`/users/findUserByEmail/${userLoggedIn[0].email}`).subscribe(e => {
      let user = new User(null, null, null, null, null, null, null, null);
      user = e.body[0];
      this.userInfo = user;
      this.personalInfoName = user.name;
      this.personalInfoEmail = user.email;

      this.idOfUserLoggedIn = user.id;
      this.emailOfUserLoggedIn = user.email;
      console.log(`ttttttttttttttttt: ${user.id} `);

      this.populateInputFieldsService.populateFieldsForUpdate(user.email);



      // this.httpServiceRegistration.getRequest(`/registrations/findRegistrationByEmail/${this.emailOfUserLoggedIn}`)
      //   .subscribe(e => {
      //     console.log(`the body:  ${e.body}`);

      //   });

      // TODO makes ure the getting by email works
      // for now, find all and loop thru by comparing the email that matches the logged in email

      // retrieve data from database
      this.httpServiceRegistration.getRequest(`/registrations/findAll`).subscribe(e => {

        // get the body of the response and convert it to an array
        this.objectsUtilsReg.dataObjectToArray(e.body).forEach(aReg => {
          
          if (this.emailOfUserLoggedIn == aReg.user.email) {
            this.registration = aReg;
          }

        });
      });

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

  onRegisteredSubmit(form: NgForm) {

    const v = form.value;
    console.log(v);
    const theObject = form.value;
    console.log(`the form values: ${JSON.stringify(theObject, null, 2)} `);

    let theRegistration = Registration.createInstance();
    
    theRegistration = this.registration;


    theRegistration.contactNumber = theObject.contactNumber;
    theRegistration.city = theObject.city;
    theRegistration.state = theObject.state;
    theRegistration.country = theObject.country;
    theRegistration.zip = theObject.zip;

    theRegistration["timestampStr"] = DateUtils.convertDateFormatToParsable(theRegistration.timestamp);
    theRegistration.timestamp = null;

    theRegistration.user["emailVerifiedAtStr"] = DateUtils.convertDateFormatToParsable(theRegistration.user.emailVerifiedAt);
    theRegistration.user.emailVerifiedAt = null;


    console.log(`the next step: ${JSON.stringify(theRegistration, null, 2)} `);



// theRegistration[timestampStr] = DateUtils.convertDateFormatToParsable(this.registrationInfo.timestamp);
    // theRegistration.timestamp = null;// theRegistration[timestampStr] = DateUtils.convertDateFormatToParsable(this.registrationInfo.timestamp);
    // theRegistration.timestamp = null;



    const timestampStr = 'timestampStr';
    

    this.httpServiceRegistration.putRequest('/registrations/update',theRegistration).subscribe (e => {
      // console.log(`the registr: ${JSON.stringify(e, null, 2)} `);
    });

  }

  onCorrespondenceSubmit(form:NgForm){

    const correspondenceObject = form.value;
    console.log(form.value);
    let theCorrespondence = Registration.createInstance();

    theCorrespondence = this.registration;

    theCorrespondence.corContact = correspondenceObject.corContact;
    theCorrespondence.corCity = correspondenceObject.corCity;
    theCorrespondence.state = correspondenceObject.corState;
    theCorrespondence.country = correspondenceObject.corCountry;
    theCorrespondence.corZipCode = correspondenceObject.corZipCode

    theCorrespondence["timestampStr"] = DateUtils.convertDateFormatToParsable(theCorrespondence.timestamp);
    theCorrespondence.timestamp = null;

    theCorrespondence.user["emailVerifiedAtStr"] = DateUtils.convertDateFormatToParsable(theCorrespondence.user.emailVerifiedAt);
    
    theCorrespondence.user.emailVerifiedAt = null;

    const timestampStr = 'timestampStr';

    this.httpServiceRegistration.putRequest('/registrations/update',theCorrespondence).subscribe (e => {
      // console.log(`the registr: ${JSON.stringify(e, null, 2)} `);
    });

  }

  onSubmitCompanyInfo(form:NgForm){

    const companyInfoObject = form.value;
    console.log(form.value)

    let thecompanyInfo = Registration.createInstance();
    thecompanyInfo = this.registration;

    thecompanyInfo.companyName = companyInfoObject.companyName;
    thecompanyInfo.crName = companyInfoObject.crName;
    thecompanyInfo.companyEmail = companyInfoObject.companyEmail;
    thecompanyInfo.crbNumber = companyInfoObject.crbNumber;
    thecompanyInfo.companyAddress = companyInfoObject.companyAddress;

    thecompanyInfo["timestampStr"] = DateUtils.convertDateFormatToParsable(thecompanyInfo.timestamp);
    thecompanyInfo.timestamp = null;

    thecompanyInfo.user["emailVerifiedAtStr"] = DateUtils.convertDateFormatToParsable(thecompanyInfo.user.emailVerifiedAt);
    thecompanyInfo.user.emailVerifiedAt = null;

    const timestampStr = 'timestampStr';

    this.httpServiceRegistration.putRequest('/registrations/update',thecompanyInfo).subscribe (e => {
      // console.log(`the registr: ${JSON.stringify(e, null, 2)} `);
    });

  }


  onSubmit(form: NgForm) {

    console.log(form.value);
    const formObject = form.value;
    console.log(`the form values: ${JSON.stringify(formObject, null, 2)} `);
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

    let theWallet = Wallet.createInstance();
    theWallet = this.updateWallet(formObject.name);
    theWallet.name = this.walletInfo.name;
  }

  private updateUserDetails(userDetail: any): User {

    let newUser = User.createInstance();
    newUser = this.objectsUtils.objectToInstance(newUser, userDetail);

    return newUser;
  }

  private updateWallet(walletDetail: any): Wallet {
    let newWallet = Wallet.createInstance();
    newWallet = this.objectUtilsWallet.objectToInstance(newWallet, walletDetail);
    return newWallet;
  }

  private updateRegistrationDetails(registrationDetail: any) {
    let newRegistration = Registration.createInstance();

    newRegistration = this.objectsUtilsReg.objectToInstance(newRegistration, registrationDetail);

    return newRegistration;
  }
  // private updateRegistration(theRegistration: Registration){
  //   let registeredAddress = new Registration(null, null, null, null, null, null, null,
  //     null, null, null, null, null, null, null, null, null, null, null, null, null, null)

  //   this.httpService.putRequest('/registrations/update', registeredAddress).subscribe(response => {


  //   });
  //  }
  private updateOnlyUserInfo(newUser: User): void {

    this.httpServiceUser.putRequest('/users/update', newUser).subscribe(e => {
      console.log(` Userso Samuel Son ${JSON.stringify(e, null, 2)} `);
    });

  }
  private updateOnlyWalletInfo(newWallet: Wallet): void {
    this.httpServiceWallet.putRequest('/wallets/update', newWallet).subscribe(e => {

    })

  }

  private updateAddressOnlyInfo(newRegistration: Registration): void {

    this.httpServiceRegistration.putRequest('/registrations/update', newRegistration).subscribe(e => {
      console.log(`registration man: ${JSON.stringify(e, null, 2)} `);
    });

  }
  updatePersonalInfo() {

    let user = new User(null, null, null, null, null, null, null, null);

    let reg = new Registration(null, null, null, null, null, null, null,null,
      null, null, null, null, null, null, null, null, null, null, null, null,null, null)

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


    this.httpServiceRegistration.putRequest('/registrations/update', reg).subscribe(response => {
      console.log(`the response obtained: ${JSON.stringify(this.objectsUtilsReg.dataObjectToArray(response))} `);

    });


  }


  ngOnInit() {

    const loggedInUser = JSON.parse(localStorage.getItem('loggedinUser'));

    // User

    console.log(`the trick: ${JSON.stringify(loggedInUser[0])} `);
    this.findUserLoggedIn();

  }

}


