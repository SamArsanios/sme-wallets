import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { HttpService } from '../../../../utils/http/http-service';
import { ObjectsUtil } from '../../../../utils/objects/objects';
import { PopulateTable } from '../../../../utils/tables/populate.table';
import { Router } from '@angular/router';
import { ApprovedInvoicesTable, IApprovedInvoices } from './buyer-approved-invoice-model-interface';
import { Invoice } from 'src/app/model/buyer/invoices/invoice-model';
import { BuyerApprovedInvoiceData } from 'src/app/service/supplier/buyer.approved.invoice.data';

@Component({
  selector: "app-approved-invoices",
  templateUrl: "./approved-invoices.component.html",
  styleUrls: ["./approved-invoices.component.css"]
})
export class ApprovedInvoicesComponent implements OnInit {
  receivers: Array<Invoice> = new Array<Invoice>();
  numberOfOrders;
  allApprovedInvoicesInfoTable: IApprovedInvoices[] = [];
  buyerInvoicedInfoTableDataSource = new MatTableDataSource(this.allApprovedInvoicesInfoTable);

  displayedColumns: string[] = ApprovedInvoicesTable.displayedColumns;

  // tslint:disable-next-line:max-line-length
  constructor(private httpService: HttpService<Invoice>,
    private objectsUtil: ObjectsUtil<Invoice>,
    private populateTable: PopulateTable<Invoice, IApprovedInvoices>, private router: Router) { }

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  private populateTheTable(): void {

    this.httpService.getRequest('/invoices/findAll').subscribe(response => {

      this.objectsUtil.dataObjectToArray(response.body).map(theOder => {
        console.log("the invoiced orders are,", response.body)
        if (theOder.invoiceStatus === "approved") {


          this.receivers.push(theOder);
          BuyerApprovedInvoiceData.addAbuyerApprovedInvoices(theOder)
          BuyerApprovedInvoiceData.addAbuyerApprovedInvoicesToMap(theOder, theOder.id)

        }
      });




      const result = this.populateTable.populateTable(this.objectsUtil.dataObjectToArray(this.receivers), this.allApprovedInvoicesInfoTable,
        this.buyerInvoicedInfoTableDataSource, ApprovedInvoicesTable.populateTableOnInit);

      this.buyerInvoicedInfoTableDataSource = new MatTableDataSource<IApprovedInvoices>(result);

      this.objectsUtil.dataObjectToArray(this.receivers).forEach(e => {

        BuyerApprovedInvoiceData.addAbuyerApprovedInvoices(e);
        BuyerApprovedInvoiceData.addAbuyerApprovedInvoicesToMap(e, e.id);

      });

    });

    this.buyerInvoicedInfoTableDataSource.sort = this.sort;
    this.buyerInvoicedInfoTableDataSource.paginator = this.paginator;

  }

  ngOnInit() {
    this.populateTheTable();
  }

  handleViewOrderClick($event): void {
    // tslint:disable-next-line:radix
    const id = parseInt($event.target.closest("button").id);

    this.router
      .navigate(["buyer/vault/view-approve-invoices"])
      .then(e => {
        console.log(
          `the order to view again: ${JSON.stringify(
            BuyerApprovedInvoiceData.getbuyerApprovedInvoiceMap().get(id),
            null,
            2
          )} `
        );
        BuyerApprovedInvoiceData.setIdOfOrderToView(id);
      });
  }

  applyFilter(filterValue: string) {
    this.buyerInvoicedInfoTableDataSource.filter = filterValue.trim().toLowerCase();
  }
}


