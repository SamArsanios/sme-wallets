import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buyernav',
  templateUrl: './buyernav.component.html',
  styleUrls: ['./buyernav.component.css']
})
export class BuyernavComponent implements OnInit {
  links = ['Account Settings', 'Orders', 'Invoices', 'Invite Contacts', 'Vault', 'Payment Notice'];

  constructor() { }

  ngOnInit() {
  }

}
