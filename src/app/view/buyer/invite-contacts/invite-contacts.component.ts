import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
//View Suplliers
export interface IInvitedSuppliers {
  name: string;
  email: string;
  industryType: string;
  contactNumber: number;
}

export interface IInvitedContacts {
  sellerName: string;
  sellerEmail: string;
  industryType: string;
  contactNumber: number;
}

const ELEMENT_DATA_INVITED_SUPPLIERS: IInvitedSuppliers[] = [
  {
    name: "Comboni",
    email: "comboni@yahoo.com",
    industryType: "Software",
    contactNumber: 1234
  },
  {
    name: "Samson",
    email: "samson@yahoo.com",
    industryType: "Software",
    contactNumber: 5678
  },
  {
    name: "Jotham",
    email: "jothi@yahoo.com",
    industryType: "Banking",
    contactNumber: 9101
  }
];

const ELEMENT_DATA_INVITED_CONTACTS: IInvitedContacts[] = [
  {
    sellerName: "Deborah",
    sellerEmail: "deb@yahoo.com",
    industryType: "Software",
    contactNumber: 75168298
  },
  {
    sellerName: "Jacob",
    sellerEmail: "Jacob@yahoo.com",
    industryType: "Software",
    contactNumber: 7516879865
  },
  {
    sellerName: "Keren",
    sellerEmail: "keren@yahoo.com",
    industryType: "Banking",
    contactNumber: 7516879865
  }
];
@Component({
  selector: "app-invite-contacts",
  templateUrl: "./invite-contacts.component.html",
  styleUrls: ["./invite-contacts.component.css"]
})
export class InviteContactsComponent implements OnInit {
  emailFormControl: FormControl;
  constructor() {}

  displayedInviteSuppliersColumns: string[] = [
    "name",
    "email",
    "industryType",
    "contactNumber"
  ];

  displayedInviteContactsColumns: string[] = [
    "sellerName",
    "sellerEmail",
    "industryType",
    "contactNumber"
  ];
  //suplliers data source
  invitedSuppliersDataSource = new MatTableDataSource(
    ELEMENT_DATA_INVITED_SUPPLIERS
  );

  //contacts data source
  invitedContactsDataSource = new MatTableDataSource(
    ELEMENT_DATA_INVITED_CONTACTS
  );

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.emailFormControl = new FormControl("", [
      Validators.required,
      Validators.email
    ]);
    //suppliers sort and paginate
    this.invitedSuppliersDataSource.sort = this.sort;
    this.invitedSuppliersDataSource.paginator = this.paginator;

    //contacts sort and paginate
    this.invitedContactsDataSource.sort = this.sort;
    this.invitedContactsDataSource.paginator = this.paginator;
  }
  //suppliers filter
  applySuppliersFilter(filterValue: string) {
    this.invitedSuppliersDataSource.filter = filterValue.trim().toLowerCase();
  }
  //contacts filter
  applyContactsFilter(filterValue: string) {
    this.invitedContactsDataSource.filter = filterValue.trim().toLowerCase();
  }
}
