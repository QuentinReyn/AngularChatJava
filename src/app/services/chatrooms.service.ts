import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChatroomsService {
  constructor(private http: HttpClient) {}

  serverUrl1 = 'http://127.0.0.1:2345/';

  // tslint:disable-next-line:typedef
  getChatrooms() {
    return this.http.get(this.serverUrl1 + '/chatrooms');
  }

}
