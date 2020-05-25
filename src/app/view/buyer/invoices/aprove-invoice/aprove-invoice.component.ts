import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { HttpService } from '../../../../utils/http/http-service';
import { ObjectsUtil } from '../../../../utils/objects/objects';
import { PopulateTable } from '../../../../utils/tables/populate.table';
import { Router } from '@angular/router';
import { Invoice } from 'src/app/model/buyer/invoices/invoice-model';
import { BuyerapproveInvoicesData } from 'src/app/service/order/buyerApproveInvoiceData';
import { IBuyerApproveInvoices, PopulateBuyerApproveInvoiceTable } from './buyer.approve.invoices.model.interface';

@Component({
  selector: 'app-aprove-invoice',
  templateUrl: './aprove-invoice.component.html',
  styleUrls: ['./aprove-invoice.component.css']
})
export class AproveInvoiceComponent implements OnInit {
  receivers: Array<Invoice> = new Array<Invoice>();
  numberOfOrders;
  approveInvoiceInfoTable: IBuyerApproveInvoices[] = [];
 buyerApproveInvoiceInfoTableDataSource = new MatTableDataSource(this.approveInvoiceInfoTable);

  displayedColumns: string[] = PopulateBuyerApproveInvoiceTable.displayedColumns;

  // tslint:disable-next-line:max-line-length
  constructor( private httpService: HttpService<Invoice>,
     private objectsUtil: ObjectsUtil<Invoice>,
      private populateTable: PopulateTable<Invoice, IBuyerApproveInvoices>, private router: Router) { }

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  private populateTheTable(): void {

    this.httpService.getRequest('/invoices/findAll').subscribe(response => {

      this.objectsUtil.dataObjectToArray(response.body).map(theOder => {
        console.log(`the pending orders are ${JSON.stringify(theOder)}`)

        if (theOder.invoiceStatus !="approved") {

          this.receivers.push(theOder);
          BuyerapproveInvoicesData.addSupplierPendingInvoice(theOder)
           BuyerapproveInvoicesData.addSupplierPendingInvoiceToMap(theOder, theOder.id)
          // alert(`these are all the orders made by id1 ${this.receivers}`)

        }
      });




      const result = this.populateTable.populateTable(this.objectsUtil.dataObjectToArray(this.receivers), this.approveInvoiceInfoTable,
        this.buyerApproveInvoiceInfoTableDataSource, PopulateBuyerApproveInvoiceTable.populateTableOnInit);

      this.buyerApproveInvoiceInfoTableDataSource = new MatTableDataSource<IBuyerApproveInvoices>(result);

      this.objectsUtil.dataObjectToArray(this.receivers).forEach(e => {

         BuyerapproveInvoicesData.addSupplierPendingInvoice(e);
         BuyerapproveInvoicesData.addSupplierPendingInvoiceToMap(e, e.id);

      });

    });

    this.buyerApproveInvoiceInfoTableDataSource.sort = this.sort;
    this.buyerApproveInvoiceInfoTableDataSource.paginator = this.paginator;

  }

  ngOnInit() {
    this.populateTheTable();
  }

  handleViewOrderClick($event): void {
        // tslint:disable-next-line:radix
        const id = parseInt($event.target.closest("button").id);
    
        this.router
          .navigate(["/buyer/view-approve-invoices"])
          .then(e => {
            console.log(
              `the order to view again: ${JSON.stringify(
                BuyerapproveInvoicesData.getBuyerInvoiceMap().get(id),
                null,
                2
              )} `
            );
            BuyerapproveInvoicesData.setIdOfInvoiceToView(id);
          });
      } 

 
  // handleViewOrderClick($event): void {
  //   const id = parseInt($event.target.closest("button").id);
  //   console.log(`the id is ${id}`)
  //   // this. supsoo()
  //   // this.router.navigate(["/buyer/view-approve-invoices"]).then(() => {
  //     BuyerapproveInvoicesData.getBuyerInvoiceMap().get(id);


    // this.httpService.getRequest("/supplierOrder/findAll").subscribe(response => {
    //   // this.objectsUtil.dataObjectToArray(response.body).map(theOder => {
    //     console.log("the invoiced orders are,", response.body)
    //     const theSupplierOrder = response.body;
    //   //   if (theOder.order.id === order.order.id) {
    //   //     console.log("the supplier order is", theOder)


    //       // this.receivers.push(theOder);
    //       // SupplierInvoicedOrderData.addSupplierInvoicedOrder(theOder)
    //       // SupplierInvoicedOrderData.addSupplierInvoicedOrderToMap(theOder, theOder.id)

    //     })
      // });

    // })
  //   });
    
  // }
  applyFilter(filterValue: string) {
    this.buyerApproveInvoiceInfoTableDataSource.filter = filterValue.trim().toLowerCase();
  }
}





