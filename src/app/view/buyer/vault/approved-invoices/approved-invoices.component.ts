import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";

export interface IApprovedInvoices {
  invoiceNo: string;
  invoiceDate: any;
  receiverName: string;
  invoiceTotal: number;
  invoiceStatus: string;
  // action:;
}

const ELEMENT_DATA: IApprovedInvoices[] = [
  {
    invoiceNo: "INV_1",
    invoiceDate: "10/12/2019",
    receiverName: "Samson Kibrom",
    invoiceTotal: 30000,
    invoiceStatus: "Approved"
  },
  {
    invoiceNo: "INV_2",
    invoiceDate: "1/1/2018",
    receiverName: "Keren Jacob",
    invoiceTotal: 250000,
    invoiceStatus: "Approved"
  },
  {
    invoiceNo: "INV_3",
    invoiceDate: "11/12/2017",
    receiverName: "Senior",
    invoiceTotal: 242025,
    invoiceStatus: "Approved"
  }
];
@Component({
  selector: "app-approved-invoices",
  templateUrl: "./approved-invoices.component.html",
  styleUrls: ["./approved-invoices.component.css"]
})
export class ApprovedInvoicesComponent implements OnInit {
  constructor() {}
  displayedColumns: string[] = [
    "invoiceNo",
    "invoiceDate",
    "receiverName",
    "invoiceTotal",
    "invoiceStatus",
    "action"
  ];

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
