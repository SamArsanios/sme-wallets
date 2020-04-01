// import pdfMake from "pdfmake/build/pdfmake";
// import pdfFonts from "pdfmake/build/vfs_fonts";
// pdfMake.vfs = pdfFonts.pdfMake.vfs;

// export class PurchaseOrderPDF {
//   generatePdf() {
//     const documentDefinition = {
//       content: [
//         {
//           text: "PURCHASE ORDER",
//           style: "header"
//         },
//         {
//           alignment: "justify",
//           columns: [
//             {
//               text: ""
//             },
//             {
//               text: "ORDER NO - \n ORDER DUE DATE : \n\n\n",
//               alignment: "right",
//               margin: [0, 30, 0, 0],
//               fontSize: 12
//             }
//           ]
//         },
//         {
//           columns: [
//             {
//               text: "From :\n Name :\n Address : \n Phone :",
//               style: "subheader"
//             },
//             {
//               text:
//                 "To :\n Recipient Name :\n Company Name :\n Address :\n Phone : \n",
//               style: "subheader"
//             },
//             {
//               text:
//                 "Order Details : \n Order Id : \n Delivery Place : \n Payment Terms \n Delivery Terms : ",
//               style: "subheader"
//             }
//           ]
//         },
//         {
//           style: "table1",
//           table: {
//             headerRows: 1,
//             widths: ["*", 130, "*", "*", "*", "*"],
//             heights: [40, 25],
//             body: [
//               [
//                 { text: "DEPARTMENT", style: "tableHeader" },
//                 { text: "TERMS OF DELIVERY", style: "tableHeader" },
//                 { text: "METHOD OF CONVEYANCE", style: "tableHeader" },
//                 { text: "PLACE OF DELIVERY", style: "tableHeader" },
//                 { text: "TIME OF DELIVERY", style: "tableHeader" },
//                 { text: "TERMS OF PAYMENT", style: "tableHeader" }
//               ],

//               [
//                 { text: "One value goes here", style: "tableContent" },
//                 { text: "Another one here", style: "tableContent" },
//                 { text: "OK?", style: "tableContent" },
//                 { text: "Information goes here", style: "tableContent" },
//                 { text: "Information goes here", style: "tableContent" },
//                 { text: "Information goes here", style: "tableContent" }
//               ]
//             ]
//           }
//         },

//         {
//           style: "table2",
//           table: {
//             heights: [40, 25],
//             widths: ["*", 130, "*", "*", "*", "*"],
//             body: [
//               [
//                 { text: "REF/ISBN CAT NO.", style: "tableHeader" },
//                 { text: "DESCRIPTION", style: "tableHeader" },
//                 { text: "UNIT OF SALE(PCS/LTR)", style: "tableHeader" },
//                 { text: "QUANTITY", style: "tableHeader" },
//                 { text: "UNIT PRICE", style: "tableHeader" },
//                 { text: "TOTAL PRICE", style: "tableHeader" }
//               ],
//               [
//                 { text: "One value goes here", style: "tableContent" },
//                 { text: "Another one here", style: "tableContent" },
//                 { text: "OK?", style: "tableContent" },
//                 { text: "Information goes here", style: "tableContent" },
//                 { text: "Information goes here", style: "tableContent" },
//                 { text: "Information goes here", style: "tableContent" }
//               ]
//             ]
//           }
//         },
//         {
//           alignment: "justify",
//           columns: [
//             {
//               text: ""
//             },

//             {
//               style: "table3",
//               table: {
//                 widths: [100, 100],
//                 heights: [30, 30, 30, 30],
//                 body: [
//                   [
//                     {
//                       text: "SUBTOTAL",
//                       style: "tableHeader",
//                       border: [false, false, false, false],
//                       alignment: "right"
//                     },
//                     {
//                       text: "1,000",
//                       style: "tableContent"
//                     } // to be popoulated from db
//                   ],
//                   [
//                     {
//                       text: "TAX",
//                       style: "tableHeader",
//                       border: [false, false, false, false],
//                       alignment: "right"
//                     },
//                     {
//                       text: "1,000",
//                       style: "tableContent"
//                     } // to be popoulated from db
//                   ],
//                   [
//                     {
//                       text: "SHIPPING",
//                       style: "tableHeader",
//                       border: [false, false, false, false],
//                       alignment: "right"
//                     },
//                     {
//                       text: "1,000",
//                       style: "tableContent"
//                     } // to be popoulated from db
//                   ],
//                   [
//                     {
//                       text: "TOTAL PRICE",
//                       style: "tableHeader",
//                       border: [false, false, false, false],
//                       alignment: "right"
//                     },

