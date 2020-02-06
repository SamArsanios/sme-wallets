import { Component, OnInit, Input } from '@angular/core';
import { User } from '../model/user/user-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: string;
  constructor() { }

  ngOnInit() {
    let currentLoggedin = localStorage.getItem('loggedinUser')
    let currentUserr = JSON.parse(currentLoggedin)
    this.currentUser = JSON.stringify(currentUserr[0].name)
  }


}
