import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';

// import {Order} from '../../../../model/buyer/order/order-model';

export interface IApproveOrder {
    orderNo: string;
    orderDate: any;
    orderDueDate: any;
    orderStatus: any;
    action: any;
  }


export class SocketPopulateApproveOrderTable {

  public static displayedColumns: string[] = [
        "orderNo",
        "orderDate",
        "orderDueDate",
        "action",
        "orderStatus",
        // "empty"
  
  ];

  public static getUniqueArray(arr=[], compareProps=[]) {
    let modifiedArray= [];
    if(compareProps.length === 0 && arr.length > 0)
     compareProps.push(...Object.keys(arr[0]));
       arr.map(item=> {
     if(modifiedArray.length === 0){
      modifiedArray.push(item);
     }else {
      if(!modifiedArray.some(item2=> 
      compareProps.every(eachProps=> item2[eachProps] === item[eachProps])
    )){modifiedArray.push(item);}
   }
    });
   return modifiedArray;
   }


  public  static populateTableOnInit(fromResponse: SupplierOrder[]) {
    var unduplicatedList = SocketPopulateApproveOrderTable.getUniqueArray(fromResponse, [])

    console.log("these are teh awaited items", unduplicatedList)

    return unduplicatedList.map(e => {

      return  {
        orderNo: `ord-${e.order.id}`,
        orderDate: e.timestamp,
        orderDueDate: e.order.orderDueDate,
        action: e.id,
        orderStatus: e.order.orderStatus,
      };

    });
    
  }

}
