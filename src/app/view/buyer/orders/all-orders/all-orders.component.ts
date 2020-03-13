import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { HttpService } from '../../../../utils/http/http-service';
import { Order } from '../../../../model/buyer/order/order-model';
import { ObjectsUtil } from '../../../../utils/objects/objects';
import { IAllOrders, PopulateAllOrderTable } from './all.order.model.interface';
import { PopulateTable } from '../../../../utils/tables/populate.table';
import { AllOrderData } from '../../../../service/order/all.order.data';
import { Router } from '@angular/router';

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

    this.httpService.getRequest('/orders/findAll').subscribe(response => {

      this.objectsUtil.dataObjectToArray(response.body).map(theOder => {

        let loggedinUserId = JSON.parse(localStorage.getItem('loggedinUser'))[0].id
        console.log("this is the geeeen", loggedinUserId)
        if (theOder.buyer.id === loggedinUserId) {


          this.receivers.push(theOder);
          AllOrderData.addAAllOrder(theOder)
          AllOrderData.addAAllOrderToMap(theOder, theOder.id)
          // alert(`these are all the orders made by id1 ${this.receivers}`)

        }
      });




      const result = this.populateTable.populateTable(this.objectsUtil.dataObjectToArray(this.receivers), this.allOrdersInfoTable,
        this.allOrdersInfoTableDataSource, PopulateAllOrderTable.populateTableOnInit);

      this.allOrdersInfoTableDataSource = new MatTableDataSource<IAllOrders>(result);

      this.objectsUtil.dataObjectToArray(this.receivers).forEach(e => {

        AllOrderData.addAAllOrder(e);
        AllOrderData.addAAllOrderToMap(e, e.id);

      });

    });

    this.allOrdersInfoTableDataSource.sort = this.sort;
    this.allOrdersInfoTableDataSource.paginator = this.paginator;

  }

  ngOnInit() {
    this.populateTheTable();
  }

  handleViewOrderClick($event): void {

    // tslint:disable-next-line:radix
    const id = parseInt($event.target.closest('button').id);

    this.router.navigate(['buyer/orders/view-allorders']).then(e => {
      console.log(`the order to view again: ${JSON.stringify(AllOrderData.getAllAllOrderMap().get(id), null, 2)} `);
      AllOrderData.setIdOfOrderToView(id);
    });

  }

  applyFilter(filterValue: string) {
    this.allOrdersInfoTableDataSource.filter = filterValue.trim().toLowerCase();
  }
}
