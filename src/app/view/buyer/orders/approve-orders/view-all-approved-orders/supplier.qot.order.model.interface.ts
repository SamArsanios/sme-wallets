import {Order} from '../../../../../model/buyer/order/order-model';
import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';

export interface ISupplierApproveOrder {
  orderNo: any;
  orderDate: any;
  orderDueDate: any;
  orderStatus: any;
  action: any;
}

export class PopulateApproveOrderTable {

  public static displayedColumns: string[] = [
    'orderNo',
    'orderDate',
    'orderDueDate',
    'orderStatus',
    'action'
  ];


  public  static populateTableOnInit(fromResponse: SupplierOrder[]) {

    return fromResponse.map(e => {

      return  {
        orderNo: `ORD-${e.id}`,
        orderDate: e.timestamp,
        orderDueDate: "not specified",
        orderStatus: 'pending',
        action: e.id
      };

    });
  }

}
