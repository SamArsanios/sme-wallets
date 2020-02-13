import { Component, OnInit } from "@angular/core";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { GeneratePurchaseOrderPDF } from "./generatePurchaseOrderPDF";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: "app-view-orders",
  templateUrl: "./view-orders.component.html",
  styleUrls: ["./view-orders.component.css"]
})
export class ViewOrdersComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  generatePdf() {
    GeneratePurchaseOrderPDF.generatePdf();
  }

  invoicePdf() {
    const documentDefinition = {
      content: [
        {
          text: "INVOICE",
          style: "header"
        },
        {
          alignment: "justify",
          columns: [
            {
              text: ""
            },
            {
              text: "INVOICE NO :\n ORDER NO : \n ORDER DUE DATE : \n\n\n",
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
              text: "To :\n Name : \n Address :\n Phone : \n",
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
            widths: ["*", 170, "*", "*"],
            heights: [35, 25],
            body: [
              [
                { text: "QUANTITY", style: "tableHeader" },
                { text: "DESCRIPTION", style: "tableHeader" },
                { text: "UNIT PRICE", style: "tableHeader" },
                { text: "TOTAL", style: "tableHeader" }
              ],

              [
                { text: "One value goes here", style: "tableContent" },
                { text: "Another one here", style: "tableContent" },
                { text: "OK?", style: "tableContent" },
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

            {
              style: "table2",
              table: {
                widths: [100, 100],
                heights: [30, 30, 30, 30],
                body: [
                  [
                    {
                      text: "SUB TOTAL",
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
                      text: "TAX ON TOTAL",
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
                      text: "SHIPPING CHARGES",
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
                      text: "TOTAL",
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
                "Make all checks payable to Company Name If you have any questions concerning this Invoice, contact ",
              margin: [0, 50, 0, 0]
            }
          ]
        },
        {
          columns: [
            {
              text: " THANK YOU FOR YOUR BUSINESS!",
              alignment: "center",
              margin: [0, 50, 0, 0]
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

        table2: { margin: [10, 30, 0, 0], fontSize: 9 }
      },
      defaultStyle: {
        columnGap: 50
      }
    };
    pdfMake.createPdf(documentDefinition).open();
  }
}
