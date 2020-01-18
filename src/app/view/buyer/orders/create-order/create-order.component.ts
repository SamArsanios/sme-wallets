import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { SupplierService } from '../../../../service/supplier/supplier.service'
import { SupplierData } from '../../../../service/supplier/supplier.data'
import { OrdersComponent } from '../orders/orders.component';
import { List } from 'src/app/utils/collections/list';
import { User } from 'src/app/shared/model/user/user-model';
import { HtpsService } from 'src/app/htps.service';
import { HttpService } from 'src/app/utils/http/http-service';
import { ObjectsUtil } from 'src/app/utils/objects/objects';

@Component({
  selector: "app-create-order",
  templateUrl: "./create-order.component.html",
  styleUrls: ["./create-order.component.css"]
})
export class CreateOrderComponent implements OnInit {
  public supplierNames: List<User>;

  date = new Date();
  dateCtrl: FormControl;

  constructor(private httpService: HttpService<User>, private objectUtil: ObjectsUtil<User>) { }



  ngOnInit() {
    this.httpService.getRequest('/users/findAll').subscribe(e =>{
      console.log(JSON.stringify(this.objectUtil.dataObjectToArray(e)));
      this.receivers = this.objectUtil.dataObjectToArray(e.body);

    });
   this.dateCtrl = new FormControl("", [Validators.required]);
  }

  receivers;



  }






