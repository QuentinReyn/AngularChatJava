import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { ChatroomsService } from '../services/chatrooms.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Chatroom } from '../models/chatroom.model';
import { interval, Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { element } from 'protractor';

const users = [
  {
    account: { id: 0, username: 'Zero' },
    currentStatus: 'active',
    server: 'test',
  },
  {
    account: { id: 1, username: 'Zero1' },
    currentStatus: 'active',
    server: 'test',
  },
  {
    account: { id: 2, username: 'Zero2' },
    currentStatus: 'active',
    server: 'test',
  },
  {
    account: { id: 3, username: 'Zero3' },
    currentStatus: 'active',
    server: 'test',
  },
  {
    account: { id: 4, username: 'Zero4' },
    currentStatus: 'active',
    server: 'test',
  },
  {
    account: { id: 5, username: 'Zero5' },
    currentStatus: 'active',
    server: 'test',
  },
  {
    account: { id: 6, username: 'Zero6' },
    currentStatus: 'active',
    server: 'test',
  },
  {
    account: { id: 7, username: 'Zero7' },
    currentStatus: 'active',
    server: 'test',
  },
  {
    account: { id: 8, username: 'Zero8' },
    currentStatus: 'active',
    server: 'test',
  },
  {
    account: { id: 9, username: 'Zero9' },
    currentStatus: 'active',
    server: 'test',
  },
];

// const chatrooms = [
//   {
//     id: 0,
//     name: 'aa',
//     owner: {
//       account: { id: 0, username: 'Zero' },
//       currentStatus: 'active',
//       server: 'test',
//     },
//     messages: [
//       { id: 0, content: 'test0' },
//       { id: 1, content: 'test1' },
//     ],
//   },
//   {
//     id: 11,
//     name: 'zae',
//     owner: {
//       account: { id: 0, username: 'Zero' },
//       currentStatus: 'active',
//       server: 'test',
//     },
//     messages: [
//       { id: 0, content: 'test0' },
//       { id: 1, content: 'test1' },
//     ],
//   },
//   {
//     id: 12,
//     name: 'azezaea',
//     owner: {
//       account: { id: 0, username: 'Zero' },
//       currentStatus: 'active',
//       server: 'test',
//     },
//     messages: [
//       { id: 0, content: 'test0' },
//       { id: 1, content: 'test1' },
//     ],
//   },
//   {
//     id: 13,
//     name: 'ezaeae',
//     owner: {
//       account: { id: 0, username: 'Zero' },
//       currentStatus: 'active',
//       server: 'test',
//     },
//     messages: [
//       { id: 0, content: 'test0' },
//       { id: 1, content: 'test1' },
//     ],
//   },
//   {
//     id: 14,
//     name: 'zaere',
//     owner: {
//       account: { id: 0, username: 'Zero' },
//       currentStatus: 'active',
//       server: 'test',
//     },
//     messages: [
//       { id: 0, content: 'test0' },
//       { id: 1, content: 'test1' },
//     ],
//   },
//   {
//     id: 15,
//     name: 'fsdfsf',
//     owner: {
//       account: { id: 0, username: 'Zero' },
//       currentStatus: 'active',
//       server: 'test',
//     },
//     messages: [
//       { id: 0, content: 'test0' },
//       { id: 1, content: 'test1' },
//     ],
//   },
//   {
//     id: 16,
//     name: 'rezrc',
//     owner: {
//       account: { id: 0, username: 'Zero' },
//       currentStatus: 'active',
//       server: 'test',
//     },
//     messages: [
//       { id: 0, content: 'test0' },
//       { id: 1, content: 'test1' },
//     ],
//   },
//   {
//     id: 17,
//     name: 'yetet',
//     owner: {
//       account: { id: 0, username: 'Zero' },
//       currentStatus: 'active',
//       server: 'test',
//     },
//     messages: [
//       { id: 0, content: 'test0' },
//       { id: 1, content: 'test1' },
//     ],
//   },
//   {
//     id: 18,
//     name: 'zazdae',
//     owner: {
//       account: { id: 0, username: 'Zero' },
//       currentStatus: 'active',
//       server: 'test',
//     },
//     messages: [
//       { id: 0, content: 'test0' },
//       { id: 1, content: 'test1' },
//     ],
//   },
//   {
//     id: 19,
//     name: 'vdaeze',
//     owner: {
//       account: { id: 0, username: 'Zero' },
//       currentStatus: 'active',
//       server: 'test',
//     },
//     messages: [
//       { id: 0, content: 'test0' },
//       { id: 1, content: 'test1' },
//     ],
//   },
//   {
//     id: 20,
//     name: 'gzerr',
//     owner: {
//       account: { id: 0, username: 'Zero' },
//       currentStatus: 'active',
//       server: 'test',
//     },
//     messages: [
//       { id: 0, content: 'test0' },
//       { id: 1, content: 'test1' },
//     ],
//   },
// ];
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private chatroomService: ChatroomsService,
    private changeDetectorRefs: ChangeDetectorRef
  ) {}
  title = 'Test Dashboard';

  displayedColumns: string[] = [
    'server',
    'accountId',
    'accountUsername',
    'status',
  ];
  dataSource = new MatTableDataSource();
  displayedColumns1 = ['server', 'name'];
  dataSource1: MatTableDataSource<Chatroom>;
  serverUrl1 = 'http://127.0.0.1:2345';
  serverUrl2 = 'http://127.0.0.1:2346';
  serverUrl3 = 'http://127.0.0.1:2347';
  chatrooms: Chatroom[] = [];
  mySubscription: Subscription;
  serverList = [this.serverUrl1, this.serverUrl2, this.serverUrl3];

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(users);
    this.getChatrooms();
    this.mySubscription = interval(5000).subscribe((x) => {
      this.getChatrooms();
    });
  }

  // tslint:disable-next-line: typedef
  getChatrooms() {
    // tslint:disable-next-line: prefer-for-of
    this.chatrooms = [];
    for (let i = 0; i < this.serverList.length; i++) {
      // pour chaque serveur name
      this.chatroomService
        .getChatrooms(this.serverList[i])
        .subscribe((data) => {
          if (data) {
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
}
