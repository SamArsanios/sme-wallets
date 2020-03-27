// import { Component, ViewChild, OnInit } from '@angular/core';
// import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
// import { HttpService } from '../../../../utils/http/http-service';
// import { ObjectsUtil } from '../../../../utils/objects/objects';
// // import { ISupplierInvoicedOrders, PopulateSupplierInvoicedOrderTable } from './all.order.model.interface';
// import { PopulateTable } from '../../../../utils/tables/populate.table';
// // import {  SupplierInvoicedOrderData } from '../../../../service/order/all.order.data';
// import { Router } from '@angular/router';
// import { ISupplierInvoicedOrders, PopulateSupplierInvoicedOrderTable } from './supplier.invoiced.order.model.interface';
// import { SupplierInvoicedOrderData } from 'src/app/service/supplier/supplier.invoiced.order.data';
// import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';
// // import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';
// // import { ISupplierInvoicedOrders, PopulateSupplierInvoicedOrderTable } from './supplier.pending.order.model.interface';

// @Component({
//   selector: 'app-supplier-invoiced-orders',
//   templateUrl: './supplier-invoiced-orders.component.html',
//   styleUrls: ['./supplier-invoiced-orders.component.css']
// })
// export class SupplierInvoicedOrdersComponent implements OnInit {
//   receivers: Array<SupplierOrder> = new Array<SupplierOrder>();
//   numberOfOrders;
//   allOrdersInfoTable: ISupplierInvoicedOrders[] = [];
//   supplierInvoicedOrdersInfoTableDataSource = new MatTableDataSource(this.allOrdersInfoTable);

//   displayedColumns: string[] = PopulateSupplierInvoicedOrderTable.displayedColumns;

//   // tslint:disable-next-line:max-line-length
//   constructor(private httpService: HttpService<SupplierOrder>,
//     private objectsUtil: ObjectsUtil<SupplierOrder>,
//     private populateTable: PopulateTable<SupplierOrder, ISupplierInvoicedOrders>, private router: Router) { }

//   @ViewChild(MatSort, { static: true }) sort: MatSort;
//   @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

//   private populateTheTable(): void {

//     this.httpService.getRequest('/supplierOrders/findAll').subscribe(response => {

//       this.objectsUtil.dataObjectToArray(response.body).map(theOder => {
//         console.log("the invoiced orders are,", response.body)
//         if (theOder.order.orderStatus === "invoiced") {


//           this.receivers.push(theOder);
//           SupplierInvoicedOrderData.addSupplierInvoicedOrder(theOder)
//           SupplierInvoicedOrderData.addSupplierInvoicedOrderToMap(theOder, theOder.id)

//         }
//       });




//       const result = this.populateTable.populateTable(this.objectsUtil.dataObjectToArray(this.receivers), this.allOrdersInfoTable,
//         this.supplierInvoicedOrdersInfoTableDataSource, PopulateSupplierInvoicedOrderTable.populateTableOnInit);

//       this.supplierInvoicedOrdersInfoTableDataSource = new MatTableDataSource<ISupplierInvoicedOrders>(result);

//       this.objectsUtil.dataObjectToArray(this.receivers).forEach(e => {

//         SupplierInvoicedOrderData.addSupplierInvoicedOrder(e);
//         SupplierInvoicedOrderData.addSupplierInvoicedOrderToMap(e, e.id);

//       });

//     });

//     this.supplierInvoicedOrdersInfoTableDataSource.sort = this.sort;
//     this.supplierInvoicedOrdersInfoTableDataSource.paginator = this.paginator;

//   }

//   ngOnInit() {
//     this.populateTheTable();
//   }

//   handleViewOrderClick($event): void {
//     // tslint:disable-next-line:radix
//     const id = parseInt($event.target.closest("button").id);

//     this.router
//       .navigate(["/supplier/view-supplier-invoiced-orders-component"])
//       .then(e => {
//         console.log(
//           `the order to view again: ${JSON.stringify(
//             SupplierInvoicedOrderData.getSupplierInvoicedOrderMap().get(id),
//             null,
//             2
//           )} `
//         );
//         SupplierInvoicedOrderData.setIdOfOrderToView(id);
//       });
//   }

