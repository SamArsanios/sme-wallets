import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suppliernav',
  templateUrl: './suppliernav.component.html',
  styleUrls: ['./suppliernav.component.css']
})
export class SuppliernavComponent implements OnInit {
  links = ['Account settings', 'Payment Information', 'Purchase Orders', 'Supplier Vault', 'Contact Support'];

  constructor() { }

  ngOnInit() {
  }

}
