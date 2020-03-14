// import { Component, ViewChild, OnInit } from "@angular/core";
// import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
// import { HttpService } from "../../../../utils/http/http-service";
// import { ObjectsUtil } from "../../../../utils/objects/objects";

// import { PopulateTable } from "../../../../utils/tables/populate.table";
// import { Router } from "@angular/router";
// import { ISupplierAllOrders, PopulateSupplierAllOrderTable } from './supplier.all.order.model.interface';
// import { SupplierAllSupplierOrderData } from 'src/app/service/supplier/supplier.all.order.data';
// import { Order } from 'src/app/model/buyer/order/order-model';
// // import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';

// @Component({
//   selector: 'app-supplier-all-orders',
//   templateUrl: './supplier-all-orders.component.html',
//   styleUrls: ['./supplier-all-orders.component.css']
// })
// export class SupplierAllOrdersComponent implements OnInit {
//   supplierAllOrdersInfoTable: ISupplierAllOrders[] = [];
//   supplierAllOrdersInfoTableDataSource = new MatTableDataSource(
//     this.supplierAllOrdersInfoTable
//   );

//   displayedColumns: string[] =
//     PopulateSupplierAllOrderTable.displayedColumns;

//   // tslint:disable-next-line:max-line-length
//   constructor(
//     private httpService: HttpService<Order>,
//     private objectsUtil: ObjectsUtil<Order>,
//     private populateTable: PopulateTable<Order, ISupplierAllOrders>,
//     private router: Router
//   ) {
//     this.populateTheTable();
//     }

//   @ViewChild(MatSort, { static: true }) sort: MatSort;
//   @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

//   private populateTheTable(): void {
   
//     this.httpService.getRequest("/orders/findAll").subscribe(response => {
        
//       console.log("the supplier orders are ", JSON.stringify(response.body))
         
//         const result = this.populateTable.populateTable(
   
//           this.objectsUtil.dataObjectToArray(response.body),
   
//           this.supplierAllOrdersInfoTable,
   
//           this.supplierAllOrdersInfoTableDataSource,
   
//           PopulateSupplierAllOrderTable.populateTableOnInit
   
//                   )

//           this.supplierAllOrdersInfoTableDataSource = new MatTableDataSource<
//           ISupplierAllOrders>(result);

//           this.objectsUtil.dataObjectToArray(response.body).forEach(e => {
//             SupplierAllSupplierOrderData.addAAllSupplierSupplierOrder(e);
//             SupplierAllSupplierOrderData.addAAllSupplierSupplierOrderToMap(e, e.id);
//           });

//           this.supplierAllOrdersInfoTableDataSource.sort = this.sort;
//           this.supplierAllOrdersInfoTableDataSource.paginator = this.paginator;
          
//     // console.log("the data source is", this.supplierAllOrdersInfoTableDataSource)
//       })
//           }


//   ngOnInit() {
//     this.populateTheTable();
//   }

//   // handleViewOrderClick($event): void {
//   //   // tslint:disable-next-line:radix
//   //   const id = parseInt($event.target.closest("button").id);

//   //   this.router
//   //     .navigate(["/supplier/viewallsuppliers"])
//   //     .then(e => {
//   //       console.log(
//   //         `the order to view again: ${JSON.stringify(
//   //           SupplierAllSupplierOrderData.getsupplierAllSupplierSupplierOrderMap().get(id),
//   //           null,
//   //           2
//   //         )} `
//   //       );
//   //       SupplierAllSupplierOrderData.setIdOfSupplierOrderToView(id);
//   //     });
//   // }

//   handleViewOrderClick($event): void {
//     // tslint:disable-next-line:radix
//     const id = parseInt($event.target.closest("button").id);

//     this.router.navigate(["/supplier/viewallsuppliers"]).then(() => {
//       SupplierAllSupplierOrderData.setIdOfSupplierOrderToView(id);
//     });
//   }

//   applyFilter(filterValue: string) {
//     this.supplierAllOrdersInfoTableDataSource.filter = filterValue
//       .trim()
//       .toLowerCase();
//   }
// }

