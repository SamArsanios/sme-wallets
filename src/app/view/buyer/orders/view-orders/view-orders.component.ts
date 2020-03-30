import { Component, OnInit } from "@angular/core";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { PendingOrderData } from "../../../../service/order/pending.order.data";
import { Location } from "@angular/common";

@Component({
  selector: "app-view-orders",
  templateUrl: "./view-orders.component.html",
  styleUrls: ["./view-orders.component.css"]
})
export class ViewOrdersComponent implements OnInit {
  ngOnInit() {
    this.populateOrderView();
  }

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

  constructor(private location: Location) {
    this.populateOrderView();
  }
  cancel() {
    this.location.back();
  }

  private populateOrderView(): void {
    const order = PendingOrderData.getAllPendingOrderMap().get(
      PendingOrderData.getIdOfOrderToView()
    );

    if (order !== undefined && order != null) {
      this.buyerName = order.buyer.name;
      this.buyerPhone = order.buyer.phoneNumber;
      this.buyerEmail = order.buyer.email;

      this.supplierName = order.supplier.name;
      this.supplierPhone = order.supplier.phoneNumber;
      this.supplierEmail = order.supplier.email;

      this.orderId = `ord-${order.id}`;
      this.placeOfDelivery = order.placeOfDelivery;
      this.termsOfPayment = order.paymentTerms;
      this.termsOfDelivery = order.deliveryTerms;

      this.srNo = `ord-${order.id}`;
      this.itemName = order.itemName;
      this.itemDescription = order.itemDescription;
      this.salesUnit = order.saleUnit;
      this.price = 0;
      this.totalBeforeTax = 0;

      this.subTotal = 0;
      this.tax = 0;
      this.shipping = 0;
      this.quantity = order.quantity;
      this.totalBeforeTax = 0;
      this.totalAfterTax = 0;
    } else {
      // fetch the order direct from the db basing on the ID provided
    }
  }

  generatePdf() {
    const documentDefinition = {
      content: [
        {
          text: "PURCHASE ORDER",
          style: "header"
        },
        {
          alignment: "justify",
          columns: [
            {
              text: ""
            },
            {
              text: "ORDER NO - \n ORDER DUE DATE : \n\n\n",
              alignment: "right",
              margin: [0, 30, 0, 0],
              fontSize: 12
            }
          ]
        },
        {
          columns: [
            {
              text: "From :\n Name :\n Address : \n Phone :",
              style: "subheader"
            },
            {
              text:
                "To :\n Recipient Name :\n Company Name :\n Address :\n Phone : \n",
              style: "subheader"
            },
            {
              text:
                "Order Details : \n Order Id : \n Delivery Place : \n Payment Terms \n Delivery Terms : ",
              style: "subheader"
            }
          ]
        },
        {
          style: "table1",
          table: {
            headerRows: 1,
            widths: ["*", 130, "*", "*", "*", "*"],
            heights: [40, 25],
            body: [
              [
                { text: "DEPARTMENT", style: "tableHeader" },
                { text: "TERMS OF DELIVERY", style: "tableHeader" },
                { text: "METHOD OF CONVEYANCE", style: "tableHeader" },
                { text: "PLACE OF DELIVERY", style: "tableHeader" },
                { text: "TIME OF DELIVERY", style: "tableHeader" },
                { text: "TERMS OF PAYMENT", style: "tableHeader" }
              ]
            ]
          }
        },
        {
          style: "table2",
          table: {
            heights: [40, 25],
            widths: ["*", 130, "*", "*", "*", "*"],
            body: [
              [
                { text: "REF/ISBN CAT NO.", style: "tableHeader" },
                { text: "DESCRIPTION", style: "tableHeader" },
                { text: "UNIT OF SALE(PCS/LTR)", style: "tableHeader" },
                { text: "QUANTITY", style: "tableHeader" },
                { text: "UNIT PRICE", style: "tableHeader" },
                { text: "TOTAL PRICE", style: "tableHeader" }
              ],
              [
                { text: "One value goes here", style: "tableContent" },
                { text: "Another one here", style: "tableContent" },
                { text: "OK?", style: "tableContent" },
                { text: "Information goes here", style: "tableContent" },
                { text: "Information goes here", style: "tableContent" },
                { text: "Information goes here", style: "tableContent" }
              ]
            ]
          }
        },
        {
          alignment: "justify",
          columns: [
            {
              text: ""
            },
            // Table 3
            {
              style: "table3",
              table: {
                widths: [100, 100],
                heights: [30, 30, 30, 30],
                body: [
                  [
                    {
                      text: "SUBTOTAL",
                      style: "tableHeader",
                      border: [false, false, false, false],
                      alignment: "right"
                    },
                    {
                      text: "1,000",
                      style: "tableContent"
                    } // to be popoulated from db
                  ],
                  [
                    {
                      text: "TAX",
                      style: "tableHeader",
                      border: [false, false, false, false],
                      alignment: "right"
                    },
                    {
                      text: "1,000",
                      style: "tableContent"
                    } // to be popoulated from db
                  ],
                  [
                    {
                      text: "SHIPPING",
                      style: "tableHeader",
                      border: [false, false, false, false],
                      alignment: "right"
                    },
                    {
                      text: "1,000",
                      style: "tableContent"
                    } // to be popoulated from db
                  ],
                  [
                    {
                      text: "TOTAL PRICE",
                      style: "tableHeader",
                      border: [false, false, false, false],
                      alignment: "right"
                    },

                    {
                      text: "1,000",
                      style: "tableContent"
                    } // to be popoulated from db
                  ]
                ]
              }
            }
          ]
        },
        //Footer Note
        {
          columns: [
            {
              text:
                "Make all deliveries as per Terms of Delivery.\n If you have any questions concerning this Purchase Order, contact . . . ",
              margin: [0, 30, 0, 0]
            }
          ]
        },
        {
          columns: [
            {
              text: " REQUISITIONER",
              alignment: "center",
              margin: [0, 20, 0, 0]
            }
          ]
        }
      ],
      // Styles for the Pdf Document Begins Here
      styles: {
        header: {
          fontSize: 20,
          alignment: "center",
          bold: true,
          margin: [0, 15, 0, 0]
        },
        subheader: { bold: true, fontSize: 10, margin: [0, 25, 0, 0] },
        tableHeader: {
          bold: true,
          fontSize: 10,
          margin: [0, 14, 0, 0]
          // fillColor: "#dddddd"
        },
        tableContent: { margin: [0, 14, 0, 0] },
        table1: { margin: [0, 30, 0, 15], fontSize: 9 },
        table2: { margin: [0, 30, 0, 15], fontSize: 9 },
        table3: { margin: [10, 30, 0, 0], fontSize: 9 }
      },
      defaultStyle: {
        columnGap: 50
      }
    };
    pdfMake.createPdf(documentDefinition).open();
  }

}
