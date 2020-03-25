// import {List} from '../../utils/collections/list';
// // import {Order} from '../../model/buyer/order/order-model';
// import {Mapp} from '../../utils/collections/map';
// import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';

// export class BuyerApprovedInvoiceData {

//   private static buyerApprovedInvoicesLists: List<SupplierOrder>;
//   private static buyerApprovedInvoicesMap: Mapp<number, SupplierOrder>;
//   private static idOfOrderToView: number;

//   public static setbuyerApprovedInvoicesLists(buyerApprovedInvoices: List<SupplierOrder>): void {
//     BuyerApprovedInvoiceData.buyerApprovedInvoicesLists = buyerApprovedInvoices;
//   }

//   public static getbuyerApprovedInvoicesLists(): List<SupplierOrder> {
//     return BuyerApprovedInvoiceData.buyerApprovedInvoicesLists;
//   }

//   public static setbuyerApprovedInvoicesMap( buyerApprovedInvoices: Mapp<number, SupplierOrder>): void {
//     BuyerApprovedInvoiceData.buyerApprovedInvoicesMap = buyerApprovedInvoices;
//   }

//   public static getbuyerApprovedInvoicesMap(): Mapp<number, SupplierOrder> {
//     return BuyerApprovedInvoiceData.buyerApprovedInvoicesMap;
//   }


//   public static setIdOfInvoiceToView(id: number): void {
//     BuyerApprovedInvoiceData.idOfOrderToView = id;
//   }

//   public static getIdOfInvoiceToView(): number {
//     return BuyerApprovedInvoiceData.idOfOrderToView;
//   }

//   static addABuyerApprovedInvoices(anOrder: SupplierOrder): void {

//       if (BuyerApprovedInvoiceData.getbuyerApprovedInvoicesLists() == null || BuyerApprovedInvoiceData.getbuyerApprovedInvoicesLists().isEmpty()) {

//         const newList = new List<SupplierOrder>();
//         newList.add(anOrder);
//         BuyerApprovedInvoiceData.setbuyerApprovedInvoicesLists(newList);

//       } else {

//         BuyerApprovedInvoiceData.getbuyerApprovedInvoicesLists().add(anOrder);

//     }

//   }

//   static addABuyerApprovedInvoicesToMap(anOrder: SupplierOrder, id: number): void {

//       if (BuyerApprovedInvoiceData.getbuyerApprovedInvoicesMap() == null || BuyerApprovedInvoiceData.getbuyerApprovedInvoicesMap().isEmpty()) {

//         const newMap = new Mapp<number, SupplierOrder>();
//         newMap.put(id, anOrder);

//         BuyerApprovedInvoiceData.setbuyerApprovedInvoicesMap(newMap);

//       } else {

//         BuyerApprovedInvoiceData.getbuyerApprovedInvoicesMap().put(id, anOrder);

//       }
//     }


// }
