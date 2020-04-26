import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';

// import {Order} from '../../../../model/buyer/order/order-model';

export interface IApproveOrder {
    orderNo: string;
    orderDate: any;
    orderDueDate: any;
    orderStatus: any;
    action: any;
  }


export class PopulateApproveOrderTable {

  public static displayedColumns: string[] = [
        "orderNo",
        "orderDate",
        "orderDueDate",
        "action",
        "orderStatus",
        // "empty"
  
  ];


  public  static populateTableOnInit(fromResponse: SupplierOrder[]) {
console.log("is there anything in the response", fromResponse)
    return fromResponse.map(e => {

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
