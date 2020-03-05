import {Order} from '../../../../model/buyer/order/order-model';

export interface IApproveOrder {
    orderNo: string;
    orderDate: any;
    orderDueDate: any;
    orderStatus: any;
    // action: any;
  }


export class PopulateApproveOrderTable {

  public static displayedColumns: string[] = [
        "orderNo",
        "orderDate",
        "orderDueDate",
        "action",
        "orderStatus",
        "empty"
  
  ];


  public  static populateTableOnInit(fromResponse: Order[]) {

    return fromResponse.map(e => {

      return  {
        orderNo: `ORD-${e.id}`,
        orderDate: e.timestamp,
        orderDueDate: e.orderDueDate,
        orderStatus: 'pending',
        action: e.id
      };

    });
  }

}