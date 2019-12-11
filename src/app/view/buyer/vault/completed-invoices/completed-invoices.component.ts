import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";

export interface ICompletedInvoices {
  invoiceNo: string;
  invoiceDate: any;
  receiverName: string;
  invoiceTotal: number;
  invoiceStatus: string;
  // action:;
}

const ELEMENT_DATA: ICompletedInvoices[] = [
  {
    invoiceNo: "INV_10",
    invoiceDate: "10/12/2019",
    receiverName: "Steven",
    invoiceTotal: 30000,
    invoiceStatus: "Approved"
  },
  {
    invoiceNo: "INV_20",
    invoiceDate: "1/1/2018",
    receiverName: "Someone",
    invoiceTotal: 250000,
    invoiceStatus: "Approved"
  },
  {
    invoiceNo: "INV_30",
    invoiceDate: "11/12/2017",
    receiverName: "Junior",
    invoiceTotal: 242025,
    invoiceStatus: "Processing"
  }
];

@Component({
  selector: "app-completed-invoices",
  templateUrl: "./completed-invoices.component.html",
  styleUrls: ["./completed-invoices.component.css"]
})
export class CompletedInvoicesComponent implements OnInit {
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
