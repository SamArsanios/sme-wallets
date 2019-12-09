import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";

export interface IApproveInvoices {
  invoiceNo: string;
  invoiceDate: any;
  invoiceDueDate: any;
  supplierName: string;
  invoiceStatus: string;
  // action:;
}

const ELEMENT_DATA: IApproveInvoices[] = [
  {
    invoiceNo: "INV_1",
    invoiceDate: "10/12/2019",
    invoiceDueDate: "20/12/2019",
    supplierName: "Samson Kibrom",
    invoiceStatus: "Approved"
  },
  {
    invoiceNo: "INV_2",
    invoiceDate: "1/1/2018",
    invoiceDueDate: "2/2/2019",
    supplierName: "Keren Jacob",
    invoiceStatus: "Approved"
  },
  {
    invoiceNo: "INV_3",
    invoiceDate: "11/12/2017",
    invoiceDueDate: "13/12/2017",
    supplierName: "Senior",
    invoiceStatus: "Approved"
  }
];

@Component({
  selector: "app-approve-invoices",
  templateUrl: "./approve-invoices.component.html",
  styleUrls: ["./approve-invoices.component.css"]
})
export class ApproveInvoicesComponent implements OnInit {
  constructor() {}
  displayedColumns: string[] = [
    "invoiceNo",
    "invoiceDate",
    "invoiceDueDate",
    "supplierName",
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
