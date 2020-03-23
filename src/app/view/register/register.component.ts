import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import { FormBuilder, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { HttpService } from 'src/app/utils/http/http-service';
import { User } from 'src/app/shared/model/user/user-model';
import { ObjectsUtil } from 'src/app/utils/objects/objects';
import { DateUtils } from 'src/app/utils/date/date-utils'
import { UserTransient } from 'src/app/shared/model/user/user-model-transient';
import { Registration } from 'src/app/shared/model/user/Registration';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationStatus = false;
  repassi = true;

  firstname: null;
  wallets = ["SME", "AGRIC", "Test1", "Admin", "test_wallet", "ret", "test",
    "test_new", "OGAS Wallet", "test", "asd", "ert", "demo"]
  industries = ["Manufacturing", " Oil and Gas", "Hospitality",
    "Security Services", "Motor Garage", "Business Consulting",
    "Government Dept", "Telecom", "Mining", "Roofing Industry", "Travel Industry",
    " Medical Insurance", "Taxi and Vehicle Hire", "Infrastructure Developer", "Electricity Producer",
    "Renewable Energy Products", "FMCG", "Stationary and Printing", "Branding and Marketing Services",
    "Audit and Assurance Services", "BPO and Call Centre Services", "Warehousing and Logistics",
    "IT Technology", "Cleaning Services", "Office Suppliers", "Food and Beverage",
    "Pension Services", "Banking Services", "Microfinance", "Telecom Towers", "Legal Services",
    "Govt Agency", "Trading Activities", "Govt Dept", "Franchisee", "Agro Processor", "Agro Dealer",
    "Agro Chemicals Manufacturer", "Farming Enterprise", "FinTech", "Agro Inputs",
    "Agro Exporter", "Organic Farmer", "Organic Exporter", "Licensed Broker Dealer",
    "Fund Manager", "Utility", "Camping Services", "Welding Services",
    "Oil&amp;Gas", "Training Institutional", "Training Consultant",
    "School and College"
  ]
  constructor(private httpServicee: HttpService<User>,
    private objectUtils: ObjectsUtil<User>,
    private httpRegister: HttpService<Registration>,
    private router: Router) {


  }
  onSubmit(form: NgForm, repass: string) {
    
    // if(form.valid){
    //   window.location.href = '/buyer/buyerdashboard';

    // }
   
    console.log(form.value)

    const object = form.value;
    console.log(object.password)
    if (object.passwordretype != object.password) {
      this.repassi = false;
      form.invalid;
      console.log("wrong password");
    }
    
    const newUser = new User(0, object.email, null, object.password, object.number.formattedNumber, 123,
      object.firstname.concat(' ').concat(object.lastname), object.usertype);
    
    console.log(`the user object ${JSON.stringify(newUser)}  `);




   
    this.httpServicee.postRequest('/users/create', newUser).subscribe(e => {
      console.log(`the result ${JSON.stringify(e)} `)
      if (e.status == 200) {
        const reg = new Registration(0, this.convertUserToUserTransient(e.body), object.industrytype, e.body.name, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
        this.httpRegister.postRequest("/registrations/create", reg).subscribe(result => {
          console.log(`reg result ${JSON.stringify(result)}`)
          this.registrationStatus = true;
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 6000);
          // setTimeout(function(){ form.reset(); }, 1000);


        })
      }
    });


  }


  convertUserToUserTransient(user: User): UserTransient {
    let transient = new UserTransient(null, null, null, null, null, null, null, null, null)
    transient.id = user.id;
    transient.email = user.email;
    transient.emailVerifiedAtStr = DateUtils.convertDateFormatToParsable(user.emailVerifiedAt);
    transient.name = user.name;
    transient.password = user.password;
    transient.phoneNumber = user.phoneNumber;
    transient.refUserId = user.refUserId;
    transient.userType = user.userType;
    return transient;
  }


  ngOnInit() {
  }

}