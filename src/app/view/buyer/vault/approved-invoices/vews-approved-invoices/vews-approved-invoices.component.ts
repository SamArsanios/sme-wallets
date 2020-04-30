import { Component, OnInit } from '@angular/core';
import { BuyerApprovedInvoiceData } from 'src/app/service/supplier/buyer.approved.invoice.data';
import { Router } from '@angular/router';
import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';
import { ObjectsUtil } from 'src/app/utils/objects/objects';
import { HttpService } from 'src/app/utils/http/http-service';
import { GenerateBuyerApprovedInvoicePDF } from './generateBuyerInvoicedOrderPDF';
import { BuyerApprovedInvoicePDF } from './generatePdf';

@Component({
  selector: 'app-vews-approved-invoices',
  templateUrl: './vews-approved-invoices.component.html',
  styleUrls: ['./vews-approved-invoices.component.css']
})
export class VewsApprovedInvoicesComponent implements OnInit {
public data;

  buyerName: string;
  buyerPhone: string;
  buyerEmail: string;
  date: string;
  orderNumber: number;

  supplierName: string;
  supplierPhone: string;
  supplierEmail: string;

  orderId: string;
  placeOfDelivery: string;
  termsOfPayment: string;
  termsOfDelivery: string;

  srNo: string;
  itemName: string;
  itemDescription: string;
  salesUnit: number;
  quantity: number;
  price: number;
  totalBeforeTax: number;

  subTotal: number;
  tax: number;
  shipping: number;
  totalAfterTax: number;
  invoiceDueDate: string;


  constructor(
    private router: Router,
    private objectUtilOrder: ObjectsUtil<SupplierOrder>,
    private httpService: HttpService<SupplierOrder>,
    private objectUtil: ObjectsUtil<SupplierOrder>
  ) {
    this.populateOrderView();
  }


  private populateOrderView(): void {

    const order = BuyerApprovedInvoiceData.getbuyerApprovedInvoiceMap().get(BuyerApprovedInvoiceData.getIdOfOrderToView());

    this.httpService.getRequest('/supplierOrders/findAll').subscribe(response => {

      this.objectUtil.dataObjectToArray(response.body).map(theOder => {
        if (theOder.order.id === order.order.id) {
          console.log("the suuuups order is", theOder)
          this.price = theOder.pricePerItem;
          this.shipping = theOder.shippingCharges;
          this.subTotal = theOder.subTotal;
          this.tax = theOder.taxRate;
          this.totalAfterTax = theOder.finalTotal;
          this.totalBeforeTax = theOder.subTotal;
        }
      });
    })



    if ( order != undefined && order != null ) {
      this.date = order.order.timestamp;
      this.orderNumber = order.order.id;
      this.buyerName = order.order.buyer.name;
      this.buyerPhone = order.order.buyer.phoneNumber;
      this.buyerEmail = order.order.buyer.email;
      this.invoiceDueDate = order.invoiceDueDate;

      this.supplierName = order.order.supplier.name;
      this.supplierPhone = order.order.supplier.phoneNumber;
      this.supplierEmail = order.order.supplier.email;

      this.orderId = `ord-${order.id}`;
      this.placeOfDelivery = order.order.placeOfDelivery;
      this.termsOfPayment = order.order.paymentTerms;
      this.termsOfDelivery = order.order.deliveryTerms;

      this.srNo = `ord-${order.id}`;
      this.itemName = order.order.itemName;
      this.itemDescription = order.order.itemDescription;
      this.salesUnit = order.order.saleUnit;
      // this.price = order.pricePerItem;
      // this.totalBeforeTax = order.subTotal;

      // this.subTotal = order.subTotal;
      // this.tax = order.taxRate;
      // this.shipping = order.shippingCharges;
      this.quantity = order.order.quantity;
      // this.totalBeforeTax = order.subTotal;
      // this.totalAfterTax = order.finalTotal;

    } else {

      // fetch the order direct from the db basing on the ID provided

    }

  }

// cancel() {
//   this.location.back(); // <-- go back to previous location on cancel
// }

  ngOnInit() {

    this.populateOrderView();

  }

  // generatePdf() {
  //   const id = BuyerApprovedInvoiceData.getIdOfOrderToView();
  //   const orderToViewPdf = BuyerApprovedInvoiceData.getbuyerApprovedInvoiceMap().get(id);

  //   console.log("the order to view in pdf is ,",orderToViewPdf);

  //   GenerateBuyerApprovedInvoicePDF.generatePdf(orderToViewPdf);
  // }

  generatePdf() {
    const invoices = BuyerApprovedInvoiceData.getbuyerApprovedInvoiceMap().get(BuyerApprovedInvoiceData.getIdOfOrderToView())
    console.log("the selected invoice id", invoices)
    
      var iif;
      this.httpService.getRequest('/supplierOrders/findAll').subscribe(response => {

        this.objectUtil.dataObjectToArray(response.body).map(theOder => {
          if (theOder.order.id === invoices.order.id) {
            this.data = theOder
            this.data["ids"] = invoices.id
            this.totalBeforeTax = theOder.subTotal
            // InvoicePDF.generatePdf(this.data);

            console.log("the generated supplierOrder of the invoice is", this.data)
            
          }
        });
      })
      BuyerApprovedInvoicePDF.generatePdf(this.data);


    }

 

}




