import { Component, ViewChild, OnInit } from "@angular/core";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
export interface IApproveOrder {
  orderNo: string;
  orderDate: any;
  orderDueDate: any;
  orderStatus: string;
  // action: any;
}

const ELEMENT_DATA: IApproveOrder[] = [
  {
    orderNo: "ORD-1",
    orderDate: "12 - 12 - 2011",  
    orderDueDate: "1 - 1 - 2012",
    orderStatus: "Processing"
  },
  {
    orderNo: "ORD-2",
    orderDate: "10 - 1 - 2014",
    orderDueDate: "2 - 2 - 2014",
    orderStatus: "Approved"
  },
  {
    orderNo: "ORD-3",
    orderDate: "12 - 12 - 2019",
    orderDueDate: "20 - 12 - 2019",
    orderStatus: "Approved"
  },
  {
    orderNo: "ORD-4",
    orderDate: "10 - 11 - 1997",
    orderDueDate: "10 - 11 - 1997",
    orderStatus: "Processing"
  },
  {
    orderNo: "ORD-5",
    orderDate: "10 - 5 - 2014",
    orderDueDate: "15 - 5 - 2014",
    orderStatus: "Approved"
  },
  {
    orderNo: "ORD-6",
    orderDate: "10 - 12 - 2015",
    orderDueDate: "11 - 12 - 2015",
    orderStatus: "Processing"
  },
  {
    orderNo: "ORD-7",
    orderDate: "1 - 5 - 2016",
    orderDueDate: "1 - 6 - 2016",
    orderStatus: "Approved"
  },
  {
    orderNo: "ORD-8",
    orderDate: "1 - 2 - 1996",
    orderDueDate: "10 - 2 - 1996",
    orderStatus: "Processing"
  },
  {
    orderNo: "ORD-9",
    orderDate: "10 - 12 - 1999",
    orderDueDate: "15 - 12 - 1999",
    orderStatus: "Processing"
  },
  {
    orderNo: "ORD-10",
    orderDate: "10 - 1 - 2018",
    orderDueDate: "1 - 1 - 2018",
    orderStatus: "Approved"
  }
];
@Component({
  selector: "app-approve-orders",
  templateUrl: "./approve-orders.component.html",
  styleUrls: ["./approve-orders.component.css"]
})
export class ApproveOrdersComponent implements OnInit {
  constructor() {}

  displayedColumns: string[] = [
    "orderNo",
    "orderDate",
    "orderDueDate",
    "action",
    "orderStatus",
    "empty"
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
