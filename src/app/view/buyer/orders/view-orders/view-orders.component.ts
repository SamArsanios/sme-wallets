import { Component, OnInit } from "@angular/core";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
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
    // const documentDefinition = { content: 'This is an sample PDF printed with pdfMake' };
    // pdfMake.createPdf(documentDefinition).open();
    //  }

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
            widths: ["*", 150, "*", "*", "*", "*"],
            heights: [40, 25],
            body: [
              [
                "DEPARTMENT",
                "TERMS OF DELIVERY",
                "METHOD OF CONVEYANCE",
                "PLACE OF DELIVERY",
                "TIME OF DELIVERY",
                "TERMS OF PAYMENT"
              ],
              [
                "One value goes here",
                "Another one here",
                "OK?",
                "Information goes here",
                "Information goes here",
                "Information goes here"
              ]
            ],
            fillColor: "#eeeeee"
          }
        },

        {
          style: "table2",
          table: {
            heights: [40, 25],
            body: [
              [
                "REF/ISBN CAT NO.",
                "DESCRIPTION",
                "UNIT OF SALE(PCS/LTR)",
                "QUANTITY",
                "UNIT PRICE",
                "TOTAL PRICE"
              ],
              [
                "One value goes here",
                "Another one here",
                "OK?",
                "Information goes here",
                "Information goes here",
                "Information goes here"
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
              style: "table3",
              table: {
                widths: [100, 100],
                heights: [30, 30, 30, 30],
                alignment: "right",
                body: [
                  ["SUBTOTAL", "1,000"],
                  ["TAX", "1,000"],
                  ["SHIPPING", "1,000"],
                  ["TOTAL PRICE", "1,000"]
                  // {
                  //   border: [false, false, false, false],
                  //   widths: [100, 100]
                  // }
                ]
              }
            }
          ]
        },
        {}
      ],
      // Styles for the Pdf Document Begins Here
      styles: {
        header: {
          fontSize: 20,
          alignment: "center",
          bold: true,
          margin: [0, 20, 0, 0]
        },
        subheader: { fontSize: 10, margin: [0, 25, 0, 0] },
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
