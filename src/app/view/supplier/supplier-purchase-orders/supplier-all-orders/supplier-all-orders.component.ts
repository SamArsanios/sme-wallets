import { Component, ViewChild, OnInit } from "@angular/core";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import { HttpService } from "../../../../utils/http/http-service";
import { Order } from "../../../../model/buyer/order/order-model";
import { ObjectsUtil } from "../../../../utils/objects/objects";

import { PopulateTable } from "../../../../utils/tables/populate.table";
import { Router } from "@angular/router";
import { WebsocketService } from "../../../../utils/websocket/websocket.service";
import { ISupplierAllOrders, PopulateSupplierAllOrderTable } from './supplier.all.order.model.interface';
import { SupplierAllOrderData } from 'src/app/service/supplier/supplier.all.order.data';

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

  displayedColumns: string[] = PopulateSupplierAllOrderTable.displayedColumns;

  // tslint:disable-next-line:max-line-length
  constructor(
    private httpService: HttpService<Order>,
    private objectsUtil: ObjectsUtil<Order>,
    private populateTable: PopulateTable<Order, ISupplierAllOrders>,
    private router: Router,
    private webSocketService: WebsocketService
  ) {
    this.populateTheTable();
  }

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  private populateTheTable(): void {
    this.httpService.getRequest("/orders/findAll").subscribe(response => {
      const result = this.populateTable.populateTable(
        this.objectsUtil.dataObjectToArray(response.body),
        this.supplierAllOrdersInfoTable,
        this.supplierAllOrdersInfoTableDataSource,
       PopulateSupplierAllOrderTable.populateTableOnInit
      );
      console.log(`seeeeeerching ${JSON.stringify(this.objectsUtil.dataObjectToArray(response.body))}`)

      this.supplierAllOrdersInfoTableDataSource = new MatTableDataSource<
        ISupplierAllOrders
      >(result);

      this.objectsUtil.dataObjectToArray(response.body).forEach(e => {
        SupplierAllOrderData.addAsupplierAllOrder(e);
        SupplierAllOrderData.addAsupplierAllOrderToMap(e, e.id);
      });
    });

    this.supplierAllOrdersInfoTableDataSource.sort = this.sort;
    this.supplierAllOrdersInfoTableDataSource.paginator = this.paginator;
  }

  

  ngOnInit() {
    this.populateTheTable();
    console.log(`table data id ${this.supplierAllOrdersInfoTableDataSource}`)
  }

  handleViewOrderClick($event): void {
    // tslint:disable-next-line:radix
    const id = parseInt($event.target.closest("button").id);

    this.router.navigate(["/buyer/orders/view-orders"]).then(() => {
      SupplierAllOrderData.setIdOfOrderToView(id);
    });
  }

  applyFilter(filterValue: string) {
    this.supplierAllOrdersInfoTableDataSource.filter = filterValue
      .trim()
      .toLowerCase();
  }
}
