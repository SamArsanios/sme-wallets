// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-supplier-all-orders',
//   templateUrl: './supplier-all-orders.component.html',
//   styleUrls: ['./supplier-all-orders.component.css']
// })
// export class SupplierAllOrdersComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, ViewChild, OnInit } from "@angular/core";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import { HttpService } from "../../../../utils/http/http-service";
import { ObjectsUtil } from "../../../../utils/objects/objects";

import { PopulateTable } from "../../../../utils/tables/populate.table";
import { Router } from "@angular/router";
import { ISupplierAllOrders, PopulateSupplierAllOrderTable } from './supplier.all.order.model.interface';
import {SupplierOrderPDF} from './view-supplier-all-orders/supplier-order-pdf';
import { ApproveSupplierQotData } from 'src/app/service/supplier/supplier.order.data';
import { SupplierAllSupplierOrderData } from 'src/app/service/supplier/supplier.all.order.data';
import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';

@Component({
  selector: 'app-supplier-all-orders',
  templateUrl: './supplier-all-orders.component.html',
  styleUrls: ['./supplier-all-orders.component.css']
})
export class SupplierAllOrdersComponent implements OnInit {
  supplierAllOrdersInfoTable: ISupplierAllOrders[] = [];
  supplierAllOrdersInfoTableDataSource = new MatTableDataSource(
    this.supplierAllOrdersInfoTable
  );

  displayedColumns: string[] =
    PopulateSupplierAllOrderTable.displayedColumns;

  // tslint:disable-next-line:max-line-length
  constructor(
    private httpService: HttpService<SupplierOrder>,
    private objectsUtil: ObjectsUtil<SupplierOrder>,
    private populateTable: PopulateTable<SupplierOrder, ISupplierAllOrders>,
    private router: Router
  ) {}

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  private populateTheTable(): void {
    this.httpService.getRequest("/supplierOrders/findAll").subscribe(response => {
        
          const result = this.populateTable.populateTable(
                  this.objectsUtil.dataObjectToArray(response.body),
                  this.supplierAllOrdersInfoTable,
                  this.supplierAllOrdersInfoTableDataSource,
                  PopulateSupplierAllOrderTable.populateTableOnInit
          )

          this.supplierAllOrdersInfoTableDataSource = new MatTableDataSource<
          ISupplierAllOrders>(result);

          this.objectsUtil.dataObjectToArray(response.body).forEach(e => {
            SupplierAllSupplierOrderData.addAAllSupplierSupplierOrder(e);
            SupplierAllSupplierOrderData.addAAllSupplierSupplierOrderToMap(e, e.id);
          });

          this.supplierAllOrdersInfoTableDataSource.sort = this.sort;
          this.supplierAllOrdersInfoTableDataSource.paginator = this.paginator;
          
    
      })
          }


  ngOnInit() {
    this.populateTheTable();
  }

  handleViewOrderClick($event): void {
    // tslint:disable-next-line:radix
    const id = parseInt($event.target.closest("button").id);

    this.router
      .navigate(["/supplier/viewallsuppliers"])
      .then(e => {
        console.log(
          `the order to view again: ${JSON.stringify(
            SupplierAllSupplierOrderData.getsupplierAllSupplierSupplierOrderMap().get(id),
            null,
            2
          )} `
        );
        SupplierAllSupplierOrderData.setIdOfSupplierOrderToView(id);
      });
  }

  applyFilter(filterValue: string) {
    this.supplierAllOrdersInfoTableDataSource.filter = filterValue
      .trim()
      .toLowerCase();
  }
}

