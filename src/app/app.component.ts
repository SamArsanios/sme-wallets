import {Component, OnInit} from '@angular/core';
import {WebsocketService} from './utils/websocket/websocket.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'sme-wallets';

  constructor() {

  }


  ngOnInit() {
    // this.notifyUponFetchingOrders();

  }

}
