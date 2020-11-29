import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getUsers(serverUrl): Observable<User[]> {
    // tslint:disable-next-line: prefer-for-of
    return this.http.get<User[]>(serverUrl + '/users');
  }
}
