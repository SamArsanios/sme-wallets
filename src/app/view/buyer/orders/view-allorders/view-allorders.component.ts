import { Component, OnInit } from '@angular/core';
import { AllOrderData } from '../../../../service/order/all.order.data';
import { Location } from '@angular/common';
import { HttpService } from 'src/app/utils/http/http-service';
import { Router } from '@angular/router';
import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';
import { ObjectsUtil } from 'src/app/utils/objects/objects';
import { GenerateBuyerAllOrderPDF } from './generateBuyerAllOrderPDF';
import { Order } from 'src/app/model/buyer/order/order-model';

@Component({
  selector: 'app-view-allorders',
  templateUrl: './view-allorders.component.html',
  styleUrls: ['./view-allorders.component.css']
})
export class ViewAllordersComponent implements OnInit {


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

  constructor(
    private router: Router,
    // private objectUtilOrder: ObjectsUtil<Order>,
    private httpService: HttpService<SupplierOrder>,
    private objectUtil: ObjectsUtil<SupplierOrder>,
    private location: Location
  ) {
    this.populateOrderView();
  }


  private populateOrderView(): void {

    const order = AllOrderData.getAllOrderMap().get(AllOrderData.getIdOfOrderToView());
    console.log("fgdffgsdfs", order)


    if (order !== undefined && order != null) {

      this.buyerName = order.order.buyer.name;
      this.buyerPhone = order.order.buyer.phoneNumber;
      this.buyerEmail = order.order.buyer.email;

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
      this.quantity = order.order.quantity;
      this.price = order.pricePerItem;
      this.totalBeforeTax = order.totalPrice;
      this.subTotal = order.subTotal;
      this.shipping = order.shippingCharges;
      this.totalAfterTax = order.finalTotal;
      this.tax = order.taxRate;


    } else {

      // fetch the order direct from the db basing on the ID provided

    }

  }

  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }

  generatePdf() {
    const id = AllOrderData.getIdOfOrderToView();
    const order = AllOrderData.getAllOrderMap().get(AllOrderData.getIdOfOrderToView());
    const orderToViewPdf = AllOrderData.getAllOrderMap().get(id);

    console.log(orderToViewPdf);

    GenerateBuyerAllOrderPDF.generatePdf(orderToViewPdf);
  }

  ngOnInit() {

    this.populateOrderView();

  }

}