// import {List} from '../../utils/collections/list';
// // import {Order} from '../../model/buyer/order/order-model';
// import {Mapp} from '../../utils/collections/map';
// import { Invoice } from 'src/app/model/buyer/invoices/invoice-model';
// // import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';

// export class BuyerApprovedInvoiceData {

//   private static buyerApprovedInvoiceLists: List<Invoice>;
//   private static buyerApprovedInvoiceMap: Mapp<number, Invoice>;
//   private static idOfOrderToView: number;

//   public static setbuyerApprovedInvoiceLists(supplierApprovedOrderss: List<Invoice>): void {
//     BuyerApprovedInvoiceData.buyerApprovedInvoiceLists = supplierApprovedOrderss;
//   }

//   public static getbuyerApprovedInvoiceLists(): List<Invoice> {
//     return BuyerApprovedInvoiceData.buyerApprovedInvoiceLists;
//   }

//   public static setbuyerApprovedInvoiceMap(supplierApprovedOrders: Mapp<number, Invoice>): void {
//     BuyerApprovedInvoiceData.buyerApprovedInvoiceMap = supplierApprovedOrders;
//   }

//   public static getbuyerApprovedInvoiceMap(): Mapp<number, Invoice> {
//     return BuyerApprovedInvoiceData.buyerApprovedInvoiceMap;
//   }


//   public static setIdOfOrderToView(id: number): void {
//     BuyerApprovedInvoiceData.idOfOrderToView = id;
//   }

//   public static getIdOfOrderToView(): number {
//     return BuyerApprovedInvoiceData.idOfOrderToView;
//   }

//   static addAbuyerApprovedInvoices(anOrder: Invoice): void {

//       if (BuyerApprovedInvoiceData.getbuyerApprovedInvoiceLists() == null || BuyerApprovedInvoiceData.getbuyerApprovedInvoiceLists().isEmpty()) {

//         const newList = new List<Invoice>();
//         newList.add(anOrder);
//         BuyerApprovedInvoiceData.setbuyerApprovedInvoiceLists(newList);

//       } else {

//         BuyerApprovedInvoiceData.getbuyerApprovedInvoiceLists().add(anOrder);

//     }

//   }

//   static addAbuyerApprovedInvoicesToMap(anOrder: Invoice, id: number): void {

//       if (BuyerApprovedInvoiceData.getbuyerApprovedInvoiceMap() == null || BuyerApprovedInvoiceData.getbuyerApprovedInvoiceMap().isEmpty()) {

//         const newMap = new Mapp<number, Invoice>();
//         newMap.put(id, anOrder);

//         BuyerApprovedInvoiceData.setbuyerApprovedInvoiceMap(newMap);

//       } else {

//         BuyerApprovedInvoiceData.getbuyerApprovedInvoiceMap().put(id, anOrder);

//       }
//     }


// }


import {List} from '../../utils/collections/list';
// import {Order} from '../../model/buyer/order/order-model';
import {Mapp} from '../../utils/collections/map';
import { Invoice } from 'src/app/model/buyer/invoices/invoice-model';
// import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';
// import { Invoice } from 'src/app/model/buyer/invoices/invoice-model';
// import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';
// import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';

export class BuyerApprovedInvoiceData {

  private static buyerApprovedInvoiceLists: List<Invoice>;
  private static buyerApprovedInvoiceMap: Mapp<number, Invoice>;
  private static idOfOrderToView: number;

  public static setbuyerApprovedInvoiceLists(supplierApprovedOrderss: List<Invoice>): void {
    BuyerApprovedInvoiceData.buyerApprovedInvoiceLists = supplierApprovedOrderss;
  }

  public static getbuyerApprovedInvoiceLists(): List<Invoice> {
    return BuyerApprovedInvoiceData.buyerApprovedInvoiceLists;
  }

  public static setbuyerApprovedInvoiceMap(supplierApprovedOrders: Mapp<number, Invoice>): void {
    BuyerApprovedInvoiceData.buyerApprovedInvoiceMap = supplierApprovedOrders;
  }

  public static getbuyerApprovedInvoiceMap(): Mapp<number, Invoice> {
    return BuyerApprovedInvoiceData.buyerApprovedInvoiceMap;
  }


  public static setIdOfOrderToView(id: number): void {
    BuyerApprovedInvoiceData.idOfOrderToView = id;
  }

  public static getIdOfOrderToView(): number {
    return BuyerApprovedInvoiceData.idOfOrderToView;
  }

  static addAbuyerApprovedInvoices(anOrder: Invoice): void {

      if (BuyerApprovedInvoiceData.getbuyerApprovedInvoiceLists() == null || BuyerApprovedInvoiceData.getbuyerApprovedInvoiceLists().isEmpty()) {

        const newList = new List<Invoice>();
        newList.add(anOrder);
        BuyerApprovedInvoiceData.setbuyerApprovedInvoiceLists(newList);

      } else {

        BuyerApprovedInvoiceData.getbuyerApprovedInvoiceLists().add(anOrder);

    }

  }

  static addAbuyerApprovedInvoicesToMap(anOrder: Invoice, id: number): void {

      if (BuyerApprovedInvoiceData.getbuyerApprovedInvoiceMap() == null || BuyerApprovedInvoiceData.getbuyerApprovedInvoiceMap().isEmpty()) {

        const newMap = new Mapp<number, Invoice>();
        newMap.put(id, anOrder);

        BuyerApprovedInvoiceData.setbuyerApprovedInvoiceMap(newMap);

      } else {

        BuyerApprovedInvoiceData.getbuyerApprovedInvoiceMap().put(id, anOrder);

      }
    }


}

