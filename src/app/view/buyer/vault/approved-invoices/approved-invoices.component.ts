import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { HttpService } from '../../../../utils/http/http-service';
import { ObjectsUtil } from '../../../../utils/objects/objects';
// import { IApprovedInvoices, PopulateSupplierInvoicedOrderTable } from './all.order.model.interface';
import { PopulateTable } from '../../../../utils/tables/populate.table';
// import {  SupplierInvoicedOrderData } from '../../../../service/order/all.order.data';
import { Router } from '@angular/router';
import { SupplierInvoicedOrderData } from 'src/app/service/supplier/supplier.invoiced.order.data';
import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';
import { ApprovedInvoicesTable, IApprovedInvoices } from './buyer-approved-invoice-model-interface';
import { BuyerApprovedInvoiceData } from 'src/app/service/buyer/buyer.approved.invoice.data';
// import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';
// import { IApprovedInvoices, PopulateSupplierInvoicedOrderTable } from './supplier.pending.order.model.interface';

@Component({
  selector: "app-approved-invoices",
  templateUrl: "./approved-invoices.component.html",
  styleUrls: ["./approved-invoices.component.css"]
})
export class ApprovedInvoicesComponent implements OnInit {
  receivers: Array<SupplierOrder> = new Array<SupplierOrder>();
  numberOfOrders;
  allApprovedInvoicesInfoTable: IApprovedInvoices[] = [];
  buyerInvoicedInfoTableDataSource = new MatTableDataSource(this.allApprovedInvoicesInfoTable);

  displayedColumns: string[] = ApprovedInvoicesTable.displayedColumns;

  // tslint:disable-next-line:max-line-length
  constructor(private httpService: HttpService<SupplierOrder>,
    private objectsUtil: ObjectsUtil<SupplierOrder>,
    private populateTable: PopulateTable<SupplierOrder, IApprovedInvoices>, private router: Router) { }

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  private populateTheTable(): void {

    this.httpService.getRequest('/supplierOrders/findAll').subscribe(response => {

      this.objectsUtil.dataObjectToArray(response.body).map(theOder => {
        console.log("the invoiced orders are,", response.body)
        if (theOder.order.orderStatus === "invoiced") {


          this.receivers.push(theOder);
          SupplierInvoicedOrderData.addSupplierInvoicedOrder(theOder)
          SupplierInvoicedOrderData.addSupplierInvoicedOrderToMap(theOder, theOder.id)

        }
      });




      const result = this.populateTable.populateTable(this.objectsUtil.dataObjectToArray(this.receivers), this.allApprovedInvoicesInfoTable,
        this.buyerInvoicedInfoTableDataSource, ApprovedInvoicesTable.populateTableOnInit);

      this.buyerInvoicedInfoTableDataSource = new MatTableDataSource<IApprovedInvoices>(result);

      this.objectsUtil.dataObjectToArray(this.receivers).forEach(e => {

        BuyerApprovedInvoiceData.addABuyerApprovedInvoices(e);
        BuyerApprovedInvoiceData.addABuyerApprovedInvoicesToMap(e, e.id);

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
      .navigate(["buyer/view-approve-invoices"])
      .then(e => {
        console.log(
          `the order to view again: ${JSON.stringify(
            BuyerApprovedInvoiceData.getbuyerApprovedInvoicesMap().get(id),
            null,
            2
          )} `
        );
        BuyerApprovedInvoiceData.setIdOfInvoiceToView(id);
      });
  }

  applyFilter(filterValue: string) {
    this.buyerInvoicedInfoTableDataSource.filter = filterValue.trim().toLowerCase();
  }
}


