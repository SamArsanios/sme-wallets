import { Component, ViewChild, OnInit } from "@angular/core";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import { HttpService } from "../../../../utils/http/http-service";
import { Order } from "../../../../model/buyer/order/order-model";
import { ObjectsUtil } from "../../../../utils/objects/objects";
import {
  IPendingOrder,
  PopulatePendingOrderTable
} from "./pending.order.model.interface";
import { PopulateTable } from "../../../../utils/tables/populate.table";
import { PendingOrderData } from "../../../../service/order/pending.order.data";
import { Router } from "@angular/router";
import { WebsocketService } from "../../../../utils/websocket/websocket.service";

@Component({
  selector: "app-pending-orders",
  templateUrl: "./pending-orders.component.html",
  styleUrls: ["./pending-orders.component.css"]
})
export class PendingOrdersComponent implements OnInit {
  pendingOrdersInfoTable: IPendingOrder[] = [];
  pendingOrdersInfoTableDataSource = new MatTableDataSource(
    this.pendingOrdersInfoTable
  );

  displayedColumns: string[] = PopulatePendingOrderTable.displayedColumns;

  // tslint:disable-next-line:max-line-length
  constructor(
    private httpService: HttpService<Order>,
    private objectsUtil: ObjectsUtil<Order>,
    private populateTable: PopulateTable<Order, IPendingOrder>,
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
        this.pendingOrdersInfoTable,
        this.pendingOrdersInfoTableDataSource,
        PopulatePendingOrderTable.populateTableOnInit
      );
      console.log(`seeeeeerching ${JSON.stringify(this.objectsUtil.dataObjectToArray(response.body))}`)

      this.pendingOrdersInfoTableDataSource = new MatTableDataSource<
        IPendingOrder
      >(result);

      this.objectsUtil.dataObjectToArray(response.body).forEach(e => {
        PendingOrderData.addAPendingOrder(e);
        PendingOrderData.addAPendingOrderToMap(e, e.id);
      });
    });

    this.pendingOrdersInfoTableDataSource.sort = this.sort;
    this.pendingOrdersInfoTableDataSource.paginator = this.paginator;
  }

  

  ngOnInit() {
    this.populateTheTable();
  }

  handleViewOrderClick($event): void {
    // tslint:disable-next-line:radix
    const id = parseInt($event.target.closest("button").id);

    this.router.navigate(["/buyer/orders/view-orders"]).then(() => {
      PendingOrderData.setIdOfOrderToView(id);
    });
  }

  applyFilter(filterValue: string) {
    this.pendingOrdersInfoTableDataSource.filter = filterValue
      .trim()
      .toLowerCase();
  }
}
