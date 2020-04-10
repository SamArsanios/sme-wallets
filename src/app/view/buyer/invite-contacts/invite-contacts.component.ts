// import { Component, OnInit, ViewChild } from "@angular/core";
// import { FormControl, Validators } from "@angular/forms";
// import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
// //View Suplliers
// export interface IInvitedSuppliers {
//   name: string;
//   email: string;
//   industryType: string;
//   contactNumber: number;
// }

// export interface IInvitedContacts {
//   sellerName: string;
//   sellerEmail: string;
//   industryType: string;
//   contactNumber: number;
// }

// const ELEMENT_DATA_INVITED_SUPPLIERS: IInvitedSuppliers[] = [
//   {
//     name: "Comboni",
//     email: "comboni@yahoo.com",
//     industryType: "Software",
//     contactNumber: 1234
//   },
//   {
//     name: "Samson",
//     email: "samson@yahoo.com",
//     industryType: "Software",
//     contactNumber: 5678
//   },
//   {
//     name: "Jotham",
//     email: "jothi@yahoo.com",
//     industryType: "Banking",
//     contactNumber: 9101
//   }
// ];

// const ELEMENT_DATA_INVITED_CONTACTS: IInvitedContacts[] = [
//   {
//     sellerName: "Deborah",
//     sellerEmail: "deb@yahoo.com",
//     industryType: "Software",
//     contactNumber: 75168298
//   },
//   {
//     sellerName: "Jacob",
//     sellerEmail: "Jacob@yahoo.com",
//     industryType: "Software",
//     contactNumber: 7516879865
//   },
//   {
//     sellerName: "Keren",
//     sellerEmail: "keren@yahoo.com",
//     industryType: "Banking",
//     contactNumber: 7516879865
//   }
// ];
// @Component({
//   selector: "app-invite-contacts",
//   templateUrl: "./invite-contacts.component.html",
//   styleUrls: ["./invite-contacts.component.css"]
// })
// export class InviteContactsComponent implements OnInit {
//   emailFormControl: FormControl;
//   constructor() {}

//   displayedInviteSuppliersColumns: string[] = [
//     "name",
//     "email",
//     "industryType",
//     "contactNumber"
//   ];

//   displayedInviteContactsColumns: string[] = [
//     "sellerName",
//     "sellerEmail",
//     "industryType",
//     "contactNumber"
//   ];
//   //suplliers data source
//   invitedSuppliersDataSource = new MatTableDataSource(
//     ELEMENT_DATA_INVITED_SUPPLIERS
//   );

//   //contacts data source
//   invitedContactsDataSource = new MatTableDataSource(
//     ELEMENT_DATA_INVITED_CONTACTS
//   );

//   @ViewChild(MatSort, { static: true }) sort: MatSort;
//   @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

//   ngOnInit() {
//     this.emailFormControl = new FormControl("", [
//       Validators.required,
//       Validators.email
//     ]);
//     //suppliers sort and paginate
//     this.invitedSuppliersDataSource.sort = this.sort;
//     this.invitedSuppliersDataSource.paginator = this.paginator;

//     //contacts sort and paginate
//     this.invitedContactsDataSource.sort = this.sort;
//     this.invitedContactsDataSource.paginator = this.paginator;
//   }
//   //suppliers filter
//   applySuppliersFilter(filterValue: string) {
//     this.invitedSuppliersDataSource.filter = filterValue.trim().toLowerCase();
//   }
//   //contacts filter
//   applyContactsFilter(filterValue: string) {
//     this.invitedContactsDataSource.filter = filterValue.trim().toLowerCase();
//   }
// }



import { Component, OnInit } from "@angular/core";
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


@Component({
  selector: "app-invite-contacts",
  templateUrl: "./invite-contacts.component.html",
  styleUrls: ["./invite-contacts.component.css"]
})
export class InviteContactsComponent implements OnInit {
  // OrderStatus = false;
  receivers = []
theCorrespondingName;
selectedEmail;

  

  // public onChange(event): void {  // event will give you full breif of action
  //   const newVal = event.target.value;
  //   console.log(newVal);
  // }
  

  // tslint:disable-next-line:max-line-length
  constructor(
    private location: Location,
    private router: Router,
    private httpService: HttpService<User>,
    private objectUtil: ObjectsUtil<User>,
    private objectUtilOrder: ObjectsUtil<Order>,
    // private websocket: WebsocketService,
    // private location: Location,
    
  ) {

}
someMethod(value){
  console.log("teh vaaaaaaaaa is ",value);


  this.httpService.getRequest("/users/findAll").subscribe(e => {
    this.objectUtil.dataObjectToArray(e.body).map(aSupplier => {
      if (aSupplier.userType === "supplier" && aSupplier.email === value ) {
        this.theCorrespondingName = aSupplier.name;
        console.log("teh vaaaaaaaaa is ",this.theCorrespondingName);

      }
    });
  });

}

selectName(value){
  console.log("teh vaaaaaaaaa is ",value);


  this.httpService.getRequest("/users/findAll").subscribe(e => {
    this.objectUtil.dataObjectToArray(e.body).map(aSupplier => {
      if (aSupplier.userType === "supplier" && aSupplier.name === value ) {
        this.selectedEmail = aSupplier.email;
        console.log("teh vaaaaaaaaa is ",this.selectedEmail);

      }
    });
  });

}
// onChange(event): void {  // event will give you full breif of action
//   // const newVal = form.value.email;
//   console.log("the new email is");
// }

GenerateDropDown(){
  this.httpService.getRequest("/users/findAll").subscribe(e => {
    this.objectUtil.dataObjectToArray(e.body).map(aSupplier => {
      if (aSupplier.userType === "supplier") {
        this.receivers.push(aSupplier);
      }
    });
  });
}

  ngOnInit() {
    this.GenerateDropDown()
  } // end ngOninit()
}

