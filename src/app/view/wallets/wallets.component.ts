import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/model/user/user-model';
import { DateUtils } from 'src/app/utils/date/date-utils';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.css']
})
export class WalletsComponent implements OnInit {
  successfulLogin = false;
  constructor(
    private router: Router
  ) { }

  temporaryAdmin(): User {
    const user = new User(
      2,
      "akiri@gmail.com",
      "Feb 13, 2020 6:00:59 AM",
      "rec",
      "+25624534534",
      123,
      "jacob okia ",
      "buyer"
    );

    const emailVerifiedAtStr = "emailVerifiedAtStr";

    user[emailVerifiedAtStr] = user.emailVerifiedAt;

    user[emailVerifiedAtStr] = DateUtils.convertDateFormatToParsable(
      user.emailVerifiedAt
    );

    user.emailVerifiedAt = null;

    return user;
  }

  tempAdmins = [{
    id: 1,
    email: "esther@gmail.com",
    emailVerifiedAt: "Mar 24, 2020 9:36:47 AM",
    password: "esther",
    phoneNumber: "+256781123456",
    refUserId: 123,
    name: "Esther Suubi",
    userType: "Administrator",
    },
    {
    id: 2,
    email: "mellisa@gmail.com",
    emailVerifiedAt: "Mar 13, 2020 10:01:49 AM",
    password: "mellisa",
    phoneNumber: "+25677657657",
    refUserId: 123,
    name: "Mellisa Kish",
    userType: "Administrator",
    }]

  onSubmit(form: NgForm, callback) {
    const emailOfAdmin = form.value.email;
    const password = form.value.password;

    this.tempAdmins.map(anAdmin=>{
      if(anAdmin.email === emailOfAdmin && anAdmin.password === password){
        this.successfulLogin = true;
        console.log("the logged in admin is", anAdmin)
        localStorage.setItem("Admininfo", JSON.stringify(anAdmin));
        setTimeout(() => {
          this.router.navigate(['/admin/create-wallet']);
          }, 1000);
      }
    })

  //   const supplierInfo = SupplierData.getMapOfIdToSupplier().get(
  //     Number(idOfSupplier)
  //   );

  //   console.log("supplier infrmation", supplierInfo);
  //   localStorage.setItem("supplierinfo", JSON.stringify(supplierInfo));

  //   const object = form.value;

  //   let userSupplier = new User(null, null, null, null, null, null, null, null);

  //   userSupplier = supplierInfo;

  //   const emailVerifiedAtStr = "emailVerifiedAtStr";

  //   userSupplier[emailVerifiedAtStr] = userSupplier.emailVerifiedAt;

  //   console.log(`ggggg ${userSupplier[emailVerifiedAtStr]} `);

  //   userSupplier[emailVerifiedAtStr] = DateUtils.convertDateFormatToParsable(
  //     supplierInfo.emailVerifiedAt
  //   );

  //   userSupplier.emailVerifiedAt = null;

  //   console.log(`form object ${JSON.stringify(object, null, 2)} `);

  //   const order = Order.createInstance();

  //   order.wallet = this.temporaryWallet();
  //   order.supplier = userSupplier;
  //   order.buyer = this.buyer();
  //   order.orderStatus = "pending";

  //   const newOrder = this.objectUtilOrder.objectToInstance(order, object);

  //   console.log(`the order: ${JSON.stringify(newOrder, null, 2)} `);

  //   this.httpService.postRequest("/orders/create", order).subscribe(e => {


  //     console.log(`the result ${JSON.stringify(e, null, 2)} `);
  //     this.OrderStatus = true;
  //     setTimeout(() => {
  //     this.callback()
  //     }, 1000);
  //   })
 
   
  

  } 

  ngOnInit() {
  }



}
