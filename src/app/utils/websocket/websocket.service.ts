import { Injectable } from '@angular/core';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import {HTTPBase} from '../http/http-base';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor() { }

   connect() {

    const socket = new SockJS(HTTPBase.getBaseURLWebSocket());

    const stompClient = Stomp.over(socket);

    return stompClient;

  }

  public notify(subscriptionURL: string, actionTaken): void {

    const stompClient = this.connect();

    stompClient.connect({}, frame => {

      stompClient.subscribe(subscriptionURL, notificationResult => {

        new Promise((resolve, reject) => {

          resolve( actionTaken(notificationResult));

        })

          .then(stompClient.close());

      });

    });
  }

}
