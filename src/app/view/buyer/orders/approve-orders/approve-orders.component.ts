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

@Component({
  selector: "app-approve-orders",
  templateUrl: "./approve-orders.component.html",
  styleUrls: ["./approve-orders.component.css"]
})
export class ApproveOrdersComponent implements OnInit {
  identity: number;
  receivers: Array<SupplierOrder> = new Array<SupplierOrder>();
  approvedOrdersInfoTable: IApproveOrder[] = [];
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
     this.populateTheTable()
     this.theNotice()
    }

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


  theNotice(): void {
    this.websocketService.notify("/topic/supplierOrders/findAll", (message)=>{
      var x = JSON.parse(message.body)
      var y = JSON.parse(x.body)
      console.log("keeeeep uuuuuuuuuuuup", y)

      this.objectsUtil.dataObjectToArray(y).map(theOder => {
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

  }

  private populateTheTable(): void {
    this.httpService.getRequest("/supplierOrders/findAll").subscribe(response => {
      this.objectsUtil.dataObjectToArray(response.body).map(theOder => {
        if (theOder.order.orderStatus === "accepted") {
          this.receivers.push(theOder);
          ApproveOrderData.addApproveOrder(theOder)
          ApproveOrderData.addApproveOrderToMap(theOder, theOder.id)
        }
      })
console.log("the daaaaaaaaaaaaata recieved is", this.receivers)
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
  }

  ngOnInit() {
    this.populateTheTable();
    console.log(`laaaaaaaaaaaap1fffffffffffffffff${this.receivers}`)
  }

  handleViewOrderClick($event): void {
    // tslint:disable-next-line:radix
    const id = parseInt($event.target.closest("button").id);

    this.router.navigate(["buyer/orders/view-all-approved-orders"]).then(() => {
      ApproveOrderData.setIdOfOrderToView(id);
    });
  }

  // handleViewOrderClick($event): void {
    
  //   const id = parseInt($event.target.closest("button").id);
  //   const saveid = JSON.stringify(id);
  //   this.identity = id;
  //   this.router.navigate(["buyer/orders/view-all-approved-orders"]).then(e => {
  //     console.log(`The Current ID is ${id}`);
  //     localStorage.setItem("viewid", saveid);

  //     console.log(
  //       `the order to view again: ${JSON.stringify(
  //         ApproveOrderData.getApproveOrderMap().get(id),
  //         null,
  //         2
  //       )} `
  //     );
      
  //     ApproveOrderData.setIdOfOrderToView(id);


  //   });
  // }

  public static returnId(): number {
    return this.identity;
  }

  applyFilter(filterValue: string) {
    this.approveOrdersInfoTableDataSource.filter = filterValue
      .trim()
      .toLowerCase();
  }
}
