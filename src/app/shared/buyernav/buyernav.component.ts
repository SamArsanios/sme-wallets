import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buyernav',
  templateUrl: './buyernav.component.html',
  styleUrls: ['./buyernav.component.css']
})
export class BuyernavComponent implements OnInit {
  currentUser: string;

  // remove array for links since its nolonger necessary
  constructor() { }

  ngOnInit() {
    let currentLoggedin = localStorage.getItem('loggedinUser')
    let currentUserr = JSON.parse(currentLoggedin)
    this.currentUser = JSON.stringify(currentUserr[0].name)
  }

}
