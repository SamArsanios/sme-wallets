// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-bargraph',
//   templateUrl: './bargraph.component.html',
//   styleUrls: ['./bargraph.component.css']
// })
// export class BargraphComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

/*app.component.ts*/
import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../../../node_modules/canvasjs/dist/canvasjs.min.js';
//var CanvasJS = require('./canvasjs.min');
 
@Component({
  selector: 'app-bargraph',
  templateUrl: './bargraph.component.html',
  styleUrls: ['./bargraph.component.css']

})
export class BargraphComponent implements OnInit {
	ngOnInit() {
		let chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,
		exportEnabled: true,
		title: {
			text: "Buyer Purchase Trends"
		},
		data: [{
			type: "column",
			dataPoints: [
				{ y: 71, label: "Current orders" },
				{ y: 55, label: "Invoices" },
				{ y: 50, label: "Total Orders" },
				{ y: 65, label: "Invited contacts" }
			]
		}]
	});
		
	chart.render();
    }
}
