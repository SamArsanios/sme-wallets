import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";

export interface ISupplierApprovedInvoices {
  invoiceNo: string;
  invoiceDate: any;
  invoiceDueDate: any;
  customerName: string;
  invoiceTotal: number;
  invoiceStatus: string;
  // action: any;
}

const ELEMENT_DATA: ISupplierApprovedInvoices[] = [
  {
    invoiceNo: "INV_1",
    invoiceDate: "10/12/2019",
    invoiceDueDate: "20/12/2019",
    customerName: "Samson Kibrom",
    invoiceTotal: 300000,
    invoiceStatus: "Approved"
  },
  {
    invoiceNo: "INV_2",
    invoiceDate: "1/1/2018",
    invoiceDueDate: "2/2/2019",
    customerName: "Keren Jacob",
    invoiceTotal: 845421,
    invoiceStatus: "Approved"
  },
  {
    invoiceNo: "INV_3",
    invoiceDate: "11/12/2017",
    invoiceDueDate: "13/12/2017",
    customerName: "Senior",
    invoiceTotal: 5653210,
    invoiceStatus: "Approved"
  }
];

@Component({
  selector: "app-supplier-approved-invoices",
  templateUrl: "./supplier-approved-invoices.component.html",
  styleUrls: ["./supplier-approved-invoices.component.css"]
})
export class SupplierApprovedInvoicesComponent implements OnInit {
  constructor() {}
  displayedColumns: string[] = [
    "invoiceNo",
    "invoiceDate",
    "invoiceDueDate",
    "customerName",
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

  displayFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
