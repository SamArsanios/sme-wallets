import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { Order } from "src/app/model/buyer/order/order-model";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export class GeneratePurchaseOrderPDF {
  static generatePdf(order: Order) {
    const documentDefinition = {
      content: [
        {
          text: `PURCHASE ORDER`,
          style: `header`
        },
        {
          alignment: `justify`,
          columns: [
            {
              text: ``
            },
            {
              text: `ORDER NO - ${order.id}\n ORDER DUE DATE :${order.orderDueDate} \n\n\n`,
              alignment: `right`,
              margin: [0, 30, 0, 0],
              fontSize: 12
            }
          ]
        },
        {
          columns: [
            {
              text: `Sender/Buyer \n Name :${order.buyer.name}\n Address : \n Phone :${order.buyer.phoneNumber}`,
              style: `subheader`
            },
            {
              text: `Recepient/Supplier \n Recipient Name :${order.supplier.name}\n Company Name :\n Address :\n Phone :${order.supplier.phoneNumber} \n`,
              style: `subheader`
            },
            {
              text: `Order Details  \n Order Id : ${order.id}\n Delivery Place :${order.placeOfDelivery}\n Payment Terms : ${order.paymentTerms} \n Delivery Terms : ${order.deliveryTerms}`,
              style: `subheader`
            }
          ]
        },
        {
          style: `table1`,
          table: {
            headerRows: 1,
            widths: [`*`, 130, `*`, `*`, `*`, `*`],
            heights: [40, 25],
            body: [
              [
                { text: `DEPARTMENT`, style: `tableHeader` },
                { text: `TERMS OF DELIVERY`, style: `tableHeader` },
                { text: `METHOD OF CONVEYANCE`, style: `tableHeader` },
                { text: `PLACE OF DELIVERY`, style: `tableHeader` },
                { text: `TIME OF DELIVERY`, style: `tableHeader` },
                { text: `TERMS OF PAYMENT`, style: `tableHeader` }
              ],

              [
                { text: `${order.department}`, style: `tableContent` },
                { text: `${order.deliveryTerms}`, style: `tableContent` },
                { text: `${order.conveyanceMethod}`, style: `tableContent` },
                { text: `${order.placeOfDelivery}`, style: `tableContent` },
                { text: `${order.deliveryTerms}`, style: `tableContent` },
                { text: `${order.paymentTerms}`, style: `tableContent` }
              ]
            ]
          }
        },

        {
          style: `table2`,
          table: {
            heights: [40, 25],
            widths: [`*`, 130, `*`, `*`, `*`, `*`],
            body: [
              [
                { text: `REF/ISBN CAT NO.`, style: `tableHeader` },
                { text: `DESCRIPTION`, style: `tableHeader` },
                { text: `UNIT OF SALE(PCS/LTR)`, style: `tableHeader` },
                { text: `QUANTITY`, style: `tableHeader` },
                { text: `UNIT PRICE`, style: `tableHeader` },
                { text: `TOTAL PRICE`, style: `tableHeader` }
              ],
              [
                { text: `${order.isbnNumber}`, style: `tableContent` },
                { text: `${order.itemDescription}`, style: `tableContent` },
                { text: `${order.saleUnit}`, style: `tableContent` },
                { text: `${order.quantity}`, style: `tableContent` },
                { text: `0`, style: `tableContent` },
                { text: `0`, style: `tableContent` }
              ]
            ]
          }
        },
        {
          alignment: `justify`,
          columns: [
            {
              text: ``
            },
            // Table 3
            {
              style: `table3`,
              table: {
                widths: [100, 100],
                heights: [30, 30, 30, 30],
                body: [
                  [
                    {
                      text: `SUBTOTAL`,
                      style: `tableHeader`,
                      border: [false, false, false, false],
                      alignment: `right`
                    },
                    {
                      text: `0`,
                      style: `tableContent`
                    } // to be popoulated from db
                  ],
                  [
                    {
                      text: `TAX`,
                      style: `tableHeader`,
                      border: [false, false, false, false],
                      alignment: `right`
                    },
                    {
                      text: `0`,
                      style: `tableContent`
                    } // to be popoulated from db
                  ],
                  [
                    {
                      text: `SHIPPING`,
                      style: `tableHeader`,
                      border: [false, false, false, false],
                      alignment: `right`
                    },
                    {
                      text: `0`,
                      style: `tableContent`
                    } // to be popoulated from db
                  ],
                  [
                    {
                      text: `TOTAL PRICE`,
                      style: `tableHeader`,
                      border: [false, false, false, false],
                      alignment: `right`
                    },

                    {
                      text: `0`,
                      style: `tableContent`
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
              text: `Make all deliveries as per Terms of Delivery.\n If you have any questions concerning this Purchase Order, contact . . . `,
              margin: [0, 30, 0, 0]
            }
          ]
        },
        {
          columns: [
            {
              text: ` REQUISITIONER`,
              alignment: `center`,
              margin: [0, 20, 0, 0]
            }
          ]
        }
      ],
      // Styles for the Pdf Document Begins Here
      styles: {
        header: {
          fontSize: 20,
          alignment: `center`,
          bold: true,
          margin: [0, 15, 0, 0]
        },
        subheader: { bold: true, fontSize: 10, margin: [0, 25, 0, 0] },
        tableHeader: {
          bold: true,
          fontSize: 10,
          margin: [0, 14, 0, 0]
          // fillColor: `#dddddd`
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
