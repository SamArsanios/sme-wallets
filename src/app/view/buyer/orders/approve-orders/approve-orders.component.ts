import { Component, ViewChild, OnInit } from "@angular/core";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import { HttpService } from "../../../../utils/http/http-service";
import { Order } from "../../../../model/buyer/order/order-model";
import { ObjectsUtil } from "../../../../utils/objects/objects";
import { PopulateTable } from "../../../../utils/tables/populate.table";
import { Router } from "@angular/router";
import { IApproveOrder } from "../../payment-info/payment-info.component";
import { PopulateApproveOrderTable } from "./approve.order.model.interface";
import { ApproveOrderData } from "src/app/service/order/approve.order.data";
import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';
import { WebsocketService } from 'src/app/utils/websocket/websocket.service';
import { SocketApproveOrderData } from 'src/app/service/order/socketApprove.data';
import { SocketPopulateApproveOrderTable } from './socket.order.model';

@Component({
  selector: "app-approve-orders",
  templateUrl: "./approve-orders.component.html",
  styleUrls: ["./approve-orders.component.css"]
})
export class ApproveOrdersComponent implements OnInit {
  identity: number;
  receivers: Array<SupplierOrder> = new Array<SupplierOrder>();
  notice = this.receivers
  // c = false
  // k = false
  // g = []
  b = false
  approvedOrdersInfoTable: IApproveOrder[] = [];
  socketApprovedOrdersInfoTable: IApproveOrder[] = [];

  SocketapproveOrdersInfoTableDataSource = new MatTableDataSource(
    this.socketApprovedOrdersInfoTable
  );
  approveOrdersInfoTableDataSource = new MatTableDataSource(
    this.approvedOrdersInfoTable
  );

  displayedColumns: string[] = PopulateApproveOrderTable.displayedColumns;
  static identity: number;

  constructor(
    private httpService: HttpService<SupplierOrder>,
    private objectsUtil: ObjectsUtil<SupplierOrder>,
    private websocketService: WebsocketService,

    private populateTable: PopulateTable<SupplierOrder, IApproveOrder>,
    private router: Router
  )
   {

    this.theNotice()
     
    
     
    }

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;



   public theNotice(): void {
    this.websocketService.notify("/topic/supplierOrders/findAll", (message)=>{
      this.b = true
      this.notice.length = 0;
      var x = JSON.parse(message.body)
      var y = JSON.parse(x.body)
      // this.g.push(y)
      console.log("values yyyyyyyyyyyy", y)
      this.objectsUtil.dataObjectToArray(y).map(theOder => {
        if (theOder.order.orderStatus === "accepted") {
          this.notice.push(theOder);
          SocketApproveOrderData.addApproveOrder(theOder)
          SocketApproveOrderData.addApproveOrderToMap(theOder, theOder.id)
        }
      })
      console.log("the daaaaaaaaaaaaata recieved is", this.notice)
      const result = this.populateTable.populateTable(
        this.objectsUtil.dataObjectToArray(this.notice),
        this.socketApprovedOrdersInfoTable,
        this.SocketapproveOrdersInfoTableDataSource,
        SocketPopulateApproveOrderTable.populateTableOnInit
      );

      this.SocketapproveOrdersInfoTableDataSource = new MatTableDataSource<
        IApproveOrder
      >(result);

      this.objectsUtil.dataObjectToArray(this.notice).forEach(e => {
        console.log("teh reviiiii are", e)
        SocketApproveOrderData.addApproveOrder(e);
        SocketApproveOrderData.addApproveOrderToMap(e, e.id);
      });
    })

    this.SocketapproveOrdersInfoTableDataSource.sort = this.sort;
    this.SocketapproveOrdersInfoTableDataSource.paginator = this.paginator;
this.notice.length = 0;
}

  public populateTheTable(): void {

    this.b = false;
    this.httpService.getRequest("/supplierOrders/findAll").subscribe(response => {
      this.objectsUtil.dataObjectToArray(response.body).map(theOder => {
        if (theOder.order.orderStatus === "accepted") {
          this.receivers.push(theOder);
          ApproveOrderData.addApproveOrder(theOder)
          ApproveOrderData.addApproveOrderToMap(theOder, theOder.id)
        }
      })
      const result = this.populateTable.populateTable(
        this.objectsUtil.dataObjectToArray(this.receivers),
        this.approvedOrdersInfoTable,
        this.approveOrdersInfoTableDataSource,
        PopulateApproveOrderTable.populateTableOnInit
      );

      this.approveOrdersInfoTableDataSource = new MatTableDataSource<
        IApproveOrder
      >(result);

      this.objectsUtil.dataObjectToArray(this.receivers).forEach(e => {
        console.log("teh reviiiii are", e)
        ApproveOrderData.addApproveOrder(e);
        ApproveOrderData.addApproveOrderToMap(e, e.id);
      });
    });

    this.approveOrdersInfoTableDataSource.sort = this.sort;
    this.approveOrdersInfoTableDataSource.paginator = this.paginator;
    // this.theNotice = function(){};

  }


  ngOnInit() {

    this.populateTheTable();
  
  }

  handleViewOrderClick($event): void {
    // tslint:disable-next-line:radix
    const id = parseInt($event.target.closest("button").id);

    this.router.navigate(["buyer/orders/view-all-approved-orders"]).then(() => {
      ApproveOrderData.setIdOfOrderToView(id);
    });
  }

  public static returnId(): number {
    return this.identity;
  }

  applyFilter(filterValue: string) {
    this.approveOrdersInfoTableDataSource.filter = filterValue
      .trim()
      .toLowerCase();
  }
}
