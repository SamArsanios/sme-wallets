import { Component, OnInit } from '@angular/core';
import { ObjectsUtil } from 'src/app/utils/objects/objects';
import { Order } from 'src/app/model/buyer/order/order-model';
import { HttpService } from 'src/app/utils/http/http-service';
import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';
import { SupplierApprovedOrdersData } from 'src/app/service/supplier/supplier.approved.order.data';
import { InvoicePDF } from './generatePdf';

@Component({
  selector: 'app-get-paid',
  templateUrl: './get-paid.component.html',
  styleUrls: ['./get-paid.component.css']
})
export class GetPaidComponent implements OnInit {
  public data


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

  constructor(
    private objectUtilOrder: ObjectsUtil<Order>,
    private httpService: HttpService<SupplierOrder>,
    private objectUtil: ObjectsUtil<SupplierOrder>,
  ) {

    this.populateOrderView();

  }



  private populateOrderView(): void {
const order = SupplierApprovedOrdersData.getApproveOrderMap().get(SupplierApprovedOrdersData.getIdOfOrderToView());
console.log("the order is ", order)
this.httpService.getRequest('/supplierOrders/findAll').subscribe(response => {

  this.objectUtil.dataObjectToArray(response.body).map(theOder => {
    if (theOder.order.id === order.order.id) {
      console.log("the suuuups order is", theOder)
      this.price = theOder.pricePerItem;
      this.shipping = theOder.shippingCharges;
      this.subTotal = theOder.subTotal;
      this.tax = theOder.taxRate;
      this.totalAfterTax = theOder.finalTotal;
    }
  });
})


if (order !== undefined && order != null) {

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
      // this.invoiceDueDate = order.invoiceDueDate;

      this.srNo = order.order.isbnNumber;
      this.itemName = order.order.itemName;
      this.itemDescription = order.order.itemDescription;
      this.salesUnit = order.order.saleUnit;
      this.quantity = order.order.quantity;


    } else {

    }

  }

  // generatePdf() {
  //   const order = SupplierApprovedOrdersData.getApproveOrderMap().get(SupplierApprovedOrdersData.getIdOfOrderToView());

  //   const orderToViewPdf = SupplierInvoicedOrderData.getSupplierInvoicedOrderMap().get(id);

  //   console.log(orderToViewPdf);

  //   GenerateSupplierInvoicedOrderPDF.generatePdf(orderToViewPdf);
  // }

  generatePdf() {
        const invoices = SupplierApprovedOrdersData.getApproveOrderMap().get(SupplierApprovedOrdersData.getIdOfOrderToView())
        console.log("the selected invoice id", invoices)
        
          var iif;
          this.httpService.getRequest('/supplierOrders/findAll').subscribe(response => {
    
            this.objectUtil.dataObjectToArray(response.body).map(theOder => {
              if (theOder.order.id === invoices.order.id) {
                this.data = theOder
                // InvoicePDF.generatePdf(this.data);

                console.log("the generated supplierOrder of the invoice is", this.data)
                
              }
            });
          })
          InvoicePDF.generatePdf(this.data);

    
        }

  ngOnInit() {
    this.data
  }


}
