import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { HttpService } from '../../../../utils/http/http-service';
import { ObjectsUtil } from '../../../../utils/objects/objects';
import { PopulateTable } from '../../../../utils/tables/populate.table';
import { Router } from '@angular/router';
import { ISupplierApprovedOrders, PopulateSupplierApprovedOrderTable } from './supplier.approved.invoices.model.interface';
import { SupplierApprovedOrdersData } from 'src/app/service/supplier/supplier.approved.order.data';
import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';
// import { SupplierPendingOrderData } from 'src/app/service/order/supplier.pending.order.data';
// import { ISupplierApprovedOrders, PopulateSupplierPendingOrderTable } from './supplier.pending.order.model.interface';

@Component({
  selector: "app-supplier-approved-invoices",
  templateUrl: "./supplier-approved-invoices.component.html",
  styleUrls: ["./supplier-approved-invoices.component.css"]
})
export class SupplierApprovedInvoicesComponent implements OnInit {
  receivers: Array<SupplierOrder> = new Array<SupplierOrder>();
  numberOfOrders;
  allOrdersInfoTable: ISupplierApprovedOrders[] = [];
 supplierApprovedOrdersInfoTableDataSource = new MatTableDataSource(this.allOrdersInfoTable);

  displayedColumns: string[] = PopulateSupplierApprovedOrderTable.displayedColumns;

  // tslint:disable-next-line:max-line-length
  constructor( private httpService: HttpService<SupplierOrder>,
     private objectsUtil: ObjectsUtil<SupplierOrder>,
      private populateTable: PopulateTable<SupplierOrder, ISupplierApprovedOrders>, private router: Router) { }

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  private populateTheTable(): void {

    this.httpService.getRequest('/supplierOrders/findAll').subscribe(response => {

      this.objectsUtil.dataObjectToArray(response.body).map(theOder => {
        console.log(`the pending orders are ${JSON.stringify(theOder)}`)

        if (theOder.order.orderStatus === "approved") {

          this.receivers.push(theOder);
          SupplierApprovedOrdersData.addAsupplierApprovedOrders(theOder)
          SupplierApprovedOrdersData.addAsupplierApprovedOrdersToMap(theOder, theOder.id)
          // alert(`these are all the orders made by id1 ${this.receivers}`)

        }
      });




      const result = this.populateTable.populateTable(this.objectsUtil.dataObjectToArray(this.receivers), this.allOrdersInfoTable,
        this.supplierApprovedOrdersInfoTableDataSource, PopulateSupplierApprovedOrderTable.populateTableOnInit);

      this.supplierApprovedOrdersInfoTableDataSource = new MatTableDataSource<ISupplierApprovedOrders>(result);

      this.objectsUtil.dataObjectToArray(this.receivers).forEach(e => {

         SupplierApprovedOrdersData.addAsupplierApprovedOrders(e);
         SupplierApprovedOrdersData.addAsupplierApprovedOrdersToMap(e, e.id);

      });

    });

    this.supplierApprovedOrdersInfoTableDataSource.sort = this.sort;
    this.supplierApprovedOrdersInfoTableDataSource.paginator = this.paginator;

  }

  ngOnInit() {
    this.populateTheTable();
  }

  handleViewOrderClick($event): void {
        // tslint:disable-next-line:radix
        const id = parseInt($event.target.closest("button").id);
    
        this.router
          .navigate(["/supplier/view-approved-invoice-component"])
          .then(e => {
            console.log(
              `the order to view again: ${JSON.stringify(
                SupplierApprovedOrdersData.getsupplierApprovedOrdersMap().get(id),
                null,
                2
              )} `
            );
            SupplierApprovedOrdersData.setIdOfOrderToView(id);
          });
      } 

  applyFilter(filterValue: string) {
    this.supplierApprovedOrdersInfoTableDataSource.filter = filterValue.trim().toLowerCase();
  }
}


