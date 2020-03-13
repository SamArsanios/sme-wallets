import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { HttpService } from '../../../../utils/http/http-service';
import { ObjectsUtil } from '../../../../utils/objects/objects';
// import { ISupplierInvoicedOrders, PopulateSupplierInvoicedOrderTable } from './all.order.model.interface';
import { PopulateTable } from '../../../../utils/tables/populate.table';
// import {  SupplierInvoicedOrderData } from '../../../../service/order/all.order.data';
import { Router } from '@angular/router';
import { ISupplierInvoicedOrders, PopulateSupplierInvoicedOrderTable } from './supplier.invoiced.order.model.interface';
import { SupplierInvoicedOrderData } from 'src/app/service/supplier/supplier.invoiced.order.data';
import { Order } from 'src/app/model/buyer/order/order-model';
// import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';
// import { ISupplierInvoicedOrders, PopulateSupplierInvoicedOrderTable } from './supplier.pending.order.model.interface';

@Component({
  selector: 'app-supplier-invoiced-orders',
  templateUrl: './supplier-invoiced-orders.component.html',
  styleUrls: ['./supplier-invoiced-orders.component.css']
})
export class SupplierInvoicedOrdersComponent implements OnInit {
  receivers: Array<Order> = new Array<Order>();
  numberOfOrders;
  allOrdersInfoTable: ISupplierInvoicedOrders[] = [];
  supplierInvoicedOrdersInfoTableDataSource = new MatTableDataSource(this.allOrdersInfoTable);

  displayedColumns: string[] = PopulateSupplierInvoicedOrderTable.displayedColumns;

  // tslint:disable-next-line:max-line-length
  constructor(private httpService: HttpService<Order>,
    private objectsUtil: ObjectsUtil<Order>,
    private populateTable: PopulateTable<Order, ISupplierInvoicedOrders>, private router: Router) { }

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  private populateTheTable(): void {

    this.httpService.getRequest('/orders/findAll').subscribe(response => {

      this.objectsUtil.dataObjectToArray(response.body).map(theOder => {
        console.log("the invoiced orders are,", response.body)
        // let loggedinUserId = JSON.parse(localStorage.getItem('loggedinUser'))[0].id
        if (theOder.orderStatus === "invoiced") {


          this.receivers.push(theOder);
          SupplierInvoicedOrderData.addSupplierInvoicedOrder(theOder)
          SupplierInvoicedOrderData.addSupplierInvoicedOrderToMap(theOder, theOder.id)
          // alert(`these are all the orders made by id1 ${this.receivers}`)

        }
      });




      const result = this.populateTable.populateTable(this.objectsUtil.dataObjectToArray(this.receivers), this.allOrdersInfoTable,
        this.supplierInvoicedOrdersInfoTableDataSource, PopulateSupplierInvoicedOrderTable.populateTableOnInit);

      this.supplierInvoicedOrdersInfoTableDataSource = new MatTableDataSource<ISupplierInvoicedOrders>(result);

      this.objectsUtil.dataObjectToArray(this.receivers).forEach(e => {

        SupplierInvoicedOrderData.addSupplierInvoicedOrder(e);
        SupplierInvoicedOrderData.addSupplierInvoicedOrderToMap(e, e.id);

      });

    });

    this.supplierInvoicedOrdersInfoTableDataSource.sort = this.sort;
    this.supplierInvoicedOrdersInfoTableDataSource.paginator = this.paginator;

  }

  ngOnInit() {
    this.populateTheTable();
  }

  handleViewOrderClick($event): void {
    // tslint:disable-next-line:radix
    const id = parseInt($event.target.closest("button").id);

    this.router
      .navigate(["/supplier/supplier-purchase-orders/supplier-view-orders"])
      .then(e => {
        console.log(
          `the order to view again: ${JSON.stringify(
            SupplierInvoicedOrderData.getSupplierInvoicedOrderMap().get(id),
            null,
            2
          )} `
        );
        SupplierInvoicedOrderData.setIdOfOrderToView(id);
      });
  }

  applyFilter(filterValue: string) {
    this.supplierInvoicedOrdersInfoTableDataSource.filter = filterValue.trim().toLowerCase();
  }
}

