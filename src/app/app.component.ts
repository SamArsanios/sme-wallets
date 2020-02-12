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

  constructor(private webSocketService: WebsocketService, private http: HttpClient) {
    // this.notifyUponFetchingOrders();
    this.simpleFetchTest();
  }


  ngOnInit() {
    // this.notifyUponFetchingOrders();
    this.simpleFetchTest();
  }

  private simpleFetchTest() {

    this.http.get(`https://corda.herokuapp.com/api/smewallets/orders/findAll`).subscribe(e => {
      console.log(`the http: ${JSON.stringify(e, null, 2)} `);
      this.webSocketService.notify(`/topic/orders/findAll`, this.test);
    });

  }

  private test(result: any): void {
    console.log(`the result after test: ${result}  `);
  }

}
