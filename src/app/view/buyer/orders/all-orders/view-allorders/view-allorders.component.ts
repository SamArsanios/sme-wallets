import { Component, OnInit } from '@angular/core';
import { AllOrderData } from '../../../../../service/order/all.order.data';
import { Location } from '@angular/common';
import { HttpService } from 'src/app/utils/http/http-service';
import { Router } from '@angular/router';
import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';
import { ObjectsUtil } from 'src/app/utils/objects/objects';
import { GenerateBuyerAllOrderPDF } from './generateBuyerAllOrderPDF';
import { Order } from 'src/app/model/buyer/order/order-model';
import { Observer } from 'rxjs';
import { GenerateSupplierBuyerAllOrderPDF } from './generateSupplierBuyerAllOrderPDF';

@Component({
  selector: 'app-view-allorders',
  templateUrl: './view-allorders.component.html',
  styleUrls: ['./view-allorders.component.css']
})
export class ViewAllordersComponent implements OnInit {
  public data;

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
  timestamp: string;
  orderNo: string;

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

  constructor(
    private router: Router,
    private httpService: HttpService<SupplierOrder>,
    private objectUtil: ObjectsUtil<SupplierOrder>,
    private location: Location
  ) {
    this.orderToView()
    this.populateOrderView();
  }


  private populateOrderView(): void {

    const order = AllOrderData.getAllOrderMap().get(AllOrderData.getIdOfOrderToView());

    console.log("fgdffgsdfs", order)

    this.httpService.getRequest('/supplierOrders/findAll').subscribe(response => {

      this.objectUtil.dataObjectToArray(response.body).map(theOder => {
        if (theOder.order.id === order.id) {
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

      this.buyerName = order.buyer.name;
      this.buyerPhone = order.buyer.phoneNumber;
      this.buyerEmail = order.buyer.email;

      this.supplierName = order.supplier.name;
      this.supplierPhone = order.supplier.phoneNumber;
      this.supplierEmail = order.supplier.email;
      this.timestamp = order.timestamp;
      this.orderNo = `ord-${order.id}`;

      this.orderId = `ord-${order.id}`;
      this.placeOfDelivery = order.placeOfDelivery;
      this.termsOfPayment = order.paymentTerms;
      this.termsOfDelivery = order.deliveryTerms;

      this.srNo = order.isbnNumber;
      this.itemName = order.itemName;
      this.itemDescription = order.itemDescription;
      this.salesUnit = order.saleUnit;
      this.quantity = order.quantity;
      this.price = 0;
      this.totalBeforeTax = 0;
      this.subTotal = 0;
      this.shipping = 0;
      this.totalAfterTax = 0;
      this.tax = 0;

      this.totalAfterTax = 0;


    } else {

    }

  }

  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }

  orderToView() {
    const order = AllOrderData.getAllOrderMap().get(AllOrderData.getIdOfOrderToView());
    const id = AllOrderData.getIdOfOrderToView();
    this.httpService.getRequest('/orders/findAll').subscribe(response => {

      this.objectUtil.dataObjectToArray(response.body).map(theOder => {
        if (theOder.id === id) {
          this.data = theOder

        }
      });
    })


    this.httpService.getRequest('/supplierOrders/findAll').subscribe(response => {

      this.objectUtil.dataObjectToArray(response.body).map(theOder => {
        if (theOder.order.id === id) {
          this.data = theOder

        }
      });
    })

  }

  generatePdf() {
    this.orderToView()
    const id = AllOrderData.getIdOfOrderToView();
    const order = AllOrderData.getAllOrderMap().get(AllOrderData.getIdOfOrderToView());
    var datas;
    if (order.orderStatus != "pending") {

      this.httpService.getRequest('/supplierOrders/findAll').subscribe(response => {

        this.objectUtil.dataObjectToArray(response.body).map(theOder => {
          if (theOder.order.id === id) {
            this.data = theOder

          }
        });
      })
      GenerateSupplierBuyerAllOrderPDF.generatePdf(this.data);

    }
    else {

      this.httpService.getRequest('/orders/findAll').subscribe(response => {

        this.objectUtil.dataObjectToArray(response.body).map(theOder => {
          if (theOder.id === id) {
            this.data = theOder

          }
        });
      })
      GenerateBuyerAllOrderPDF.generatePdf(this.data);
    }
    // const orderToViewPdf = AllOrderData.getAllOrderMap().get(id);

    // console.log(orderToViewPdf);

    // console.log("the data to populate", this.data)
  }






  ngOnInit() {
    this.orderToView()
    this.populateOrderView();
    console.log("mmmmmmmmmmmm", this.data)


  }

}