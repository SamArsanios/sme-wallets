import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
export interface IAllOrders {
  sNo: string;
  Description: any;
  Debits: any;
  Credits: string;
  TotalBalance: string;
  Date: any;
  // action: any;
}

const ELEMENT_DATA: IAllOrders[] = [
  {
    sNo: "ORD-1",
    Description: "toyota",
    Debits: "500",
    Credits: "20000",
    TotalBalance: "19500",
    Date: "1 - 1 - 2012"
  },
  {
    sNo: "ORD-2",
    Description: "for only paultry",
    Debits: "1000",
    Credits: "19500",
    TotalBalance: "18500",
    Date: "1 - 1 - 2012"
  },
  {
    sNo: "ORD-3",
    Description: "piggery project",
    Debits: "500",
    Credits: "18500",
    TotalBalance: "18000",
    Date: "1 - 1 - 2012"
  },
  {
    sNo: "ORD-4",
    Description: "giant flat",
    Debits: "1000",
    Credits: "18000",
    TotalBalance: "17000",
    Date: "1 - 1 - 2012"
  },
  {
    sNo: "ORD-5",
    Description: "coffee sprays",
    Debits: "500",
    Credits: "17000",
    TotalBalance: "18500",
    Date: "1 - 1 - 2012"
  },
  {
    sNo: "ORD-6",
    Description: "coffee sprays",
    Debits: "500",
    Credits: "17000",
    TotalBalance: "18500",
    Date: "1 - 1 - 2012"
  },
  {
    sNo: "ORD-7",
    Description: "coffee sprays",
    Debits: "500",
    Credits: "17000",
    TotalBalance: "18500",
    Date: "1 - 1 - 2012"
  },
  {
    sNo: "ORD-8",
    Description: "coffee sprays",
    Debits: "500",
    Credits: "17000",
    TotalBalance: "18500",
    Date: "1 - 1 - 2012"
  },
  {
    sNo: "ORD-9",
    Description: "coffee sprays",
    Debits: "500",
    Credits: "17000",
    TotalBalance: "18500",
    Date: "1 - 1 - 2012"
  },
  {
    sNo: "ORD-10",
    Description: "coffee sprays",
    Debits: "500",
    Credits: "17000",
    TotalBalance: "18500",
    Date: "1 - 1 - 2012"
  }
];
@Component({
  selector: 'app-transactional-history',
  templateUrl: './transactional-history.component.html',
  styleUrls: ['./transactional-history.component.css']
})
export class TransactionalHistoryComponent implements OnInit {

  constructor() {}

  displayedColumns: string[] = [
    "sNo",
    "Description",
    "Debits",
    "Credits",
    "TotalBalance",
    "Date"
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