//                     {
//                       text: "1,000",
//                       style: "tableContent"
//                     } // to be popoulated from db
//                   ]
//                 ]
//               }
//             }
//           ]
//         },
//         { columns: [] }
//       ],
//       // Styles for the Pdf Document Begins Here
//       styles: {
//         header: {
//           fontSize: 20,
//           alignment: "center",
//           bold: true,
//           margin: [0, 15, 0, 0]
//         },
//         subheader: { bold: true, fontSize: 10, margin: [0, 25, 0, 0] },
//         tableHeader: {
//           bold: true,
//           fontSize: 10,
//           margin: [0, 14, 0, 0]
//           // fillColor: "#dddddd"
//         },
//         tableContent: { margin: [0, 14, 0, 0] },
//         table1: { margin: [0, 30, 0, 15], fontSize: 9 },
//         table2: { margin: [0, 30, 0, 15], fontSize: 9 },
//         table3: { margin: [10, 30, 0, 0], fontSize: 9 }
//       },
//       defaultStyle: {
//         columnGap: 50
//       }
//     };
//     pdfMake.createPdf(documentDefinition).open();
//   }
// }


// import pdfMake from "pdfmake/build/pdfmake";
// import pdfFonts from "pdfmake/build/vfs_fonts";
// pdfMake.vfs = pdfFonts.pdfMake.vfs;

// export class PurchaseOrderPDF {
//   generatePdf() {
//     const documentDefinition = {
//       content: [
//         {
//           text: "PURCHASE ORDER",
//           style: "header"
//         },
//         {
//           alignment: "justify",
//           columns: [
//             {
//               text: ""
//             },
//             {
//               text: "ORDER NO - \n ORDER DUE DATE : \n\n\n",
//               alignment: "right",
//               margin: [0, 30, 0, 0],
//               fontSize: 12
//             }
//           ]
//         },
//         {
//           columns: [
//             {
//               text: "From :\n Name :\n Address : \n Phone :",
//               style: "subheader"
//             },
//             {
//               text:
//                 "To :\n Recipient Name :\n Company Name :\n Address :\n Phone : \n",
//               style: "subheader"
//             },
//             {
//               text:
//                 "Order Details : \n Order Id : \n Delivery Place : \n Payment Terms \n Delivery Terms : ",
//               style: "subheader"
//             }
//           ]
//         },
//         {
//           style: "table1",
//           table: {
//             headerRows: 1,
//             widths: ["*", 130, "*", "*", "*", "*"],
//             heights: [40, 25],
//             body: [
//               [
//                 { text: "DEPARTMENT", style: "tableHeader" },
//                 { text: "TERMS OF DELIVERY", style: "tableHeader" },
//                 { text: "METHOD OF CONVEYANCE", style: "tableHeader" },
//                 { text: "PLACE OF DELIVERY", style: "tableHeader" },
//                 { text: "TIME OF DELIVERY", style: "tableHeader" },
//                 { text: "TERMS OF PAYMENT", style: "tableHeader" }
//               ],

//               [
//                 { text: "One value goes here", style: "tableContent" },
//                 { text: "Another one here", style: "tableContent" },
//                 { text: "OK?", style: "tableContent" },
//                 { text: "Information goes here", style: "tableContent" },
//                 { text: "Information goes here", style: "tableContent" },
//                 { text: "Information goes here", style: "tableContent" }
//               ]
//             ]
//           }
//         },

//         {
//           style: "table2",
//           table: {
//             heights: [40, 25],
//             widths: ["*", 130, "*", "*", "*", "*"],
//             body: [
//               [
//                 { text: "REF/ISBN CAT NO.", style: "tableHeader" },
//                 { text: "DESCRIPTION", style: "tableHeader" },
//                 { text: "UNIT OF SALE(PCS/LTR)", style: "tableHeader" },
//                 { text: "QUANTITY", style: "tableHeader" },
//                 { text: "UNIT PRICE", style: "tableHeader" },
//                 { text: "TOTAL PRICE", style: "tableHeader" }
//               ],
//               [
//                 { text: "One value goes here", style: "tableContent" },
//                 { text: "Another one here", style: "tableContent" },
//                 { text: "OK?", style: "tableContent" },
//                 { text: "Information goes here", style: "tableContent" },
//                 { text: "Information goes here", style: "tableContent" },
//                 { text: "Information goes here", style: "tableContent" }
//               ]
//             ]
//           }
//         },
//         {
//           alignment: "justify",
//           columns: [
//             {
//               text: ""
//             },

