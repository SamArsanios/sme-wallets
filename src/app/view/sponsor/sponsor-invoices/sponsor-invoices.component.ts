import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { Invoice } from 'src/app/model/buyer/invoices/invoice-model';
import { ISponsorInvoices, SponsorInvoicesTable } from './sponsor-invoices.interface';
import { HttpService } from 'src/app/utils/http/http-service';
import { ObjectsUtil } from 'src/app/utils/objects/objects';
import { PopulateTable } from 'src/app/utils/tables/populate.table';
import { SponsorInvoiceData } from 'src/app/service/supplier/sponsor.invoice.data';
// import { BuyerApprovedInvoiceData } from 'src/app/service/supplier/buyer.approved.invoice.data';

@Component({
  selector: "app-sponsor-invoices",
  templateUrl: "./sponsor-invoices.component.html",
  styleUrls: ["./sponsor-invoices.component.css"]
})
export class SponsorInvoicesComponent implements OnInit {
  receivers: Array<Invoice> = new Array<Invoice>();
  numberOfOrders;
  sponsorInvoicesInfoTable: ISponsorInvoices[] = [];
  sponsorInvoiceInfoTableDataSource = new MatTableDataSource(this.sponsorInvoicesInfoTable);

  displayedColumns: string[] = SponsorInvoicesTable.displayedColumns;

  // tslint:disable-next-line:max-line-length
  constructor(private httpService: HttpService<Invoice>,
    private objectsUtil: ObjectsUtil<Invoice>,
    private populateTable: PopulateTable<Invoice, ISponsorInvoices>, private router: Router) { }

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  private populateTheTable(): void {

    this.httpService.getRequest('/invoices/findAll').subscribe(response => {

      this.objectsUtil.dataObjectToArray(response.body).map(theOder => {
        console.log("the invoiced orders are,", response.body)
        if (theOder.invoiceStatus === "getPaid") {


          this.receivers.push(theOder);
          SponsorInvoiceData.addSponsorInvoiceOrder(theOder)
          SponsorInvoiceData.addSponsorInvoiceOrderToMap(theOder, theOder.id)

        }
      });




      const result = this.populateTable.populateTable(this.objectsUtil.dataObjectToArray(this.receivers), this.sponsorInvoicesInfoTable,
        this.sponsorInvoiceInfoTableDataSource, SponsorInvoicesTable.populateTableOnInit);

      this.sponsorInvoiceInfoTableDataSource = new MatTableDataSource<ISponsorInvoices>(result);

      this.objectsUtil.dataObjectToArray(this.receivers).forEach(e => {

        SponsorInvoiceData.addSponsorInvoiceOrder(e);
        SponsorInvoiceData.addSponsorInvoiceOrderToMap(e, e.id);

      });

    });

    this.sponsorInvoiceInfoTableDataSource.sort = this.sort;
    this.sponsorInvoiceInfoTableDataSource.paginator = this.paginator;

  }

  ngOnInit() {
    this.populateTheTable();
  }

  handleViewOrderClick($event): void {
    // tslint:disable-next-line:radix
    const id = parseInt($event.target.closest("button").id);

    this.router
      .navigate(["sponsor/ViewSponsorInvoicesComponent"])
      .then(e => {
        console.log(
          `the order to view again: ${JSON.stringify(
            SponsorInvoiceData.getSponsorInvoiceMap().get(id),
            null,
            2
          )} `
        );
        SponsorInvoiceData.setIdOfOrderToView(id);
      });
  }

  applyFilter(filterValue: string) {
    this.sponsorInvoiceInfoTableDataSource.filter = filterValue.trim().toLowerCase();
  }
}


