import { Component, ViewChild, OnInit } from "@angular/core";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import { HttpService } from "../../../../utils/http/http-service";
import { ObjectsUtil } from "../../../../utils/objects/objects";
// import {
//   IBuyerAllInvoices,
//   PopulateBuyerInvoiceInfoTable
// } from "./buyer-all-invoices-model";
import { PopulateTable } from "../../../../utils/tables/populate.table";
import { Router } from "@angular/router";
import { Invoice } from 'src/app/model/buyer/invoices/invoice-model';
import { BuyerAllInvoicesInvoiceData } from 'src/app/service/order/buyer.allInvoices.invoice.data';
import { IBuyerAllInvoices, PopulateBuyerInvoiceInfoTable } from './buyer-all-invoices-interface';
import { WebsocketService } from 'src/app/utils/websocket/websocket.service';

@Component({

  selector: "app-all-invoices",
  templateUrl: "./all-invoices.component.html",
  styleUrls: ["./all-invoices.component.css"]
})
export class AllInvoicesComponent implements OnInit {

  buyerInvoiceInfoTable: IBuyerAllInvoices[] = [];
  buyerInvoiceInfoTableDataSource = new MatTableDataSource(
    this.buyerInvoiceInfoTable
  );

  displayedColumns: string[] =
  PopulateBuyerInvoiceInfoTable.displayedColumns;

  // tslint:disable-next-line:max-line-length

  constructor(
    private httpService: HttpService<any>,
    private objectsUtil: ObjectsUtil<Invoice>,
    private websocketService: WebsocketService,

    private populateTable: PopulateTable<Invoice, IBuyerAllInvoices>,
    private router: Router
  ) {
    this.theNotice()
  }

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


  theNotice(): void {
    this.websocketService.notify("/topic/invoices/findAll", (message)=>{
      
      var x = JSON.parse(message.body)
      var y = JSON.parse(x.body)


        const result = this.populateTable.populateTable(
          this.objectsUtil.dataObjectToArray(y),
          this.buyerInvoiceInfoTable,
          this.  buyerInvoiceInfoTableDataSource,
          PopulateBuyerInvoiceInfoTable.populateTableOnInit
        );
        console.log(`the result is ${result}`)
  
        this.buyerInvoiceInfoTableDataSource = new MatTableDataSource<
        IBuyerAllInvoices
        >(result);
  
        this.objectsUtil.dataObjectToArray(y).forEach(e => {
          BuyerAllInvoicesInvoiceData.addSupplierPendingInvoice(e)
          BuyerAllInvoicesInvoiceData.addSupplierPendingInvoiceToMap(e, e.id)
        });
      });
  
      this. buyerInvoiceInfoTableDataSource.sort = this.sort;
      this. buyerInvoiceInfoTableDataSource.paginator = this.paginator;

  }


  private populateTheTable(): void {

    this.httpService.getRequest("/invoices/findAll").subscribe(response => {

      const result = this.populateTable.populateTable(
        this.objectsUtil.dataObjectToArray(response.body),
        this.buyerInvoiceInfoTable,
        this.  buyerInvoiceInfoTableDataSource,
        PopulateBuyerInvoiceInfoTable.populateTableOnInit
      );
      console.log(`the result is ${result}`)

      this.buyerInvoiceInfoTableDataSource = new MatTableDataSource<
      IBuyerAllInvoices
      >(result);

      this.objectsUtil.dataObjectToArray(response.body).forEach(e => {
        BuyerAllInvoicesInvoiceData.addSupplierPendingInvoice(e)
        BuyerAllInvoicesInvoiceData.addSupplierPendingInvoiceToMap(e, e.id)
      });
    });

    this. buyerInvoiceInfoTableDataSource.sort = this.sort;
    this. buyerInvoiceInfoTableDataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.populateTheTable();

  }

  handleViewOrderClick($event): void {
    const id = parseInt($event.target.closest("button").id);
    console.log(`the id is ${id}`)
    this.router.navigate(["/buyer/invoices/viewRaisedInvoices"]).then(() => {
     
      BuyerAllInvoicesInvoiceData.setIdOfInvoiceToView(id);
    });
    
  }
  
  applyFilter(filterValue: string) {
    this.buyerInvoiceInfoTableDataSource.filter = filterValue
      .trim()
      .toLowerCase();
  }
}
