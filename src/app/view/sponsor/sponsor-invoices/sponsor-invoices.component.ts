import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";

export interface ISponsorInvoices {
  invoiceNo: any;
  accountDebtor: string;
  industryType: string;
  invoiceDate: any;
  invoiceDueDate: any;
  faceValue: number;
  // anticipatedSettlementDate: any;
  // action: any;
}

const ELEMENT_DATA: ISponsorInvoices[] = [
  {
    invoiceNo: "INV_1",
    accountDebtor: "Supplier 1",
    industryType: "Software",
    invoiceDate: "10/12/2019",
    invoiceDueDate: "20/12/2019",
    faceValue: 300000
    
  },
  {
    invoiceNo: "INV_2",
    accountDebtor: "Supplier 2",
    industryType: "Maufacturing",
    invoiceDate: "1/1/2017",
    invoiceDueDate: "2/1/2019",
    faceValue: 885254
  },
  {
    invoiceNo: "INV_3",
    accountDebtor: "Supplier 3",
    industryType: "Banking",
    invoiceDate: "2/5/2012",
    invoiceDueDate: "2/6/2012",
    faceValue: 457845
  }
];
@Component({
  selector: "app-sponsor-invoices",
  templateUrl: "./sponsor-invoices.component.html",
  styleUrls: ["./sponsor-invoices.component.css"]
})
export class SponsorInvoicesComponent implements OnInit {
  constructor() {}

  displayedColumns: string[] = [
    "invoiceNo",
    "accountDebtor",
    "industryType",
    "invoiceDate",
    "invoiceDueDate",
    "faceValue",
    "action"
  ];

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  displayFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
