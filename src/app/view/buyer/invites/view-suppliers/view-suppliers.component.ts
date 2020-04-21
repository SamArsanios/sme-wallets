import { Component, ViewChild, OnInit } from "@angular/core";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import { HttpService } from "../../../../utils/http/http-service";
import { ObjectsUtil } from "../../../../utils/objects/objects";
import { PopulateTable } from "../../../../utils/tables/populate.table";
import { Router } from "@angular/router";
import { forkJoin } from 'rxjs';
import { IInvitedSuppliers, InvitedSuppliersTable } from './view-supplier-data';
import { map } from 'rxjs/operators';
import { RegistrationData } from 'src/app/service/supplier/registrationData';

@Component({
  selector: 'app-view-suppliers',
  templateUrl: './view-suppliers.component.html',
  styleUrls: ['./view-suppliers.component.css']
})
export class ViewSuppliersComponent implements OnInit {
  invitedSuppliers = [];
  h;

  identity: number;
  approvedOrdersInfoTable: IInvitedSuppliers[] = [];
  approveOrdersInfoTableDataSource = new MatTableDataSource(
    this.approvedOrdersInfoTable
  );


  displayedColumns: string[] = InvitedSuppliersTable.displayedColumns;
  static identity: number;

  constructor(
    private httpService: HttpService<any>,
    private httpServices: HttpService<any>,

    private objectsUtil: ObjectsUtil<any>,
    private populateTable: PopulateTable<any, IInvitedSuppliers>,
    private router: Router
  ) { }

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  private populateTheTable(): void {


      forkJoin(
        this.httpService.getRequest("/registrations/findAll").pipe(map((response => response))),
        this.httpServices.getRequest("/invites/findAll").pipe(map((r => r)))

      ).subscribe(
        data => {
          
          for(var i = 0; i < data[0].body.length; i++){
              var found = false;
              for(var j = 0; j<data[1].body.length; j++){
               if(data[0].body[i].user.email === data[1].body[j].email){
                found = true;
                break; 

              }

             }
             if(found == true){
              this.invitedSuppliers.push(data[0].body[i])
              RegistrationData.addASupplier(data[0].body[i])
              RegistrationData.addASupplierToMap(data[0].body[i], data[0].body[i].id)
            }

          }

          const result = this.populateTable.populateTable(
            this.objectsUtil.dataObjectToArray(this.invitedSuppliers),
            this.approvedOrdersInfoTable,
            this.approveOrdersInfoTableDataSource,
            InvitedSuppliersTable.populateTableOnInit
          );

          this.approveOrdersInfoTableDataSource = new MatTableDataSource<
          IInvitedSuppliers
          >(result);

          console.log("the invited suppliers aaaaaaaaaaaaaaaaaaaaaaag", this.invitedSuppliers)
          this.objectsUtil.dataObjectToArray(this.invitedSuppliers).forEach(e => {

            RegistrationData.addASupplier(e);


            });
        })
  console.log("the pushed data is",  this.objectsUtil.dataObjectToArray(this.invitedSuppliers))






  this.approveOrdersInfoTableDataSource.sort = this.sort;
  this.approveOrdersInfoTableDataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.populateTheTable()
    console.log(`1fffffffffffffffff${this.invitedSuppliers}`)
  }


  applyFilter(filterValue: string) {
    this.approveOrdersInfoTableDataSource.filter = filterValue
      .trim()
      .toLowerCase();
  }
}

