import { Injectable } from '@angular/core';
import * as io from '@node/socket.io-client';

@Injectable()
export class WebsocketService {

  constructor() {
    var socket = io.connect('http://localhost:1337');
    socket.on('news', function (data) {
      console.log(data);
      socket.emit('my other event', { my: 'data' });
    });

  }
}
