import { Component, OnInit } from '@angular/core';
import { HtpsService } from '../htps.service';

@Component({
  selector: 'app-htttts',
  templateUrl: './htttts.component.html',
  styleUrls: ['./htttts.component.css']
})
export class HttttsComponent {

  constructor(private hts:HtpsService) { }

  // ngOnInit(): void {
  //   this.hts.getUsers().subscribe(data=>console.log("data"))
  //   console.log("hddddddddddd")
  // }
  // wolo(){
    // console.log("hddddddddddd")

    // this.hts.getUsers().subscribe(data=>console.log(data))
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then(response => response.json())
    // .then(json => console.log(json))
  // }
  profile = {};
  loadUser() {
    this.hts.getUser().subscribe(data => this.profile = data);
    // this.hts.getUser()
  }
}


