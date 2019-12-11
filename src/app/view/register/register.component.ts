import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs';

import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  wallets = ["SME", "AGRIC", "Test1", "Admin", "test_wallet", "ret", "test", 
  "test_new", "OGAS Wallet", "test", "asd", "ert", "demo"]
  industries = ["Manufacturing"," Oil and Gas", "Hospitality", 
  "Security Services", "Motor Garage", "Business Consulting",
  "Government Dept", "Telecom", "Mining", "Roofing Industry","Travel Industry",
  " Medical Insurance","Taxi and Vehicle Hire", "Infrastructure Developer", "Electricity Producer",
  "Renewable Energy Products", "FMCG", "Stationary and Printing","Branding and Marketing Services",
  "Audit and Assurance Services", "BPO and Call Centre Services", "Warehousing and Logistics",
  "IT Technology", "Cleaning Services", "Office Suppliers","Food and Beverage",
  "Pension Services","Banking Services","Microfinance", "Telecom Towers", "Legal Services",
  "Govt Agency", "Trading Activities", "Govt Dept", "Franchisee", "Agro Processor", "Agro Dealer",
  "Agro Chemicals Manufacturer", "Farming Enterprise", "FinTech", "Agro Inputs",
  "Agro Exporter", "Organic Farmer", "Organic Exporter", "Licensed Broker Dealer",
  "Fund Manager", "Utility", "Camping Services", "Welding Services",
  "Oil&amp;Gas", "Training Institutional", "Training Consultant",
  "School and College"
]
  constructor() { }

  ngOnInit() {
  }

}