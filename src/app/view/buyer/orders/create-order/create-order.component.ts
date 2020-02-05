import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { SupplierService } from '../../../../service/supplier/supplier.service';
import { OrdersComponent } from '../orders/orders.component';
import { List } from 'src/app/utils/collections/list';
import { User } from 'src/app/shared/model/user/user-model';
import { HtpsService } from 'src/app/htps.service';
import { HttpService } from 'src/app/utils/http/http-service';
import { ObjectsUtil } from 'src/app/utils/objects/objects';
import { Order } from 'src/app/model/buyer/order/order-model';
import { DateUtils } from 'src/app/utils/date/date-utils';
import { UserTransient } from 'src/app/shared/model/user/user-model-transient';
import {Mapp} from '../../../../utils/collections/map';
import {SupplierData} from '../../../../service/supplier/supplier.data';
import {Wallet} from '../../../../shared/model/wallet/wallet-model';
@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  constructor(private httpService: HttpService<User>, private objectUtil: ObjectsUtil<User>) { }
  public supplierNames: List<User>;
  successPost:string;
  date = new Date();
  dateCtrl: FormControl;
  receivers: Array<User> = new Array<User>();
  findAllSuppliersMap(): Mapp<number, User> {
    // check if the suppliers map is empty
    if (SupplierData.getMapOfIdToSupplier() == null || SupplierData.getMapOfIdToSupplier().isEmpty()) {
      this.httpService.getRequest('/users/findAll').subscribe(e => {
        this.objectUtil.dataObjectToArray(e.body).map(aSupplier => {
            SupplierData.addASupplier(aSupplier);
            SupplierData.addASupplierToMap(aSupplier, aSupplier.id);

    // console.log(`four not: ${this.findAllSuppliersMap()} `);
        });
      });
    }
    // console.log(`four not: ${this.findAllSuppliersMap()} `);
    // console.log(`four: ${this.findAllSuppliersMap().get(4)} `);
    // console.log(`to array: ${SupplierData.getAllSuppliers()} `);
    return SupplierData.getMapOfIdToSupplier();
  }
  ngOnInit() {
// this.findAllSuppliersMap();
    // this.receivers = SupplierData.getAllSuppliers().toArray();
    this.httpService.getRequest('/users/findAll').subscribe(e => {
      console.log(JSON.stringify(this.objectUtil.dataObjectToArray(e)));
      // if(e.body.userType =="supplier"){
      this.objectUtil.dataObjectToArray(e.body).map(asupplier => {
    
        if (asupplier.userType === 'supplier') {
          this.receivers.push(asupplier);
          SupplierData.addASupplier(asupplier);
          SupplierData.addASupplierToMap(asupplier, asupplier.id);
          // console.log(`fff`, SupplierData.getMapOfIdToSupplier().get(7));
    
        }
      });
    });
    this.dateCtrl = new FormControl('', [Validators.required]);
  }
  onSubmit(form: NgForm) {

    const idOfSupplier = form.value.receivername;
    const supplierInfo = SupplierData.getMapOfIdToSupplier().get(Number(idOfSupplier));
    console.log('supplier infrmation', supplierInfo);
    const object = form.value;
    let userSupplier = new User(null, null, null, null, null, null, null, null);
    userSupplier = supplierInfo;
    const emailVerifiedAtStr = 'emailVerifiedAtStr';
    userSupplier[emailVerifiedAtStr] = userSupplier.emailVerifiedAt;
    
    console.log(`ggggg ${userSupplier[emailVerifiedAtStr]} `);
    userSupplier[emailVerifiedAtStr] = DateUtils.convertDateFormatToParsable(supplierInfo.emailVerifiedAt);
    
    userSupplier.emailVerifiedAt = null;
    console.log(`ttttttt`, userSupplier [emailVerifiedAtStr]);
  
    console.log(`the buyer details`, supplierInfo)

    const wallet = new Wallet(1, 'Manufacturing', 'null', supplierInfo);
    wallet.timestamp = null;
    const timestampStr = 'timestampStr';
    wallet[timestampStr] = wallet.timestamp;
    wallet[timestampStr] = DateUtils.convertDateFormatToParsable('Jan 30, 2020 8:59:14 AM');
    
  
    const order = new Order(0, supplierInfo, supplierInfo, object.isbnNumber, object.itemName, object.itemDescription, object.billingAddress, object.saleUnit,
      object.quantity, object.department, object.conveyanceMethod, object.deliveryTerms, object.paymentTerms, object.placeOfDelivery,
      object.deliveryTime, object.orderDueDate, object.time_period, object.qrCode, wallet, 'order status', 'raise invoice',
      'notification status', null, object.industryType);
    console.log(`the order: ${JSON.stringify(order, null, 2)} `);
    
    this.httpService.postRequest('/orders/create', order).subscribe(e => {
        console.log(`the result ${JSON.stringify(e)} `);
        let name = JSON.stringify(e.body.name);
        this.successPost = "you have successfully posted an order to buyer. please check you pending orders for notices"

      }
    );
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