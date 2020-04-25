import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, NgForm } from "@angular/forms";
import { SupplierService } from "../../../../service/supplier/supplier.service";
import { OrdersComponent } from "../orders/orders.component";
import { List } from "src/app/utils/collections/list";
import { User } from "src/app/shared/model/user/user-model";
import { HtpsService } from "src/app/htps.service";
import { HttpService } from "src/app/utils/http/http-service";
import { ObjectsUtil } from "src/app/utils/objects/objects";
import { Order } from "src/app/model/buyer/order/order-model";
import { DateUtils } from "src/app/utils/date/date-utils";
import { UserTransient } from "src/app/shared/model/user/user-model-transient";
import { Mapp } from "../../../../utils/collections/map";
import { SupplierData } from "../../../../service/supplier/supplier.data";
import { Wallet } from "../../../../shared/model/wallet/wallet-model";
import { WebsocketService } from "src/app/utils/websocket/websocket.service";
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: "app-create-order",
  templateUrl: "./create-order.component.html",
  styleUrls: ["./create-order.component.css"]
})
export class CreateOrderComponent implements OnInit {
  OrderStatus = false;

  // tslint:disable-next-line:max-line-length
  constructor(
    private location: Location,
    private router: Router,
    private httpService: HttpService<User>,
    private objectUtil: ObjectsUtil<User>,
    private objectUtilOrder: ObjectsUtil<Order>,
    private websocket: WebsocketService,
    // private location: Location,
    
  ) {

}
  

  public supplierNames: List<User>;
  successPost: string;
  date = new Date();
  dateCtrl: FormControl;

  receivers: Array<User> = new Array<User>();

  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }


  ngOnInit() {

    console.log("the buyer is ",localStorage.getItem('loggedinUser'))

    this.httpService.getRequest("/users/findAll").subscribe(e => {
      this.objectUtil.dataObjectToArray(e.body).map(aSupplier => {
        if (aSupplier.userType === "supplier") {
          this.receivers.push(aSupplier);


          SupplierData.addASupplier(aSupplier);
          console.log("all suppliers are heeeeeeeeeeeey ", SupplierData.getAllSuppliers())


          SupplierData.addASupplierToMap(aSupplier, aSupplier.id);
        
        }
      });
    });
    

    this.dateCtrl = new FormControl("", [Validators.required]);
  } // end ngOninit()

  


  buyer(): User {
    var loggedIn =  JSON.parse(localStorage.getItem('loggedinUser'))
    const user = new User(
      loggedIn[0].id,
      loggedIn[0].email,
      loggedIn[0].emailVerifiedAt,
      loggedIn[0].password,
      loggedIn[0].phoneNumber,
      loggedIn[0].refUserId,
      loggedIn[0].name,
      loggedIn[0].userType
    );


    const emailVerifiedAtStr = "emailVerifiedAtStr";

    user[emailVerifiedAtStr] = user.emailVerifiedAt;

    user[emailVerifiedAtStr] = DateUtils.convertDateFormatToParsable(
      user.emailVerifiedAt
    );

    user.emailVerifiedAt = null;

    return user;
  }

  temporaryWallet(): Wallet {
    const wallet = new Wallet(
      1,
      "SME",
      "Feb 21, 2020 5:13:45 AM",
      this.buyer()
    );

    wallet.timestamp = null;

    const timestampStr = "timestampStr";

    wallet[timestampStr] = wallet.timestamp;

    wallet[timestampStr] = DateUtils.convertDateFormatToParsable(
      wallet.timestamp
    );

    wallet.timestamp = null;

    return wallet;
  }

  

  onSubmit(form: NgForm) {
    const idOfSupplier = form.value.receivername;

    const supplierInfo = SupplierData.getMapOfIdToSupplier().get(
      Number(idOfSupplier)
    );

    console.log("supplier infrmation", supplierInfo);
    localStorage.setItem("supplierinfo", JSON.stringify(supplierInfo));

    const object = form.value;

    let userSupplier = new User(null, null, null, null, null, null, null, null);

    userSupplier = supplierInfo;

    const emailVerifiedAtStr = "emailVerifiedAtStr";

    userSupplier[emailVerifiedAtStr] = userSupplier.emailVerifiedAt;

    console.log(`ggggg ${userSupplier[emailVerifiedAtStr]} `);

    userSupplier[emailVerifiedAtStr] = DateUtils.convertDateFormatToParsable(
      supplierInfo.emailVerifiedAt
    );

    userSupplier.emailVerifiedAt = null;

    console.log(`form object ${JSON.stringify(object, null, 2)} `);

    const order = Order.createInstance();

    order.wallet = this.temporaryWallet();
    order.supplier = userSupplier;
    order.buyer = this.buyer();
    order.orderStatus = "pending";

    const newOrder = this.objectUtilOrder.objectToInstance(order, object);

    console.log(`the order: ${JSON.stringify(newOrder, null, 2)} `);

    this.httpService.postRequest("/orders/create", order).subscribe(e => {
      
 
      console.log(`the result ${JSON.stringify(e, null, 2)} `);
      this.OrderStatus = true;
      // setTimeout(() => {
      //  this.cancel() 
      // }, 2000);
    })
    if(this.OrderStatus= true){
    this.FindAll()
  }

  } // end onSubmit()

  FindAll(){
    this.httpService.getRequest("/orders/findAll").subscribe(e=>{
      console.log("i have found all")
    })
  }

  showNotification(result: any) {
    console.log("result show to the suplier", result);
    if(result){
      this.OrderStatus = true
    }
  }

  onOptionsSelected() {
    console.log(`hhhhhhh`);
  }
}
