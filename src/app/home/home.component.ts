import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import {ChatroomsService} from '../services/chatrooms.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

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

const chatrooms = [
  {
    id: 0,
    name: 'aa',
    owner: {
      account: { id: 0, username: 'Zero' },
      currentStatus: 'active',
      server: 'test',
    },
    messages: [
      { id: 0, content: 'test0' },
      { id: 1, content: 'test1' },
    ],
  },
  {
    id: 11,
    name: 'zae',
    owner: {
      account: { id: 0, username: 'Zero' },
      currentStatus: 'active',
      server: 'test',
    },
    messages: [
      { id: 0, content: 'test0' },
      { id: 1, content: 'test1' },
    ],
  },
  {
    id: 12,
    name: 'azezaea',
    owner: {
      account: { id: 0, username: 'Zero' },
      currentStatus: 'active',
      server: 'test',
    },
    messages: [
      { id: 0, content: 'test0' },
      { id: 1, content: 'test1' },
    ],
  },
  {
    id: 13,
    name: 'ezaeae',
    owner: {
      account: { id: 0, username: 'Zero' },
      currentStatus: 'active',
      server: 'test',
    },
    messages: [
      { id: 0, content: 'test0' },
      { id: 1, content: 'test1' },
    ],
  },
  {
    id: 14,
    name: 'zaere',
    owner: {
      account: { id: 0, username: 'Zero' },
      currentStatus: 'active',
      server: 'test',
    },
    messages: [
      { id: 0, content: 'test0' },
      { id: 1, content: 'test1' },
    ],
  },
  {
    id: 15,
    name: 'fsdfsf',
    owner: {
      account: { id: 0, username: 'Zero' },
      currentStatus: 'active',
      server: 'test',
    },
    messages: [
      { id: 0, content: 'test0' },
      { id: 1, content: 'test1' },
    ],
  },
  {
    id: 16,
    name: 'rezrc',
    owner: {
      account: { id: 0, username: 'Zero' },
      currentStatus: 'active',
      server: 'test',
    },
    messages: [
      { id: 0, content: 'test0' },
      { id: 1, content: 'test1' },
    ],
  },
  {
    id: 17,
    name: 'yetet',
    owner: {
      account: { id: 0, username: 'Zero' },
      currentStatus: 'active',
      server: 'test',
    },
    messages: [
      { id: 0, content: 'test0' },
      { id: 1, content: 'test1' },
    ],
  },
  {
    id: 18,
    name: 'zazdae',
    owner: {
      account: { id: 0, username: 'Zero' },
      currentStatus: 'active',
      server: 'test',
    },
    messages: [
      { id: 0, content: 'test0' },
      { id: 1, content: 'test1' },
    ],
  },
  {
    id: 19,
    name: 'vdaeze',
    owner: {
      account: { id: 0, username: 'Zero' },
      currentStatus: 'active',
      server: 'test',
    },
    messages: [
      { id: 0, content: 'test0' },
      { id: 1, content: 'test1' },
    ],
  },
  {
    id: 20,
    name: 'gzerr',
    owner: {
      account: { id: 0, username: 'Zero' },
      currentStatus: 'active',
      server: 'test',
    },
    messages: [
      { id: 0, content: 'test0' },
      { id: 1, content: 'test1' },
    ],
  },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private chatroomService: ChatroomsService) {}
  title = 'Test Dashboard';

  displayedColumns: string[] = ['server', 'accountId', 'accountUsername', 'status'];
  dataSource = users;
  displayedColumns1: string[] = ['server', 'name', 'ownerName'];
  dataSource1 = chatrooms;

  ngOnInit(): void {
    this.chatroomService.getChatrooms().subscribe((data) => {
      console.log(data);
    });
  }
}
