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

    return fromResponse.map(e => {

      return  {
        orderNo: `ord-${e.id}`,
        orderDate: e.timestamp,
        orderDueDate: e.order.orderDueDate,
        action: e.id,
        orderStatus: e.order.orderStatus,
      };

    });
  }

}
