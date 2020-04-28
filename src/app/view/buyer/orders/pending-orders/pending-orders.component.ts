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
  receivers: Array<Order> = new Array<Order>();
  pendingOrdersInfoTable: IPendingOrder[] = [];
  pendingOrdersInfoTableDataSource = new MatTableDataSource(
    this.pendingOrdersInfoTable
  );

  displayedColumns: string[] = PopulatePendingOrderTable.displayedColumns;

  constructor(
    private httpService: HttpService<Order>,
    private objectsUtil: ObjectsUtil<Order>,
    private populateTable: PopulateTable<Order, IPendingOrder>,
    private router: Router,
    private websocketService: WebsocketService,

    // private webSocketService: WebsocketService
  ) {
    // this.populateTheTable();
    this.theNotice()
  }

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  theNotice(): void {
    this.websocketService.notify("/topic/orders/findAll", (message)=>{
      var x = JSON.parse(message.body)
      var y = JSON.parse(x.body)
      


        this.objectsUtil.dataObjectToArray(y).map(theOder => {
          console.log(`the pending orders are ${JSON.stringify(theOder)}`)
  
          if (theOder.orderStatus === "pending") {
  
            this.receivers.push(theOder);
            PendingOrderData.addAPendingOrder(theOder);
            PendingOrderData.addAPendingOrderToMap(theOder, theOder.id);
  
          }
        });
  
        const result = this.populateTable.populateTable(this.objectsUtil.dataObjectToArray(this.receivers), this.pendingOrdersInfoTable,
          this.pendingOrdersInfoTableDataSource, PopulatePendingOrderTable.populateTableOnInit);
  
        this.pendingOrdersInfoTableDataSource = new MatTableDataSource<IPendingOrder>(result);
  
        this.objectsUtil.dataObjectToArray(this.receivers).forEach(e => {
  
          PendingOrderData.addAPendingOrder(e);
          PendingOrderData.addAPendingOrderToMap(e, e.id);
  
        });
  
      });
  
      this.pendingOrdersInfoTableDataSource.sort = this.sort;
      this.pendingOrdersInfoTableDataSource.paginator = this.paginator;
    
    
    // console.log("the value of fr", this.fr)


  }
  
  
  private populateTheTable(): void {

    this.httpService.getRequest('/orders/findAll').subscribe(response => {

      this.objectsUtil.dataObjectToArray(response.body).map(theOder => {
        console.log(`the pending orders are ${JSON.stringify(theOder)}`)

        if (theOder.orderStatus === "pending") {

          this.receivers.push(theOder);
          PendingOrderData.addAPendingOrder(theOder);
          PendingOrderData.addAPendingOrderToMap(theOder, theOder.id);

        }
      });

      const result = this.populateTable.populateTable(this.objectsUtil.dataObjectToArray(this.receivers), this.pendingOrdersInfoTable,
        this.pendingOrdersInfoTableDataSource, PopulatePendingOrderTable.populateTableOnInit);

      this.pendingOrdersInfoTableDataSource = new MatTableDataSource<IPendingOrder>(result);

      this.objectsUtil.dataObjectToArray(this.receivers).forEach(e => {

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