//   applyFilter(filterValue: string) {
//     this.supplierInvoicedOrdersInfoTableDataSource.filter = filterValue.trim().toLowerCase();
//   }
// }


import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { HttpService } from '../../../../utils/http/http-service';
import { ObjectsUtil } from '../../../../utils/objects/objects';
import { PopulateTable } from '../../../../utils/tables/populate.table';
import { Router } from '@angular/router';
import { ISupplierInvoicedOrders, PopulateSupplierInvoicedOrderTable } from './supplier.invoiced.order.model.interface';
import { SupplierInvoicedOrderData } from 'src/app/service/supplier/supplier.invoiced.order.data';
// import { ISupplierInvoicedOrders, PopulateSupplierInvoicedOrderTable } from './supplier.approved.invoices.model.interface';
// import { SupplierInvoicedOrderData } from 'src/app/service/supplier/supplier.approved.order.data';
import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';
// import { Invoice } from 'src/app/model/buyer/invoices/invoice-model';
// import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';
// import { SupplierPendingOrderData } from 'src/app/service/order/supplier.pending.order.data';
// import { ISupplierInvoicedOrders, PopulateSupplierPendingOrderTable } from './supplier.pending.order.model.interface';

@Component({
  selector: 'app-supplier-invoiced-orders',
  templateUrl: './supplier-invoiced-orders.component.html',
  styleUrls: ['./supplier-invoiced-orders.component.css']
})
export class SupplierInvoicedOrdersComponent implements OnInit {
  receivers: Array<SupplierOrder> = new Array<SupplierOrder>();
  numberOfOrders;
  supplierApprovedInvoicesInfoTable: ISupplierInvoicedOrders[] = [];
supplierApprovedInvoicesTableDataSource = new MatTableDataSource(this.supplierApprovedInvoicesInfoTable);

  displayedColumns: string[] = PopulateSupplierInvoicedOrderTable.displayedColumns;

  // tslint:disable-next-line:max-line-length
  constructor( private httpService: HttpService<SupplierOrder>,
     private objectsUtil: ObjectsUtil<SupplierOrder>,
      private populateTable: PopulateTable<SupplierOrder, ISupplierInvoicedOrders>, private router: Router) { }

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  private populateTheTable(): void {

    this.httpService.getRequest('/supplierOrders/findAll').subscribe(response => {

      this.objectsUtil.dataObjectToArray(response.body).map(theOder => {
        console.log(`the pending orders are ${JSON.stringify(theOder)}`)

        if (theOder.order.orderStatus == "approved") {
          

          this.receivers.push(theOder);
          SupplierInvoicedOrderData.addSupplierInvoicedOrder(theOder)
          SupplierInvoicedOrderData.addSupplierInvoicedOrderToMap(theOder, theOder.id)
          // alert(`these are all the orders made by id1 ${this.receivers}`)

        }
      });




      const result = this.populateTable.populateTable(this.objectsUtil.dataObjectToArray(this.receivers), this.supplierApprovedInvoicesInfoTable,
        this.supplierApprovedInvoicesTableDataSource, PopulateSupplierInvoicedOrderTable.populateTableOnInit);

      this.supplierApprovedInvoicesTableDataSource = new MatTableDataSource<ISupplierInvoicedOrders>(result);

      this.objectsUtil.dataObjectToArray(this.receivers).forEach(e => {

         SupplierInvoicedOrderData.addSupplierInvoicedOrder(e);
         SupplierInvoicedOrderData.addSupplierInvoicedOrderToMap(e, e.id);

      });

    });

    this.supplierApprovedInvoicesTableDataSource.sort = this.sort;
    this.supplierApprovedInvoicesTableDataSource.paginator = this.paginator;

  }

  ngOnInit() {
    this.populateTheTable();
  }

  handleViewOrderClick($event): void {
        // tslint:disable-next-line:radix
        const id = parseInt($event.target.closest("button").id);
    console.log("the id is", id)
        this.router
          .navigate(["/suppliers/view-approved-invoice-component"])
          .then(e => {
            console.log(
              `the order to view again: ${JSON.stringify(
                SupplierInvoicedOrderData.getSupplierInvoicedOrderMap().get(id),
                null,
                2
              )} `
            );
            SupplierInvoicedOrderData.setIdOfOrderToView(id);
          });
      } 