//             {
//               style: "table3",
//               table: {
//                 widths: [100, 100],
//                 heights: [30, 30, 30, 30],
//                 body: [
//                   [
//                     {
//                       text: "SUBTOTAL",
//                       style: "tableHeader",
//                       border: [false, false, false, false],
//                       alignment: "right"
//                     },
//                     {
//                       text: "1,000",
//                       style: "tableContent"
//                     } // to be popoulated from db
//                   ],
//                   [
//                     {
//                       text: "TAX",
//                       style: "tableHeader",
//                       border: [false, false, false, false],
//                       alignment: "right"
//                     },
//                     {
//                       text: "1,000",
//                       style: "tableContent"
//                     } // to be popoulated from db
//                   ],
//                   [
//                     {
//                       text: "SHIPPING",
//                       style: "tableHeader",
//                       border: [false, false, false, false],
//                       alignment: "right"
//                     },
//                     {
//                       text: "1,000",
//                       style: "tableContent"
//                     } // to be popoulated from db
//                   ],
//                   [
//                     {
//                       text: "TOTAL PRICE",
//                       style: "tableHeader",
//                       border: [false, false, false, false],
//                       alignment: "right"
//                     },

//                     {
//                       text: "1,000",
//                       style: "tableContent"
//                     } // to be popoulated from db
//                   ]
//                 ]
//               }
//             }
//           ]
//         },
//         { columns: [] }
//       ],
//       // Styles for the Pdf Document Begins Here
//       styles: {
//         header: {
//           fontSize: 20,
//           alignment: "center",
//           bold: true,
//           margin: [0, 15, 0, 0]
//         },
//         subheader: { bold: true, fontSize: 10, margin: [0, 25, 0, 0] },
//         tableHeader: {
//           bold: true,
//           fontSize: 10,
//           margin: [0, 14, 0, 0]
//           // fillColor: "#dddddd"
//         },
//         tableContent: { margin: [0, 14, 0, 0] },
//         table1: { margin: [0, 30, 0, 15], fontSize: 9 },
//         table2: { margin: [0, 30, 0, 15], fontSize: 9 },
//         table3: { margin: [10, 30, 0, 0], fontSize: 9 }
//       },
//       defaultStyle: {
//         columnGap: 50
//       }
//     };
//     pdfMake.createPdf(documentDefinition).open();
//   }
// }

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { SupplierOrder } from 'src/app/model/supplier/order/SupplierOrder';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export class BuyerApprovedInvoicePDF {
static generatePdf(order: any) {
// invoicePdf() {
    const documentDefinition = {
      content: [
        {
          text: "INVOICE" ,
          style: "header"
        },
        {
          alignment: "justify",
          columns: [
            {
              text: ""
            },
            {
            // text: `ORDER NO - ${order.id}\n ORDER DUE DATE :${order.order.orderDueDate} \n\n\n`,

              text: `INVOICE NO :  ${order.ids}\n ORDER NO :  ${order.order.id} \n ORDER DUE DATE : \n\n\n`,
              alignment: "right",
              margin: [0, 30, 0, 0],
              fontSize: 12
            }
          ]
        },
        {
          columns: [
            {
              text: `From : \n Name : ${order.order.supplier.name}\n Address : \n Phone : ${order.order.supplier.phoneNumber}`,
              style: "subheader"
            },
            {
              text: `To :\n Name :  ${order.order.buyer.name}\n Address :\n Phone : ${order.order.buyer.phoneNumber} \n`,
              style: "subheader"
            },
            {
              
              text:
            
                `Order Details : \n Order Id :${order.order.id} \n Delivery Place : ${order.order.placeOfDelivery}\n Payment Terms: ${order.order.paymentTerms} \n Delivery Terms : ${order.order.deliveryTerms}`,
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
                { text: `${order.order.quantity}`, style: "tableContent" },
                { text: `${order.order.itemDescription}`, style: "tableContent" },
                { text: `${order.pricePerItem}`, style: "tableContent" },
                { text: `${order.totalPrice}`, style: "tableContent" }
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
                      text: `${order.subTotal}`,
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
                      text: `${order.taxRate}`,
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
                      text: `${order.shippingCharges}`,
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
                      text: `${order.totalPrice}`,
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
