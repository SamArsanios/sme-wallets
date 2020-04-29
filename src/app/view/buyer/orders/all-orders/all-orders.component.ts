import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { HttpService } from '../../../../utils/http/http-service';
import { ObjectsUtil } from '../../../../utils/objects/objects';
import { IAllOrders, PopulateAllOrderTable } from './all.order.model.interface';
import { PopulateTable } from '../../../../utils/tables/populate.table';
import { AllOrderData } from '../../../../service/order/all.order.data';
import { Router } from '@angular/router';
import { Order } from 'src/app/model/buyer/order/order-model';
import { WebsocketService } from 'src/app/utils/websocket/websocket.service';
import { Observer, Observable } from 'rxjs';
import { Socket } from 'net';

@Component({
  selector: "app-all-orders",
  templateUrl: "./all-orders.component.html",
  styleUrls: ["./all-orders.component.css"]
})
export class AllOrdersComponent implements OnInit {
  receivers: Array<Order> = new Array<Order>();
  numberOfOrders;
  allOrdersInfoTable: IAllOrders[] = [];
  allOrdersInfoTableDataSource = new MatTableDataSource(this.allOrdersInfoTable);

  displayedColumns: string[] = PopulateAllOrderTable.displayedColumns;

  // tslint:disable-next-line:max-line-length
  constructor( private httpService: HttpService<Order>,
    private websocketService: WebsocketService,
     private objectsUtil: ObjectsUtil<Order>,
      private populateTable: PopulateTable<Order, IAllOrders>, private router: Router) {
        this.populateTheTable()
        this.theNotice();
        // this.dd()

       }

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  


  theNotice(): void {
    this.websocketService.notify("/topic/orders/findAll", (message)=>{
      var x = JSON.parse(message.body)
      var y = JSON.parse(x.body)


     const result = this.populateTable.populateTable(
      this.objectsUtil.dataObjectToArray(y),
      this.allOrdersInfoTable,
      this.allOrdersInfoTableDataSource,
      PopulateAllOrderTable.populateTableOnInit
    );

    this.allOrdersInfoTableDataSource = new MatTableDataSource<
      IAllOrders
    >(result);

    y.forEach(e => {
      AllOrderData.addAllOrder(e);
      AllOrderData.addAllOrderToMap(e, e.id);
    });
  });
  

  this.allOrdersInfoTableDataSource.sort = this.sort;
  this.allOrdersInfoTableDataSource.paginator = this.paginator;
    
    
    // console.log("the value of fr", this.fr)


  }





  private populateTheTable(): void {
   
        this.httpService.getRequest("/orders/findAll").subscribe(response => {
        
          const result = this.populateTable.populateTable(
            this.objectsUtil.dataObjectToArray(response.body),
            this.allOrdersInfoTable,
            this.allOrdersInfoTableDataSource,
            PopulateAllOrderTable.populateTableOnInit
          );
    
          this.allOrdersInfoTableDataSource = new MatTableDataSource<
            IAllOrders
          >(result);
    
          this.objectsUtil.dataObjectToArray(response.body).forEach(e => {
            AllOrderData.addAllOrder(e);
            AllOrderData.addAllOrderToMap(e, e.id);
          });
        });
        
    
        this.allOrdersInfoTableDataSource.sort = this.sort;
        this.allOrdersInfoTableDataSource.paginator = this.paginator;
      }


  ngOnInit() {
        this.httpService.getRequest("/orders/findAll").subscribe(response => {
          return response
        })
        

    this.populateTheTable();

    var k = AllOrderData.getAllOrderLists()


    if (k !== undefined && k != null) {
    console.log("the alllllllllllllll order is", k)
    }

  }



  handleViewOrderClick($event): void {
    // tslint:disable-next-line:radix
    const id = parseInt($event.target.closest("button").id);

    this.router
      .navigate(["/buyer/orders/view-allorders"])
      .then(e => {
        AllOrderData.setIdOfOrderToView(id);
        console.log(
          `the order to view again: ${JSON.stringify(
            AllOrderData.getAllOrderMap().get(id),
            null,
            2
          )} `
        );
        // AllOrderData.setIdOfOrderToView(id);
      });
  }

  applyFilter(filterValue: string) {
    this.allOrdersInfoTableDataSource.filter = filterValue.trim().toLowerCase();
  }
}