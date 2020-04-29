import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { WebsocketService } from 'src/app/utils/websocket/websocket.service';
import { Observer, Observable } from 'rxjs';
import { Socket } from 'net';
import { IAllWallets, PopulateAllWalletsTable } from './all-wallets-interface';
import { HttpService } from 'src/app/utils/http/http-service';
import { Wallet } from 'src/app/shared/model/wallet/wallet-model';
import { ObjectsUtil } from 'src/app/utils/objects/objects';
import { AllWalletsData } from 'src/app/service/order/all-wallets-data';
import { PopulateTable } from 'src/app/utils/tables/populate.table';

@Component({
  selector: 'app-view-wallets',
  templateUrl: './view-wallets.component.html',
  styleUrls: ['./view-wallets.component.css']
})
export class ViewWalletsComponent implements OnInit {
  receivers: Array<Wallet> = new Array<Wallet>();
  numberOfOrders;
  allOrdersInfoTable: IAllWallets[] = [];
  allOrdersInfoTableDataSource = new MatTableDataSource(this.allOrdersInfoTable);

  displayedColumns: string[] = PopulateAllWalletsTable.displayedColumns;

  // tslint:disable-next-line:max-line-length
  constructor( private httpService: HttpService<Wallet>,
    private websocketService: WebsocketService,
     private objectsUtil: ObjectsUtil<Wallet>,
     private populateTable: PopulateTable<Wallet, IAllWallets>, private router: Router) {
      this.populateTheTable()

        // this.theNotice();
        // this.dd()

       }

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  


  // theNotice(): void {
  //   this.websocketService.notify("/topic/orders/findAll", (message)=>{
  //     var x = JSON.parse(message.body)
  //     var y = JSON.parse(x.body)


  //    const result = this.populateTable.populateTable(
  //     this.objectsUtil.dataObjectToArray(y),
  //     this.allOrdersInfoTable,
  //     this.allOrdersInfoTableDataSource,
  //     PopulateAllOrderTable.populateTableOnInit
  //   );

  //   this.allOrdersInfoTableDataSource = new MatTableDataSource<
  //     IAllOrders
  //   >(result);

  //   y.forEach(e => {
  //     AllWalletsData.addAllOrder(e);
  //     AllWalletsData.addAllOrderToMap(e, e.id);
  //   });
  // });
  

  // this.allOrdersInfoTableDataSource.sort = this.sort;
  // this.allOrdersInfoTableDataSource.paginator = this.paginator;
    
    
  //   // console.log("the value of fr", this.fr)


  // }





  private populateTheTable(): void {
   
        this.httpService.getRequest("/wallets/findAll").subscribe(response => {
        
          const result = this.populateTable.populateTable(
            this.objectsUtil.dataObjectToArray(response.body),
            this.allOrdersInfoTable,
            this.allOrdersInfoTableDataSource,
            PopulateAllWalletsTable.populateTableOnInit
          );
    
          this.allOrdersInfoTableDataSource = new MatTableDataSource<
          IAllWallets
          >(result);
    
          this.objectsUtil.dataObjectToArray(response.body).forEach(e => {
            AllWalletsData.addAllOrder(e);
            AllWalletsData.addAllOrderToMap(e, e.id);
          });
        });
        
    
        this.allOrdersInfoTableDataSource.sort = this.sort;
        this.allOrdersInfoTableDataSource.paginator = this.paginator;
      }


  ngOnInit() {
        // this.httpService.getRequest("/orders/findAll").subscribe(response => {
        //   return response
        // })
        

    this.populateTheTable();


  }

 
  handleViewOrderClick($event): void {
    // tslint:disable-next-line:radix
    const id = parseInt($event.target.closest("button").id);

    this.router
      .navigate(["/buyer/orders/view-allorders"])
      .then(e => {
        AllWalletsData.setIdOfOrderToView(id);
        console.log(
          `the order to view again: ${JSON.stringify(
            AllWalletsData.getAllOrderMap().get(id),
            null,
            2
          )} `
        );
        // AllWalletsData.setIdOfOrderToView(id);
      });
  }

  applyFilter(filterValue: string) {
    this.allOrdersInfoTableDataSource.filter = filterValue.trim().toLowerCase();
  }
}
