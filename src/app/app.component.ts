import { Component, OnInit } from "@angular/core";
import { WebsocketService } from "./utils/websocket/websocket.service";
import { HttpClient } from "@angular/common/http";
import { HttpService } from "./utils/http/http-service";
import { Order } from "./model/buyer/order/order-model";
import { ObjectsUtil } from './utils/objects/objects';
import { SupplierOrder } from './model/supplier/order/SupplierOrder';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "sme-wallets";
  msg = []
  f;



  constructor(
    private websocketService: WebsocketService,
    private httpService: HttpService<Order>,
    private httpServices: HttpService<SupplierOrder>,
    private objectsUtil: ObjectsUtil<Order>,
    private objectUtil: ObjectsUtil<any>,
  ) {
    // this.theNotice();
    // this.ff()
  }

  // theNotice(): void {




  //   this.websocketService.notify("/topic/supplierOrders/findAll", (message)=>{
  //     var x = JSON.parse(message.body)})
  //   }

  // kk(){
  //   this.httpServices.getRequest("/supplierOrders/findAll").subscribe(response => {
  //     console.log("this is the response before a websocket")
  //   })

  // }


  ngOnInit() {
    // this.kk()
    // this.ff()

  }
  // jy() {
  //   var data = '{"_body":{\"timestamp\":\"2016-11-18T04:46:18.972+0000\",\"status\":500,\"error\":\"Internal Server Error\",\"exception\":\"java.lang.ArrayIndexOutOfBoundsException\",\"message\":\"1\",\"path\":\"/login\"},"status":500,"ok":false,"statusText":"Internal Server Error"}';
  //    var t = {"headers": {}, "body": "[{\"supplier\":{\"id\":1,\"email\":\"kab@gmail.com\"}]", "statusCode": "OK", "statusCodeValue": 200}
  //      var dat = JSON.parse(data); 

  //   }


  // }



  // theNotice(): void {

  //   this.websocketService.notify("/topic/orders/findAll", this.test);

  // }

//   private test(message: any) {
// var x = JSON.parse(message.body)
//     console.log("teh messageeeeeeeeee is",x.body);
    // message.body =message.body.slice(0, 21) + message.body.slice(22);

    // var ty = message.body.replace(/\\/g, "");
    // console.log("theeee data recieved from a websocket is ", ty)
    //  var ty = this.objectUtil.dataObjectToArray(message.body).map(aSupplier => {
    //    aSupplier
    // })
    //     console.log("theeee data recieved from a websocket is ", ty)

    // for (var i = 0; i < message.body.length; i++) {

    //     let obj = message.body;
    // for (let [k, v] of Object.entries(obj)) {

    //   if (k == `body`) {

  //   //     let newObject = new Object();
  //   //     newObject = v;
  //   //     obj = newObject;
    //   console.log(message.body[i])
    // }

    // if (message.body) {
    //   this.msg.push(message);
    // }
    // console.log("the meeeeeeeeeeeeeeees is", this.msg)
  }
  //   var arr = [];
  //   for (var i = 0; i < message.length; i++) {
  //     arr.push(message[i].name);
  //   }
  //   if (arr.length > 0) {
  //     this.f = "now populatefffffffffff"
  //   }
  //   // console.log("ffffffffffffffffffffffffffffff", arr[0])
  //   // }


  //   //     let order = Order.createInstance();
  //   // let obj = message.body;
  //   // for (let [k, v] of Object.entries(obj)) {

  //   //   if (k == `body`) {

  //   //     let newObject = new Object();
  //   //     newObject = v;
  //   //     obj = newObject;




  //   //     console.log(`new Object: ${newObject.toString} `);


  //   //   }

  //   // }

  //   //     // var y = this.replaceAt(obj, 21, "/")
  //   //     var finalData = obj.replace(/\\/g, "");

  //   //     // for (let [k, v] of Object.entries(finalData)) {

  //   //     //   if (k == `body`) {

  //   //     //     let newObjects = new Object();
  //   //     //     newObjects = v;
  //   //     //     finalData = newObjects;
  //   //     //     console.log(`new Object neeeeeeeeeeeewer: ${newObjects} `);

  //   //     //   }

  //   //     // } 
  //   //     // this.objectsUtil.dataObjectToArray(finalData.body)

  //   // // var t = finalData
  //   //     console.log(`the message that has come through is ${finalData}`);
  //   //     // console.log(str.substr(1, 2));
  //   //         // var y = this.replaceAt(finalData, 21, "/")
  //   //         // console.log("thfffffkkkkkkkkkkkkffffffffff", y)

  //   //     // const keys = Object.values(obj)



  //   //   }

  //   // test(result): void {
  //   //   // result.map(e=>
  //   //     console.log("dddddddddddddddddddddd", result.body.body)

  //   //   let order = Order.createInstance();
  //   //   let obj = result.body;
  //   //   for(let [k,v] of Object.entries(obj)){
  //   //       if(k  === "body") {

  //   //        let newObject = new Object();
  //   //        newObject = v;
  //   //        obj = newObject;
  //   //        console.log(`new Objectssssssss: ${obj} `);
  //   //       //  return newObject
  //   //       //  this.allOrderss = newObject

  //   //       }
  //   //   }
  //   // console.log(`new Objectssssssss: ${obj} `);


  // }
  // ff() {
  //   if (this.f === "now populatefffffffffff") {
  //     console.log("THIIS FUNCTION CAN EXECUTE NOW")
  //   }
  //   console.log("there is no data that has come trhough yet")

//   }
// }
