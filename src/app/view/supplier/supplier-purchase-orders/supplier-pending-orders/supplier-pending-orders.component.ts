import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { HttpService } from '../../../../utils/http/http-service';
import { Order } from '../../../../model/buyer/order/order-model';
import { ObjectsUtil } from '../../../../utils/objects/objects';
import { PopulateTable } from '../../../../utils/tables/populate.table';
import { Router } from '@angular/router';
import { SupplierPendingOrderData } from 'src/app/service/order/supplier.pending.order.data';
import { ISupplierPendingOrders, PopulateSupplierPendingOrderTable } from './supplier.pending.order.model.interface';
import { WebsocketService } from 'src/app/utils/websocket/websocket.service';
import { SocketSupplierPendingOrderData } from 'src/app/service/supplier/socket.supplier.pending.order.data';
import { SocketPopulateSupplierPendingOrderTable } from './socket.supplier-pending-orders.model';
import { IPendingOrder } from 'src/app/view/buyer/orders/pending-orders/socket.pending.model';

@Component({
  selector: "app-supplier-pending-orders",
  templateUrl: "./supplier-pending-orders.component.html",
  styleUrls: ["./supplier-pending-orders.component.css"]
})
export class SupplierPendingOrdersComponent implements OnInit {
  receivers: Array<Order> = new Array<Order>();
  notice = this.receivers
  numberOfOrders;
  socketPendingOrdersInfoTable: ISupplierPendingOrders[] = [];
  SocketPendingOrdersInfoTableDataSource= new MatTableDataSource(this.socketPendingOrdersInfoTable);
  b = false
 
  allOrdersInfoTable: ISupplierPendingOrders[] = [];
 supplierPendingOrdersInfoTableDataSource = new MatTableDataSource(this.allOrdersInfoTable);

  displayedColumns: string[] = PopulateSupplierPendingOrderTable.displayedColumns;

  // tslint:disable-next-line:max-line-length
  constructor( private httpService: HttpService<Order>,
     private objectsUtil: ObjectsUtil<Order>,
     private websocketService: WebsocketService,

      private populateTable: PopulateTable<Order, ISupplierPendingOrders>, private router: Router) { 
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
      // this.g.push(y)
      console.log("values yyyyyyyyyyyy", y)
      this.objectsUtil.dataObjectToArray(y).map(theOder => {
        if (theOder.orderStatus === "pending") {
          this.notice.push(theOder);
          SocketSupplierPendingOrderData.addAPendingOrder(theOder)
          SocketSupplierPendingOrderData.addAPendingOrderToMap(theOder, theOder.id)
        }
      })
      console.log("the daaaaaaaaaaaaata recieved is", this.notice)
      const result = this.populateTable.populateTable(
        this.objectsUtil.dataObjectToArray(this.notice),
        this.socketPendingOrdersInfoTable,
        this.SocketPendingOrdersInfoTableDataSource,
        SocketPopulateSupplierPendingOrderTable.populateTableOnInit
      );

      this.SocketPendingOrdersInfoTableDataSource = new MatTableDataSource<
      ISupplierPendingOrders
      >(result);

      this.objectsUtil.dataObjectToArray(this.notice).forEach(e => {
        console.log("teh reviiiii are", e)
        SocketSupplierPendingOrderData.addAPendingOrder(e);
        SocketSupplierPendingOrderData.addAPendingOrderToMap(e, e.id);
      });
    })

    this.SocketPendingOrdersInfoTableDataSource.sort = this.sort;
    this.SocketPendingOrdersInfoTableDataSource.paginator = this.paginator;
this.notice.length = 0;
}

  
  private populateTheTable(): void {
    this.b = false
    this.httpService.getRequest('/orders/findAll').subscribe(response => {

      this.objectsUtil.dataObjectToArray(response.body).map(theOder => {
        console.log(`the pending orders are ${JSON.stringify(theOder)}`)

        if (theOder.orderStatus === "pending") {

          this.receivers.push(theOder);
           SupplierPendingOrderData.addSupplierPendingOrder(theOder)
           SupplierPendingOrderData.addSupplierPendingOrderToMap(theOder, theOder.id)
          // alert(`these are all the orders made by id1 ${this.receivers}`)

        }
      });




      const result = this.populateTable.populateTable(this.objectsUtil.dataObjectToArray(this.receivers), this.allOrdersInfoTable,
        this.supplierPendingOrdersInfoTableDataSource, PopulateSupplierPendingOrderTable.populateTableOnInit);

      this.supplierPendingOrdersInfoTableDataSource = new MatTableDataSource<ISupplierPendingOrders>(result);

      this.objectsUtil.dataObjectToArray(this.receivers).forEach(e => {

         SupplierPendingOrderData.addSupplierPendingOrder(e);
         SupplierPendingOrderData.addSupplierPendingOrderToMap(e, e.id);

      });

    });

    this.supplierPendingOrdersInfoTableDataSource.sort = this.sort;
    this.supplierPendingOrdersInfoTableDataSource.paginator = this.paginator;

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
                SupplierPendingOrderData.getSupplierPendingOrderMap().get(id),
                null,
                2
              )} `
            );
            SupplierPendingOrderData.setIdOfOrderToView(id);
          });
      } 

  applyFilter(filterValue: string) {
    this.supplierPendingOrdersInfoTableDataSource.filter = filterValue.trim().toLowerCase();
  }
}