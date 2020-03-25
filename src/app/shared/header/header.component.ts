import { Component, OnInit, Input } from '@angular/core';
import { User } from '../model/user/user-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cur;
  currentUser: string;
  constructor() { }

  ngOnInit() {
    let currentLoggedin = localStorage.getItem('loggedinUser')
    let currentUserr = JSON.parse(currentLoggedin)
    this.cur = JSON.stringify(currentUserr[0].name)
    this.currentUser = JSON.parse(this.cur)
  }


}
