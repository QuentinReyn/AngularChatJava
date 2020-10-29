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
  getChatroomNames(serverUrl): Observable<string[]> {
    return this.http.get<string[]>(serverUrl + '/chatrooms');
  }

  getChatrooms(serverUrl): Observable<Chatroom[]> {
    // tslint:disable-next-line: prefer-for-of
    return this.http.get<Chatroom[]>(serverUrl + '/chatrooms/list');
  }
}
