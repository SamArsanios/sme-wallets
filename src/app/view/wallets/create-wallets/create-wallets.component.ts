import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DateUtils } from 'src/app/utils/date/date-utils';
import { Wallet } from 'src/app/shared/model/wallet/wallet-model';
import { HttpService } from 'src/app/utils/http/http-service';

@Component({
  selector: 'app-create-wallets',
  templateUrl: './create-wallets.component.html',
  styleUrls: ['./create-wallets.component.css']
})
export class CreateWalletsComponent implements OnInit {
  walletStatus = false;

  constructor(
    private httpService: HttpService<Wallet>,
  ) { }

  onSubmit(form: NgForm) {
    var currentlyLoggedInAdmin = JSON.parse(localStorage.getItem('Admininfo'))
    
    console.log("the admin is ", currentlyLoggedInAdmin)
    let object = form.value;


    const emailVerifiedAtStr = "emailVerifiedAtStr";

    currentlyLoggedInAdmin[emailVerifiedAtStr] = currentlyLoggedInAdmin.emailVerifiedAt;

    currentlyLoggedInAdmin[emailVerifiedAtStr] = DateUtils.convertDateFormatToParsable(
      currentlyLoggedInAdmin.emailVerifiedAt
    );

    currentlyLoggedInAdmin.emailVerifiedAt = null;

    const wallet = Wallet.createInstance();
    wallet.name = object.wallet;
    wallet.user = currentlyLoggedInAdmin;
    

    console.log("the data i want to sent to the db", wallet)

    this.httpService.postRequest("/wallets/create", wallet).subscribe(e => {
      console.log(`the result ${JSON.stringify(e, null, 2)} `);
      this.walletStatus = true;
      setTimeout(() => {
        //  this.cancel() 
      }, 2000);
    });
  } //

  ngOnInit() {
  }

}
