// import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';
import { Order } from 'src/app/model/buyer/order/order-model';

export interface IAllOrders {
  orderNo: string;
  orderDate: any;
  orderDueDate: any;
  senderName: string;
  orderStatus: string;
  action: number;
}

export class PopulateAllOrderTable {

  public static displayedColumns: string[] = [
    'orderNo',
    'orderDate',
    'orderDueDate',
    'senderName',
    'orderStatus',
    'action'
  ];


  public  static populateTableOnInit(fromResponse: Order[]) {
    
    console.log("the un seeeen",fromResponse )

    return fromResponse.map(e => {

      return  {
        orderNo: `ord-${e.id}`,
        orderDate: e.timestamp,
        orderDueDate: e.orderDueDate,
        senderName : e.buyer.name,
        orderStatus: e.orderStatus,
        action: e.id
      };

    });
  }

}
 