import { Component, ViewChild, OnInit } from "@angular/core";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
export interface IApproveOrder {
  invoiceNo: string;
  invoiceDate: any;
  invoiceDueDate: any;
  recieverName: any;
  invoiceStatus: any;
  
  // action: any;
}

const ELEMENT_DATA: IApproveOrder[] = [
  {
    invoiceNo: "ORD-1",
    invoiceDate: "12 - 12 - 2011",
    invoiceDueDate: "1 - 1 - 2012",
    recieverName: "debs",
    invoiceStatus: "Processing"
  },
  {
    invoiceNo: "ORD-2",
    invoiceDate: "10 - 1 - 2014",
    invoiceDueDate: "2 - 2 - 2014",
    recieverName: "jacob",
    invoiceStatus: "Approved"
  },
  {
    invoiceNo: "ORD-3",
    invoiceDate: "12 - 12 - 2019",
    invoiceDueDate: "20 - 12 - 2019",
    recieverName: "matsiko",
    invoiceStatus: "Approved"
  },
  {
    invoiceNo: "ORD-4",
    invoiceDate: "10 - 11 - 1997",
    invoiceDueDate: "10 - 11 - 1997",
    recieverName: "kanu",
    invoiceStatus: "Processing"
  },
  {
    invoiceNo: "ORD-5",
    invoiceDate: "10 - 5 - 2014",
    invoiceDueDate: "15 - 5 - 2014",
    recieverName: "walus",
    invoiceStatus: "Approved"
  },
  {
    invoiceNo: "ORD-6",
    invoiceDate: "10 - 12 - 2015",
    invoiceDueDate: "11 - 12 - 2015",
    recieverName: "kile",
    invoiceStatus: "Processing"
  },
  {
    invoiceNo: "ORD-7",
    invoiceDate: "1 - 5 - 2016",
    invoiceDueDate: "1 - 6 - 2016",
    recieverName: "mikky",
    invoiceStatus: "Approved"
  },
  {
    invoiceNo: "ORD-8",
    invoiceDate: "1 - 2 - 1996",
    invoiceDueDate: "10 - 2 - 1996",
    recieverName: "mouse",
    invoiceStatus: "Processing"
  },
  {
    invoiceNo: "ORD-9",
    invoiceDate: "10 - 12 - 1999",
    invoiceDueDate: "15 - 12 - 1999",
    recieverName: "sixtus",
    invoiceStatus: "Processing"
  },
  {
    invoiceNo: "ORD-10",
    invoiceDate: "10 - 1 - 2018",
    invoiceDueDate: "1 - 1 - 2018",
    recieverName: "kurata",
    invoiceStatus: "Approved"
  }
];

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.css']
})
export class PaymentInfoComponent implements OnInit {
  constructor() {}

  displayedColumns: string[] = [
    "invoiceNo",
    "invoiceDate",
    "invoiceDueDate",
    "recieverName",
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

  logData(row) {
    console.log(row);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}





