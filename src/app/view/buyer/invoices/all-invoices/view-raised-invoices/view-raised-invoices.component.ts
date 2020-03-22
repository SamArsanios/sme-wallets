import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { BuyerAllInvoicesInvoiceData } from 'src/app/service/order/buyer.allInvoices.invoice.data';
import { Invoice } from 'src/app/model/buyer/invoices/invoice-model';
import { HttpService } from 'src/app/utils/http/http-service';
import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';
import { ObjectsUtil } from 'src/app/utils/objects/objects';
import { GenerateSupplierInvoicedOrderPDF } from 'src/app/view/supplier/supplier-purchase-orders/supplier-invoiced-orders/view-supplier-invoiced-orders/generateSupplierInvoicedOrderPDF';
import { GenerateRaisedInvoicePDF } from './generateraisedInvoicePDF';


@Component({
  selector: 'app-view-raised-invoices',
  templateUrl: './view-raised-invoices.component.html',
  styleUrls: ['./view-raised-invoices.component.css']
})
export class ViewRaisedInvoicesComponent implements OnInit {
  price: number;
  buyerName: string;
  buyerPhone: string;
  buyerEmail: string;

  supplierName: string;
  supplierPhone: string;
  supplierEmail: string;

  orderId: string;
  placeOfDelivery: string;
  termsOfPayment: string;
  termsOfDelivery: string;
  invoiceId: string;
  orderDueDate: string;
  paymentDue: string;
  srNo: string;
  itemName: string;
  itemDescription: string;
  salesUnit: number;
  quantity: number;
  // price: number;
  totalBeforeTax: number;

  subTotal: number;
  tax: number;
  shipping: number;
  totalAfterTax: number;

  constructor(
    private location: Location,
    private httpService: HttpService<SupplierOrder>,
    private objectsUtil: ObjectsUtil<SupplierOrder>
    // private populateTable: PopulateTable<Invoice, IBuyerAllInvoices>,
    // private router: Router
    ) {


    this.populateOrderView();

  }

  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }

  

  private populateOrderView(): void {

    let order = BuyerAllInvoicesInvoiceData.getBuyerInvoiceMap().get(BuyerAllInvoicesInvoiceData.getIdOfInvoiceToView())
    console.log(`ze order is eeeeeeee${JSON.stringify(order, null, 2)}`)

    this.httpService.getRequest('/supplierOrders/findAll').subscribe(response => {

      this.objectsUtil.dataObjectToArray(response.body).map(theOder => {
        // console.log("the invoiced orders are,", response.body)
        if (theOder.order.id === order.order.id) {
          console.log("the suuuups order is", theOder)
          this.price = theOder.pricePerItem;
          this.shipping = theOder.shippingCharges;
          this.subTotal = theOder.subTotal;
          this.tax = theOder.taxRate;
          this.totalAfterTax = theOder.finalTotal


        //   this.receivers.push(theOder);
        //   SupplierInvoicedOrderData.addSupplierInvoicedOrder(theOder)
        //   SupplierInvoicedOrderData.addSupplierInvoicedOrderToMap(theOder, theOder.id)

        }
      });
    })


    
    if (order !== undefined && order != null) {






      this.buyerName = order.order.buyer.name;
      this.buyerPhone = order.order.buyer.phoneNumber;
      this.buyerEmail = order.order.buyer.email;
      this.invoiceId = `INV-${order.id}`;
      this.orderDueDate = order.invoiceDueDate;
      // this.price = order.
      Invoice

      this.supplierName = order.order.supplier.name;
      this.supplierPhone = order.order.supplier.phoneNumber;
      this.supplierEmail = order.order.supplier.email;

      this.orderId = `ord-${order.order.id}`;
      this.placeOfDelivery = order.order.placeOfDelivery;
      this.termsOfPayment = order.order.paymentTerms;
      this.termsOfDelivery = order.order.deliveryTerms;


      this.srNo = `ord-${order.order.isbnNumber}`;
      this.itemName = order.order.itemName;
      this.itemDescription = order.order.itemDescription;
      this.salesUnit = order.order.saleUnit;
      // this.price = order.order.price;
      // this.totalBeforeTax = order.order;

      this.subTotal = 0;
      this.tax = order.interestRate;
      this.shipping = 0;
      this.quantity = order.order.quantity;
      // this.totalBeforeTax = order.;
      this.totalAfterTax = order.amountToPay;


    } else {

      // fetch the order direct from the db basing on the ID provided

    }

  }

  ngOnInit() {

    this.populateOrderView();

  }

  generatePdf() {
    const id = BuyerAllInvoicesInvoiceData.getIdOfInvoiceToView();
    const orderToViewPdf = BuyerAllInvoicesInvoiceData.getBuyerInvoiceMap().get(id);

    console.log(orderToViewPdf);

    GenerateRaisedInvoicePDF.generatePdf(orderToViewPdf);
  }

}
