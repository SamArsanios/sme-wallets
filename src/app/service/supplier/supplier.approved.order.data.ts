// import {List} from '../../utils/collections/list';
// // import {Order} from '../../model/buyer/order/order-model';
// import {Mapp} from '../../utils/collections/map';
// import { Invoice } from 'src/app/model/buyer/invoices/invoice-model';
// // import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';

// export class SupplierApprovedOrdersData {

//   private static supplierApprovedOrdersLists: List<Invoice>;
//   private static supplierApprovedOrdersMap: Mapp<number, Invoice>;
//   private static idOfOrderToView: number;

//   public static setsupplierApprovedOrdersLists(supplierApprovedOrderss: List<Invoice>): void {
//     SupplierApprovedOrdersData.supplierApprovedOrdersLists = supplierApprovedOrderss;
//   }

//   public static getsupplierApprovedOrdersLists(): List<Invoice> {
//     return SupplierApprovedOrdersData.supplierApprovedOrdersLists;
//   }

//   public static setsupplierApprovedOrdersMap(supplierApprovedOrders: Mapp<number, Invoice>): void {
//     SupplierApprovedOrdersData.supplierApprovedOrdersMap = supplierApprovedOrders;
//   }

//   public static getsupplierApprovedOrdersMap(): Mapp<number, Invoice> {
//     return SupplierApprovedOrdersData.supplierApprovedOrdersMap;
//   }


//   public static setIdOfOrderToView(id: number): void {
//     SupplierApprovedOrdersData.idOfOrderToView = id;
//   }

//   public static getIdOfOrderToView(): number {
//     return SupplierApprovedOrdersData.idOfOrderToView;
//   }

//   static addAsupplierApprovedOrders(anOrder: Invoice): void {

//       if (SupplierApprovedOrdersData.getsupplierApprovedOrdersLists() == null || SupplierApprovedOrdersData.getsupplierApprovedOrdersLists().isEmpty()) {

//         const newList = new List<Invoice>();
//         newList.add(anOrder);
//         SupplierApprovedOrdersData.setsupplierApprovedOrdersLists(newList);

//       } else {

//         SupplierApprovedOrdersData.getsupplierApprovedOrdersLists().add(anOrder);

//     }

//   }

//   static addAsupplierApprovedOrdersToMap(anOrder: Invoice, id: number): void {

//       if (SupplierApprovedOrdersData.getsupplierApprovedOrdersMap() == null || SupplierApprovedOrdersData.getsupplierApprovedOrdersMap().isEmpty()) {

//         const newMap = new Mapp<number, Invoice>();
//         newMap.put(id, anOrder);

//         SupplierApprovedOrdersData.setsupplierApprovedOrdersMap(newMap);

//       } else {

//         SupplierApprovedOrdersData.getsupplierApprovedOrdersMap().put(id, anOrder);

//       }
//     }


// }


import {List} from '../../utils/collections/list';
// import {Order} from '../../model/buyer/order/order-model';
import {Mapp} from '../../utils/collections/map';
import { Invoice } from 'src/app/model/buyer/invoices/invoice-model';
// import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';
// import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';

export class SupplierApprovedOrdersData {

  private static supplierApprovedOrdersLists: List<Invoice>;
  private static supplierApprovedOrdersMap: Mapp<number, Invoice>;
  private static idOfOrderToView: number;

  public static setsupplierApprovedOrdersLists(supplierApprovedOrderss: List<Invoice>): void {
    SupplierApprovedOrdersData.supplierApprovedOrdersLists = supplierApprovedOrderss;
  }

  public static getsupplierApprovedOrdersLists(): List<Invoice> {
    return SupplierApprovedOrdersData.supplierApprovedOrdersLists;
  }

  public static setsupplierApprovedOrdersMap(supplierApprovedOrders: Mapp<number, Invoice>): void {
    SupplierApprovedOrdersData.supplierApprovedOrdersMap = supplierApprovedOrders;
  }

  public static getsupplierApprovedOrdersMap(): Mapp<number, Invoice> {
    return SupplierApprovedOrdersData.supplierApprovedOrdersMap;
  }


  public static setIdOfOrderToView(id: number): void {
    SupplierApprovedOrdersData.idOfOrderToView = id;
  }

  public static getIdOfOrderToView(): number {
    return SupplierApprovedOrdersData.idOfOrderToView;
  }

  static addAsupplierApprovedOrders(anOrder: Invoice): void {

      if (SupplierApprovedOrdersData.getsupplierApprovedOrdersLists() == null || SupplierApprovedOrdersData.getsupplierApprovedOrdersLists().isEmpty()) {

        const newList = new List<Invoice>();
        newList.add(anOrder);
        SupplierApprovedOrdersData.setsupplierApprovedOrdersLists(newList);

      } else {

        SupplierApprovedOrdersData.getsupplierApprovedOrdersLists().add(anOrder);

    }

  }

  static addAsupplierApprovedOrdersToMap(anOrder: Invoice, id: number): void {

      if (SupplierApprovedOrdersData.getsupplierApprovedOrdersMap() == null || SupplierApprovedOrdersData.getsupplierApprovedOrdersMap().isEmpty()) {

        const newMap = new Mapp<number, Invoice>();
        newMap.put(id, anOrder);

        SupplierApprovedOrdersData.setsupplierApprovedOrdersMap(newMap);

      } else {

        SupplierApprovedOrdersData.getsupplierApprovedOrdersMap().put(id, anOrder);

      }
    }


}

