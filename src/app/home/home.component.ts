import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { ChatroomsService } from '../services/chatrooms.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Chatroom } from '../models/chatroom.model';
import { interval, Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { element } from 'protractor';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private chatroomService: ChatroomsService,
    private changeDetectorRefs: ChangeDetectorRef,
    private userService: UserService
  ) {}
  title = 'Test Dashboard';

  displayedColumns: string[] = [
    'server',
    'accountId',
    'accountUsername',
    'status',
  ];
  dataSource: MatTableDataSource<User>;
  displayedColumns1 = ['server', 'name'];
  dataSource1: MatTableDataSource<Chatroom>;
  serverUrl1 = 'http://127.0.0.1:2345';
  serverUrl2 = 'http://127.0.0.1:2346';
  serverUrl3 = 'http://127.0.0.1:2347';
  chatrooms: Chatroom[] = [];
  users: User[] = [];
  mySubscription: Subscription;
  serverList = [this.serverUrl1, this.serverUrl2, this.serverUrl3];

  ngOnInit(): void {
    this.getUsers();
    this.getChatrooms();
    this.mySubscription = interval(5000).subscribe((x) => {
      this.getChatrooms();
      this.getUsers();
    });
  }

  getUsers(): void {
    // tslint:disable-next-line: prefer-for-of
    this.users = [];
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.serverList.length; i++) {
      // pour chaque serveur name
      this.userService.getUsers(this.serverList[i]).subscribe((data) => {
        if (data) {
          // tslint:disable-next-line: prefer-for-of
          for (let y = 0; y < data.length; y++) {
            // pour chaque chatroom
            data[y].serverUrl = this.serverList[i]; // j'assigne a chaque chatroom le serveur correspondant
            this.users.push(data[y]);
            this.dataSource = new MatTableDataSource<User>(this.users);
            console.log(this.users);
          }
        }
      });
    }
    this.changeDetectorRefs.detectChanges();
  }

  getChatrooms(): void {
    // tslint:disable-next-line: prefer-for-of
    this.chatrooms = [];
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.serverList.length; i++) {
      // pour chaque serveur name
      this.chatroomService
        .getChatrooms(this.serverList[i])
        .subscribe((data) => {
          if (data) {
            // tslint:disable-next-line: prefer-for-of
            for (let y = 0; y < data.length; y++) {
              // pour chaque chatroom
              data[y].serverUrl = this.serverList[i]; // j'assigne a chaque chatroom le serveur correspondant
              this.chatrooms.push(data[y]);
              this.dataSource1 = new MatTableDataSource<Chatroom>(
                this.chatrooms
              );
            }
          }
        });
    }
    this.changeDetectorRefs.detectChanges();
  }

  getUsersCountOnServer(serverUrl): number {
    return this.users.filter((m) => m.serverUrl === serverUrl).length;
  }

  getChatroomsCountOnServer(serverUrl): number {
    return this.chatrooms.filter((m) => m.serverUrl === serverUrl).length;
  }
}
