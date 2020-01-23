import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, NgForm } from "@angular/forms";
import { SupplierService } from '../../../../service/supplier/supplier.service'
import { SupplierData } from '../../../../service/supplier/supplier.data'
import { OrdersComponent } from '../orders/orders.component';
import { List } from 'src/app/utils/collections/list';
import { User } from 'src/app/shared/model/user/user-model';
import { HtpsService } from 'src/app/htps.service';
import { HttpService } from 'src/app/utils/http/http-service';
import { ObjectsUtil } from 'src/app/utils/objects/objects';
import { Order } from 'src/app/model/buyer/order/order-model';
import { DateUtils } from 'src/app/utils/date/date-utils';
import { UserTransient } from 'src/app/shared/model/user/user-model-transient';

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

    this.httpService.getRequest('/users/findAll').subscribe(e => {
      console.log(JSON.stringify(this.objectUtil.dataObjectToArray(e)));
      // if(e.body.userType =="supplier"){
      this.objectUtil.dataObjectToArray(e.body).map(asupplier => {

        if (asupplier.userType == "supplier") {
          this.receivers.push(asupplier);
          SupplierData.addASupplier(asupplier);
          SupplierData.addASupplierToMap(asupplier, asupplier.id);
          // console.log(`fff`, SupplierData.getMapOfIdToSupplier().get(7));

        }
      });
    });
    this.dateCtrl = new FormControl("", [Validators.required]);
  }

  receivers: User[] = [];

  onSubmit(form: NgForm) {

    console.log(JSON.stringify(form.value.receivername));
    console.log(`all sups`, SupplierData.getAllSuppliers());
    const idOfSupplier = form.value.receivername;

    const supplierInfo = SupplierData.getAllSuppliers().toArray().find(e => {
      if (e.id == idOfSupplier && e != null) {
        return e;
      }
    });


    console.log('supplier infrmation', supplierInfo)

    const object = form.value;

    let userSupplier = new User(null, null, null, null, null, null, null, null)

    userSupplier = supplierInfo;

    userSupplier['emailVerifiedAtStr'] = userSupplier['emailVerifiedAt'];


    userSupplier['emailVerifiedAtStr'] = DateUtils.convertDateFormatToParsable(supplierInfo.emailVerifiedAt);
    console.log(`ggggg ${userSupplier['emailVerifiedAtStr']} `);
    userSupplier.emailVerifiedAt = null;
    console.log(`ttttttt`, userSupplier.emailVerifiedAt)
    const order = new Order(0, null, null, object.isbnNumber, object.itemName, object.itemDescription, object.billingAddress, object.saleUnit, object.quantity, object.department, object.conveyanceMethod, object.deliveryTerms, object.paymentTerms, object.placeOfDelivery, object.deliveryTime, object.orderDueDate, object.time_period, object.qrCode, null, null, null, object.industryType)
    // const order = new Order(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null)
    this.httpService.postRequest('/orders/create', order).subscribe(e => {
      console.log(`the result ${JSON.stringify(e)} `);
    }

    )
  }


  onOptionsSelected() {
    console.log(`hhhhhhh`);


    // const selectedSuplier = (<HTMLInputElement>document.getElementById('select-supplier-id'));
    // const value =  (<HTMLInputElement>selectedSuplier.options[selectedSuplier.selectedIndex].value);
    // const text = selectedSuplier.options[selectedSuplier.selectedIndex].text;
    // console.log(`the text `, text);
    // console.log("the selected value is " + (<HTMLInputElement>document.getElementById('select-supplier-id')).value);
  }


}
