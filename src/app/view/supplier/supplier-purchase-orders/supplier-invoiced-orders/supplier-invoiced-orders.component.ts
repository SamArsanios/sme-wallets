import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { HttpService } from '../../../../utils/http/http-service';
import { ObjectsUtil } from '../../../../utils/objects/objects';
import { PopulateTable } from '../../../../utils/tables/populate.table';
import { Router } from '@angular/router';
import { ISupplierInvoicedOrders, PopulateSupplierInvoicedOrderTable } from './supplier.invoiced.order.model.interface';
import { SupplierInvoicedOrderData } from 'src/app/service/supplier/supplier.invoiced.order.data';
import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';
import { WebsocketService } from 'src/app/utils/websocket/websocket.service';


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
     private websocketService: WebsocketService,

      private populateTable: PopulateTable<SupplierOrder, ISupplierInvoicedOrders>, private router: Router)
       { 
        this.theNotice()
       }

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


  theNotice(): void {
    this.websocketService.notify("/topic/supplierOrders/findAll", (message)=>{
      var x = JSON.parse(message.body)
      var y = JSON.parse(x.body)

        this.objectsUtil.dataObjectToArray(y).map(theOder => {
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
