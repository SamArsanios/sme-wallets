import { Component, ViewChild, OnInit, Input, Output, EventEmitter } from "@angular/core";
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
import { SocketPendingOrderData } from 'src/app/service/order/socket-pending-order-data';
import { PopulateSocketPendingOrderTable } from './socket.pending.model';

@Component({
  selector: "app-pending-orders",
  templateUrl: "./pending-orders.component.html",
  styleUrls: ["./pending-orders.component.css"]
})
export class PendingOrdersComponent implements OnInit {
  receivers: Array<Order> = new Array<Order>();
  notificationNumber;

  currentUser: string;
  @Input() receivedParentMessage: string;
  @Output() exampleOutput = new EventEmitter<string>()
  exampleMethodChild(){
    this.exampleOutput.emit(this.notificationNumber)
  }

  SocketPendingOrdersInfoTable: IPendingOrder[] = [];
  pendingOrdersInfoTable:IPendingOrder[] = [];
  pendingOrdersInfoTableDataSource = new MatTableDataSource(
    this.pendingOrdersInfoTable);
  socketPendingOrdersInfoTableDataSource = new MatTableDataSource(
    this.SocketPendingOrdersInfoTable
  );

  displayedColumns: string[] = PopulatePendingOrderTable.displayedColumns;
b = false;
notice = [];
  constructor(
    private httpService: HttpService<Order>,
    private objectsUtil: ObjectsUtil<Order>,
    private populateTable: PopulateTable<Order, IPendingOrder>,
    private router: Router,
    private websocketService: WebsocketService,

  ) {
    this.theNotice()
  }

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  
  public theNotice(): void {
    this.websocketService.notify("/topic/orders/findAll", (message)=>{
      this.b = true
      this.notice.length = 0;
      var x = JSON.parse(message.body)
      var y = JSON.parse(x.body)
      console.log("values yyyyyyyyyyyy", y)
      this.objectsUtil.dataObjectToArray(y).map(theOder => {
        if (theOder.orderStatus === "pending") {
          this.notice.push(theOder);
          this.notificationNumber = this.notice.length
          this.exampleMethodChild()
          SocketPendingOrderData.addAPendingOrder(theOder)
          SocketPendingOrderData.addAPendingOrderToMap(theOder, theOder.id)
        }
      })
      console.log("the daaaaaaaaaaaaata recieved is", this.notice)
      const result = this.populateTable.populateTable(
        this.objectsUtil.dataObjectToArray(this.notice),
        this.SocketPendingOrdersInfoTable,
        this.socketPendingOrdersInfoTableDataSource,
        PopulateSocketPendingOrderTable.populateTableOnInit
      );

      this.socketPendingOrdersInfoTableDataSource = new MatTableDataSource<
        IPendingOrder
      >(result);

      this.objectsUtil.dataObjectToArray(this.notice).forEach(e => {
        console.log("teh reviiiii are", e)
        SocketPendingOrderData.addAPendingOrder(e);
        SocketPendingOrderData.addAPendingOrderToMap(e, e.id);
      });
    })

    this.socketPendingOrdersInfoTableDataSource.sort = this.sort;
    this.socketPendingOrdersInfoTableDataSource.paginator = this.paginator;
this.notice.length = 0;
}
  
  
  private populateTheTable(): void {
    this.b = false;

    this.httpService.getRequest('/orders/findAll').subscribe(response => {

      this.objectsUtil.dataObjectToArray(response.body).map(theOder => {
        console.log(`the pending orders are ${JSON.stringify(theOder)}`)

        if (theOder.orderStatus === "pending") {

          this.receivers.push(theOder);
          this.notificationNumber = this.receivers.length
          this.exampleMethodChild()
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
