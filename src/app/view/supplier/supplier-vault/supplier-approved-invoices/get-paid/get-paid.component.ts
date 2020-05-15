import { Component, OnInit } from '@angular/core';
import { ObjectsUtil } from 'src/app/utils/objects/objects';
import { Order } from 'src/app/model/buyer/order/order-model';
import { HttpService } from 'src/app/utils/http/http-service';
import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';
import { SupplierApprovedOrdersData } from 'src/app/service/supplier/supplier.approved.order.data';
import { InvoicePDF } from './generatePdf';
import { DateUtils } from 'src/app/utils/date/date-utils';
import { Invoice } from 'src/app/model/buyer/invoices/invoice-model';

@Component({
  selector: 'app-get-paid',
  templateUrl: './get-paid.component.html',
  styleUrls: ['./get-paid.component.css']
})
export class GetPaidComponent implements OnInit {
  public data
  buttonStatus = false;
  getPaidAlert = false;

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
  invoiceId: string;
  invoiceStatus;

  constructor(
    private objectUtilOrder: ObjectsUtil<Order>,
    private objectUtil: ObjectsUtil<SupplierOrder>,
    private objectsUtil: ObjectsUtil<any>,
    private objectUtilSupplierOrder: ObjectsUtil<SupplierOrder>,
    private httpService: HttpService<SupplierOrder>,

  ) {

    this.populateOrderView();
    // this.generatePdf()

  }



  private populateOrderView(): void {
    const order = SupplierApprovedOrdersData.getApproveOrderMap().get(SupplierApprovedOrdersData.getIdOfOrderToView());
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


    if (order !== undefined && order != null) {
      if (order.invoiceStatus == "approved") {
        this.buttonStatus = true;
      }
      this.invoiceStatus = order.invoiceStatus;
      this.buyerName = order.order.buyer.name;
      this.buyerPhone = order.order.buyer.phoneNumber;
      this.buyerEmail = order.order.buyer.email;

      this.supplierName = order.order.supplier.name;
      this.supplierPhone = order.order.supplier.phoneNumber;
      this.supplierEmail = order.order.supplier.email;

      this.invoiceId = `inv-${order.id}`;
      this.orderId = `ord-${order.order.id}`;

      this.placeOfDelivery = order.order.placeOfDelivery;
      this.termsOfPayment = order.order.paymentTerms;
      this.termsOfDelivery = order.order.deliveryTerms;

      this.srNo = order.order.isbnNumber;
      this.itemName = order.order.itemName;
      this.itemDescription = order.order.itemDescription;
      this.salesUnit = order.order.saleUnit;
      this.quantity = order.order.quantity;


    } else {

    }

  }


  generatePdf() {
    const invoices = SupplierApprovedOrdersData.getApproveOrderMap().get(SupplierApprovedOrdersData.getIdOfOrderToView())

    this.httpService.getRequest('/supplierOrders/findAll').subscribe(response => {

      this.objectUtil.dataObjectToArray(response.body).map(theOder => {
        if (theOder.order.id === invoices.order.id) {
          this.data = theOder
          this.data.id = theOder.id
          // return this.data

        }
      });
    })
    InvoicePDF.generatePdf(this.data);


  }



  getPaid() {
    let order = SupplierApprovedOrdersData.getApproveOrderMap().get(SupplierApprovedOrdersData.getIdOfOrderToView());

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

    let OldInvoice = SupplierApprovedOrdersData.getApproveOrderMap().get(SupplierApprovedOrdersData.getIdOfOrderToView())


    let invoicess = Invoice.createInstance();
    OldInvoice.invoiceStatus = "getPaid";
    OldInvoice.order.orderStatus = "getPaid"
    this.objectsUtil.objectToInstance(invoicess, OldInvoice);

    this.httpService.putRequest("/invoices/update", OldInvoice).subscribe(e => {
      console.log(`the updated Order is ${e.body, null, 2}`)
      this.getPaidAlert = true;
      let x =(<HTMLInputElement>document.getElementById("gotPaid"));
      x.style.display= "none";
    });

  }

  ngOnInit() {

    this.data
    this.populateOrderView();
    if (this.invoiceStatus == "approved") {
      this.buttonStatus = true;
    }
    this.generatePdf()

  }


}
