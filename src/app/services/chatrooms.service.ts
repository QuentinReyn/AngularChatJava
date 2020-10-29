import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatroomsService {
  constructor(private http: HttpClient) {}

  serverUrl1 = 'http://127.0.0.1:2345';

  // tslint:disable-next-line: typedef
  getChatrooms(): Observable<string[]> {
    return this.http.get<string[]>(this.serverUrl1 + '/chatrooms');
  }
}
