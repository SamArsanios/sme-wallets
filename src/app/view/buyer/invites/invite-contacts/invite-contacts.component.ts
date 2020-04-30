import { Component, OnInit, getDebugNode } from "@angular/core";
import { FormControl, Validators, NgForm } from "@angular/forms";
import { List } from "src/app/utils/collections/list";
import { User } from "src/app/shared/model/user/user-model";
import { HtpsService } from "src/app/htps.service";
import { HttpService } from "src/app/utils/http/http-service";
import { ObjectsUtil } from "src/app/utils/objects/objects";
import { Order } from "src/app/model/buyer/order/order-model";
import { DateUtils } from "src/app/utils/date/date-utils";
import { UserTransient } from "src/app/shared/model/user/user-model-transient";
import { WebsocketService } from "src/app/utils/websocket/websocket.service";
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Invite } from 'src/app/model/buyer/invites/invite-model';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { forkJoin } from 'rxjs';


@Component({
  selector: "app-invite-contacts",
  templateUrl: "./invite-contacts.component.html",
  styleUrls: ["./invite-contacts.component.css"]
})
export class InviteContactsComponent implements OnInit {
  receivers = [];
  theCorrespondingName;
  selectedEmail;
  supplierDetail;
  user;
  inviteStatus = false;
  invited = [];
  dred = []
    constructor(
    private location: Location,
    private router: Router,
    private httpService: HttpService<any>,
    private httpServices: HttpService<any>,
    private objectUtil: ObjectsUtil<User>,
    private objectUtils: ObjectsUtil<Invite>,
    private objectUtilOrder: ObjectsUtil<Invite>,
  ) {

  }


  someMethod(value) {
    console.log("teh vaaaaaaaaa is ", value);


    this.httpService.getRequest("/users/findAll").subscribe(e => {
      this.objectUtil.dataObjectToArray(e.body).map(aSupplier => {
        if (aSupplier.userType === "supplier" && aSupplier.email === value) {
          this.theCorrespondingName = aSupplier.name;

        }
      });
    });

  }

  selectName(value) {

    this.httpService.getRequest("/users/findAll").subscribe(e => {
      this.objectUtil.dataObjectToArray(e.body).map(aSupplier => {
        if (aSupplier.userType === "supplier" && aSupplier.name === value) {
          this.selectedEmail = aSupplier.email;
          console.log("teh vaaaaaaaaa is ", this.selectedEmail);

        }
      });
    });

  }

  Invitation(form: NgForm) {
    var currentlyLoggedIn = JSON.parse(localStorage.getItem('loggedinUser'))
    var theUser;
    let object = form.value;
    this.receivers.map(e => {
      if (e.email === object.receiveremail) {
        this.user = e
      }

      if (e.name === object.receivername) {
        this.user = e
      }
    })

    currentlyLoggedIn.map(e => {
      theUser = e
      console.log("the logged in person is", theUser)
    })


    const emailVerifiedAtStr = "emailVerifiedAtStr";

    theUser[emailVerifiedAtStr] = theUser.emailVerifiedAt;

    theUser[emailVerifiedAtStr] = DateUtils.convertDateFormatToParsable(
      theUser.emailVerifiedAt
    );

    theUser.emailVerifiedAt = null;

    const invited = Invite.createInstance();
    invited.user = theUser;
    invited.email = this.user.email;
    invited.inviteCode = "whats this"
    invited.name = this.user.name;

    console.log("the data i want to sent to the db", invited)

    this.httpService.postRequest("/invites/create", invited).subscribe(e => {
      console.log(`the result ${JSON.stringify(e, null, 2)} `);
      this.inviteStatus = true;
      setTimeout(() => {
        //  this.cancel() 
      }, 2000);
    });
  }

  GenerateDropDown() {
    this.httpService.getRequest("/users/findAll").subscribe(e => {
      this.objectUtil.dataObjectToArray(e.body).map(aSupplier => {
        if (aSupplier.userType === "supplier") {
          this.receivers.push(aSupplier);
        }
      });
    });
  }


  InvitedSuppliers() {
    this.httpService.getRequest("/invites/findAll").subscribe(e => {
      this.objectUtil.dataObjectToArray(e.body).map(aSupplier => {

        this.invited.push(aSupplier);

      });
    });

  }
  getUninvitedSuppliers() {
    forkJoin(
      this.httpService.getRequest("/users/findAll").pipe(map((response => response))),
      this.httpServices.getRequest("/invites/findAll").pipe(map((r => r)))

    ).subscribe(
      data => {

        var unique = [];
        for(var i = 0; i < data[0].body.length; i++){
            var found = false;
            for(var j = 0; j<data[1].body.length; j++){
             if(data[0].body[i].email === data[1].body[j].email || data[0].body[i].userType ==="sponsor" || data[0].body[i].userType ==="buyer"){
              found = false;
              break; 
              
            }
            else{
              found = true
            }
           }
           if(found == true){
            this.dred.push(data[0].body[i])
          }
        }


          },

          );
        }




        ngOnInit() {
          this.GenerateDropDown()
          this.getUninvitedSuppliers()
          this.InvitedSuppliers()

          console.log("the ivited aer", this.invited)

        } // end ngOninit()
      }