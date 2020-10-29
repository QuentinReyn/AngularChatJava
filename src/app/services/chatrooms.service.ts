import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chatroom } from '../models/chatroom.model';

@Injectable({
  providedIn: 'root',
})
export class ChatroomsService {
  constructor(private http: HttpClient) {}

  serverUrl1 = 'http://127.0.0.1:2345';

  // tslint:disable-next-line: typedef
  getChatroomNames(): Observable<string[]> {
    return this.http.get<string[]>(this.serverUrl1 + '/chatrooms');
  }

  getChatrooms(): Observable<Chatroom[]> {
    return this.http.get<Chatroom[]>(this.serverUrl1 + '/chatrooms/list');
  }
}
