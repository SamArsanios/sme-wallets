import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../model/user/user-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  inputs : ['parentDatas']
})
export class HeaderComponent implements OnInit {
  public parentDatas: string;
  cur;
  exampleParent: string

  exampleMethodParent($event){
    this.exampleParent = $event
  }
  // deal = "i love you Jesus"
  currentUser: string;
  // @Input() receivedParentMessage: string;
  // @Output() exampleOutput = new EventEmitter<string>()
  // exampleMethodChild(){
  //   this.exampleOutput.emit(this.deal)
  // }

  constructor() { }

  ngOnInit() {
    let currentLoggedin = localStorage.getItem('loggedinUser')
    let currentUserr = JSON.parse(currentLoggedin)
    this.cur = JSON.stringify(currentUserr[0].name)
    this.currentUser = JSON.parse(this.cur)
  }


}
