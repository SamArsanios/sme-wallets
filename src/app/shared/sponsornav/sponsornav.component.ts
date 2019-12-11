import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsornav',
  templateUrl: './sponsornav.component.html',
  styleUrls: ['./sponsornav.component.css']
})
export class SponsornavComponent implements OnInit {
  links = ['Sponsor Account settings', 'Sponsor Invoices', 'Sponsor Vault', 'Sponsor Contact Support'];

  constructor() { }

  ngOnInit() {
  }

}
