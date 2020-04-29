import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet-header',
  templateUrl: './wallet-header.component.html',
  styleUrls: ['./wallet-header.component.css']
})
export class WalletHeaderComponent implements OnInit {
  cur;
  currentUser: string;
  constructor() { }

  ngOnInit() {
    let currentLoggedinAdmin = localStorage.getItem('Admininfo')
    let currentUserr = JSON.parse(currentLoggedinAdmin)
    currentUserr.name
    this.cur = JSON.stringify(currentUserr.name)
    this.currentUser = JSON.parse(this.cur)
  }

}
