import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { HttpService } from '../../../../utils/http/http-service';
// import { Order } from '../../../../model/buyer/order/order-model';
import { ObjectsUtil } from '../../../../utils/objects/objects';
import { IAllOrders, PopulateAllOrderTable } from './all.order.model.interface';
import { PopulateTable } from '../../../../utils/tables/populate.table';
import { AllOrderData } from '../../../../service/order/all.order.data';
import { Router } from '@angular/router';
import { Order } from 'src/app/model/buyer/order/order-model';
// import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';

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
     private objectsUtil: ObjectsUtil<Order>,
      private populateTable: PopulateTable<Order, IAllOrders>, private router: Router) { }

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


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

rr(){
 AllOrderData.getAllOrderLists()
  // console.log("the alllllllllllllll order is", k)
  // return k
}
  ngOnInit() {

    this.populateTheTable();

    var k = AllOrderData.getAllOrderLists()

    console.log("the dataaaaaaaaaaaaaaaaaaaaaa is", this.allOrdersInfoTableDataSource)

    if (k !== undefined && k != null) {
    console.log("the alllllllllllllll order is", k)
    }

    console.log("gggggggggggggggggggggggggggg", this.rr)
  }

  // handleViewOrderClick($event): void {

  //   // tslint:disable-next-line:radix
  //   const id = parseInt($event.target.closest('button').id);
  //   console.log("teh id isssss", id)

  //   this.router.navigate(['buyer/orders/view-allorders']).then(e => {
  //     console.log(`the order to view again: ${JSON.stringify(AllOrderData.getAllAllOrderMap().get(id))} `);
  //     AllOrderData.setIdOfOrderToView(id);
  //   });

  // }

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