import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import {FormBuilder, FormControl, FormGroup, Validators, NgForm} from '@angular/forms';
import { HttpService } from 'src/app/utils/http/http-service';
import { User } from 'src/app/shared/model/user/user-model';
import { ObjectsUtil } from 'src/app/utils/objects/objects';
import {DateUtils} from 'src/app/utils/date/date-utils'
import { UserTransient } from 'src/app/shared/model/user/user-model-transient';
import { Registration } from 'src/app/shared/model/user/Registration';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // repass:boolean=true;
  repassi = true;

  firstname: null;
  wallets = ["SME", "AGRIC", "Test1", "Admin", "test_wallet", "ret", "test", 
  "test_new", "OGAS Wallet", "test", "asd", "ert", "demo"]
  industries = ["Manufacturing"," Oil and Gas", "Hospitality", 
  "Security Services", "Motor Garage", "Business Consulting",
  "Government Dept", "Telecom", "Mining", "Roofing Industry","Travel Industry",
  " Medical Insurance","Taxi and Vehicle Hire", "Infrastructure Developer", "Electricity Producer",
  "Renewable Energy Products", "FMCG", "Stationary and Printing","Branding and Marketing Services",
  "Audit and Assurance Services", "BPO and Call Centre Services", "Warehousing and Logistics",
  "IT Technology", "Cleaning Services", "Office Suppliers","Food and Beverage",
  "Pension Services","Banking Services","Microfinance", "Telecom Towers", "Legal Services",
  "Govt Agency", "Trading Activities", "Govt Dept", "Franchisee", "Agro Processor", "Agro Dealer",
  "Agro Chemicals Manufacturer", "Farming Enterprise", "FinTech", "Agro Inputs",
  "Agro Exporter", "Organic Farmer", "Organic Exporter", "Licensed Broker Dealer",
  "Fund Manager", "Utility", "Camping Services", "Welding Services",
  "Oil&amp;Gas", "Training Institutional", "Training Consultant",
  "School and College"
]
  constructor(private httpServicee:HttpService<User>,
     private objectUtils: ObjectsUtil<User>,
     private httpRegister: HttpService<Registration>) { 
    
  }
onSubmit(form: NgForm, repass: string){

  
  // console.log("on sumit", form.valid)
  // console.log(`tttttt: ${document.getElementById('phone-number-id').textContent}`)
  console.log(form.value)
  // console.log(this.PhonenumberComponent.inputnumber)
  
  const object = form.value;
  console.log(object.password)
  if(object.passwordretype!=object.password){
    this.repassi = false;
    console.log("wrong password")
  }
  // if(object.password)

   const newUser = new User(0,object.email,object.password, object.number.formattedNumber,123,
   object.firstname.concat(' ').concat(object.lastname), object.usertype, null);

   console.log(`the user object ${JSON.stringify(newUser)}  `);




this.httpServicee.postRequest('/users/create',newUser).subscribe(e=>{
console.log(`the result ${JSON.stringify(e)} `)
if(e.status==200){
  const reg = new Registration(0, this.convertUserToUserTransient(e.body) , object.industrytype, e.body.name, null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null);
this.httpRegister.postRequest("/registrations/create", reg).subscribe(result=>{
  console.log(`reg result ${JSON.stringify(result)}`)


})
}
});


}


convertUserToUserTransient(user:User): UserTransient{
  let transient = new UserTransient(null,null,null,null,null,null,null,null,null)
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
// notsame(){
//   if (format.value
// }
}