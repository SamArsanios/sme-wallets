import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { BuyerAllInvoicesInvoiceData } from 'src/app/service/order/buyer.allInvoices.invoice.data';
import { Invoice } from 'src/app/model/buyer/invoices/invoice-model';
import { HttpService } from 'src/app/utils/http/http-service';
import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';
import { ObjectsUtil } from 'src/app/utils/objects/objects';
import { GenerateSupplierInvoicedOrderPDF } from 'src/app/view/supplier/supplier-purchase-orders/supplier-invoiced-orders/view-supplier-invoiced-orders/generateSupplierInvoicedOrderPDF';
import { GenerateRaisedInvoicePDF } from './generateraisedInvoicePDF';
import { DateUtils } from 'src/app/utils/date/date-utils';
import { BuyerInvoicePDF } from './generatePdf';


@Component({
  selector: 'app-view-raised-invoices',
  templateUrl: './view-raised-invoices.component.html',
  styleUrls: ['./view-raised-invoices.component.css']
})
export class ViewRaisedInvoicesComponent implements OnInit {
  public data;
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
    private objectsUtil: ObjectsUtil<any>,
   
      private objectUtilOrder: ObjectsUtil<SupplierOrder>,
      private httpService: HttpService<SupplierOrder>,
      private objectUtil: ObjectsUtil<SupplierOrder>,
    
    
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
          this.totalAfterTax = theOder.finalTotal;
          this.totalBeforeTax = theOder.subTotal
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
      this.subTotal = 0;
      this.tax = order.interestRate;
      this.shipping = 0;
      this.quantity = order.order.quantity;
      this.totalAfterTax = order.amountToPay;


    } else {

      // fetch the order direct from the db basing on the ID provided

    }

  }

  ngOnInit() {

    this.populateOrderView();

  }


  generatePdf() {
    const invoices = BuyerAllInvoicesInvoiceData.getBuyerInvoiceMap().get(BuyerAllInvoicesInvoiceData.getIdOfInvoiceToView())
    console.log("the selected invoice id", invoices)
    
      var iif;
      this.httpService.getRequest('/supplierOrders/findAll').subscribe(response => {

        this.objectUtil.dataObjectToArray(response.body).map(theOder => {
          if (theOder.order.id === invoices.order.id) {
            // theOder.id = invoices.id
            this.data = theOder
            this.data.id = invoices.id
            // this.data["ids"] = invoices.id

            console.log("the generated supplierOrder of the invoice that i want to send is", this.data)
            
          }
        });
      })
      BuyerInvoicePDF.generatePdf(this.data);


    }



  ApproveInvoice() {
    let order = BuyerAllInvoicesInvoiceData.getBuyerInvoiceMap().get(BuyerAllInvoicesInvoiceData.getIdOfInvoiceToView())
    console.log("the firstttttt is teh invoice i want to modify", order)

    // modify the Timestamp
    
    const theTimestampStr = "theTimestampStr";
    const invoice = order
    invoice[theTimestampStr] = DateUtils.convertDateFormatToParsable(
      invoice.theTimestamp
    );
    invoice.theTimestamp = null;

    // modify the order timestamp
    const orderTimestampStr = "timestampStr";
    const invoiceorder = order.order
    invoiceorder[orderTimestampStr] = DateUtils.convertDateFormatToParsable(
      invoiceorder.timestamp
    );
    invoiceorder.timestamp = null;

    // modify order buyer email verufied at

    const buyerEmailverifiedatStr = "buyerEmailverifiedatStr";
    const invoiceorderBuyer = order.order.buyer
    invoiceorderBuyer[buyerEmailverifiedatStr] = DateUtils.convertDateFormatToParsable(
      invoiceorderBuyer.emailVerifiedAt
    );
    invoiceorderBuyer.emailVerifiedAt = null;

    // modify order supplier email verufied at

    const supplierEmailverifiedatStr = "supplierEmailverifiedatStr";
    const invoiceorderSupplier = order.order.supplier
    invoiceorderSupplier[supplierEmailverifiedatStr] = DateUtils.convertDateFormatToParsable(
      invoiceorderSupplier.emailVerifiedAt
    );
    invoiceorderSupplier.emailVerifiedAt = null;

    // modify order wallet email timestamp

    const walletTimestampStr = "walletTimestampStr";
    const wallet = order.order.wallet
    wallet[walletTimestampStr] = DateUtils.convertDateFormatToParsable(
      wallet.timestamp
    );
    wallet.timestamp = null;


    // modify order userwallet email verifiedat

    const userWalletTimestampStr = "userWalletTimestampStr";
    const userWallet = order.order.wallet.user
    userWallet[userWalletTimestampStr] = DateUtils.convertDateFormatToParsable(
      userWallet.emailVerifiedAt
    );
    userWallet.emailVerifiedAt = null;

    // Modify invoice date
    const invoiceDteStr = "invoiceDateStr";
    const invoiced = order
    invoiced[invoiceDteStr] = DateUtils.convertDateFormatToParsable(
      invoiced.invoiceDate
    );
    invoiced.invoiceDate = null;

    // modify invoice due date

    const invoiceDueDteStr = "invoiceDueDateStr";
    const invoiceduedate = order
    invoiceduedate[invoiceDueDteStr] = DateUtils.convertDateFormatToParsable(
      invoiceduedate.invoiceDueDate
    );
    invoiceduedate.invoiceDueDate = null;

    // modify sponsor email verified at

    const sponsorEmailVerifiedAtStr = "emailVerifiedAtStr";
    const sponsorInfo = order.sponsor
    sponsorInfo[sponsorEmailVerifiedAtStr] = DateUtils.convertDateFormatToParsable(
      sponsorInfo.emailVerifiedAt
    );
    sponsorInfo.emailVerifiedAt = null;

    let OldInvoice = BuyerAllInvoicesInvoiceData.getBuyerInvoiceMap().get(BuyerAllInvoicesInvoiceData.getIdOfInvoiceToView())


    let invoicess = Invoice.createInstance();
    OldInvoice.invoiceStatus = "approved";
    this.objectsUtil.objectToInstance(invoicess, OldInvoice);

    this.httpService.putRequest("/invoices/update", OldInvoice).subscribe(e => {
      console.log(`the updated Order is ${e.body, null, 2}`)
    });

  }



}
