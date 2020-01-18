// I duplicated this file
import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { SupplierService } from '../../../../service/supplier/supplier.service'
import { SupplierData } from '../../../../service/supplier/supplier.data'
import { OrdersComponent } from '../orders/orders.component';
import { List } from 'src/app/utils/collections/list';
import { User } from 'src/app/shared/model/user/user-model';

@Component({
  selector: "app-create-order",
  templateUrl: "./create-order.component.html",
  styleUrls: ["./create-order.component.css"]
})
export class CreateOrderComponent implements OnInit {
  public supplierNames: List<User>;

  date = new Date();
  dateCtrl: FormControl;

  constructor(private supplierService: SupplierService, private ordersComponent: OrdersComponent) {

  }

  test(): List<User> {
    return SupplierData.getAllSuppliers();
  }

  ngOnInit() {

    console.log(`create order init`);


    // if (SupplierData.getAllSuppliersPromise() == undefined) {

    //   new Promise((resolve,reject)=>{
    //     this.supplierService.getAllSuppliers();
    //     console.log(`ttttttttttttt`)
    //   }).then(e=>{
    //     this.supplierNames = SupplierData.getAllSuppliers();

    //     console.log(`ththththt ${this.supplierNames} `)

    //   });

    //    }

    // let supplierData = new Promise((res, rej) => {
    //   console.log(`first`)
    //   if (SupplierData.getAllSuppliers() == null  || SupplierData.getAllSuppliers() == undefined || SupplierData.getAllSuppliers().isEmpty()) {

    //     console.log(`second`)

    //     this.supplierService.getAllSuppliers();

    //   }

    // })

    //   .then(e => {
    //     console.log(`hhh ${SupplierData.getAllSuppliers()} `);
    //     console.log(`test again: ${e } `)
    //   });

    // supplierData.then(e => console.log(`the eeees`))

    // this.supplierService.getAllSuppliers();
    // console.log(`this is the list of all suppliers ${SupplierData.getAllSuppliers()} `)
    // console.log(`this is the list of all suppliers: ${SupplierData.getAllSuppliers()} `);
    this.dateCtrl = new FormControl("", [Validators.required]);

    // receivers
    //  = ["SME", "AGRIC", "Test1", "Admin", "test_wallet", "ret", "test",
    // "test_new", "OGAS Wallet", "test", "asd", "ert", "demo"]


  }
  // letssee() {
  //   JSON.stringify(SupplierData.getAllSuppliers());
  //   // return `this is the list of all suppliers: ${JSON.stringify(SupplierData.getAllSuppliers())} `;
  //   // console.log(`this is the list of all suppliers: ${JSON.stringify(SupplierData.getAllSuppliers())} `);
  //   // console.log("sdfgdgdfdsdfs")
  // }

}

