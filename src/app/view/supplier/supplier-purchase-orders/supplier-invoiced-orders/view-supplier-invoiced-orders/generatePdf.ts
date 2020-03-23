import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export class PurchaseOrderPDF {
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
        { columns: [] }
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