  applyFilter(filterValue: string) {
    this.supplierApprovedInvoicesTableDataSource.filter = filterValue.trim().toLowerCase();
  }
}


// import { Component, ViewChild, OnInit } from '@angular/core';
// import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
// import { HttpService } from '../../../../utils/http/http-service';
// import { ObjectsUtil } from '../../../../utils/objects/objects';
// import { PopulateTable } from '../../../../utils/tables/populate.table';
// import { Router } from '@angular/router';
// import { ISupplierInvoicedOrders, PopulateSupplierInvoicedOrderTable } from './supplier.approved.invoices.model.interface';
// import { SupplierInvoicedOrderData } from 'src/app/service/supplier/supplier.approved.order.data';
// import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';
// import { Invoice } from 'src/app/model/buyer/invoices/invoice-model';

// @Component({
//   selector: "app-supplier-approved-invoices",
//   templateUrl: "./supplier-approved-invoices.component.html",
//   styleUrls: ["./supplier-approved-invoices.component.css"]
// })
// export class SupplierApprovedInvoicesComponent implements OnInit {
//   receivers: Array<SupplierOrder> = new Array<SupplierOrder>();
//   numberOfOrders;
//   supplierApprovedInvoicesInfoTable: ISupplierInvoicedOrders[] = [];
// supplierApprovedInvoicesTableDataSource = new MatTableDataSource(this.supplierApprovedInvoicesInfoTable);

//   displayedColumns: string[] = PopulateSupplierInvoicedOrderTable.displayedColumns;

//   // tslint:disable-next-line:max-line-length
//   constructor( private httpService: HttpService<SupplierOrder>,
//      private objectsUtil: ObjectsUtil<SupplierOrder>,
//       private populateTable: PopulateTable<SupplierOrder, ISupplierInvoicedOrders>, private router: Router) { }

//   @ViewChild(MatSort, { static: true }) sort: MatSort;
//   @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

//   private populateTheTable(): void {

//     this.httpService.getRequest('/invoices/findAll').subscribe(response => {

//       this.objectsUtil.dataObjectToArray(response.body).map(theOder => {
//         console.log(`the pending orders are ${JSON.stringify(theOder)}`)

//         if (theOder.order.orderStatus === "approved") {

//           this.receivers.push(theOder);
//           SupplierInvoicedOrderData.addAsupplierApprovedOrders(theOder)
//           SupplierInvoicedOrderData.addAsupplierApprovedOrdersToMap(theOder, theOder.id)

//         }
//       });




//       const result = this.populateTable.populateTable(this.objectsUtil.dataObjectToArray(this.receivers), this.supplierApprovedInvoicesInfoTable,
//         this.supplierApprovedInvoicesTableDataSource, PopulateSupplierInvoicedOrderTable.populateTableOnInit);

//       this.supplierApprovedInvoicesTableDataSource = new MatTableDataSource<ISupplierInvoicedOrders>(result);

//       this.objectsUtil.dataObjectToArray(this.receivers).forEach(e => {

//          SupplierInvoicedOrderData.addAsupplierApprovedOrders(e);
//          SupplierInvoicedOrderData.addAsupplierApprovedOrdersToMap(e, e.id);

//       });

//     });

//     this.supplierApprovedInvoicesTableDataSource.sort = this.sort;
//     this.supplierApprovedInvoicesTableDataSource.paginator = this.paginator;

//   }

//   ngOnInit() {
//     this.populateTheTable();
//   }

//   handleViewOrderClick($event): void {
//         // tslint:disable-next-line:radix
//         const id = parseInt($event.target.closest("button").id);
    
//         this.router
//           .navigate(["/supplier/view-approved-invoice-component"])
//           .then(e => {
//             console.log(
//               `the order to view again: ${JSON.stringify(
//                 SupplierInvoicedOrderData.getsupplierApprovedOrdersMap().get(id),
//                 null,
//                 2
//               )} `
//             );
//             SupplierInvoicedOrderData.setIdOfOrderToView(id);
//           });
//       } 

//   applyFilter(filterValue: string) {
//     this.supplierApprovedInvoicesTableDataSource.filter = filterValue.trim().toLowerCase();
//   }
// }


