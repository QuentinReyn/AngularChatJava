import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  title = 'Test Dashboard';
  users = [
    { id: 0, username: 'Zero' },
    { id: 11, username: 'Mr. Nice' },
    { id: 12, username: 'Narco' },
    { id: 13, username: 'Bombasto' },
    { id: 14, username: 'Celeritas' },
    { id: 15, username: 'Magneta' },
    { id: 16, username: 'RubberMan' },
    { id: 17, username: 'Dynama' },
    { id: 18, username: 'Dr IQ' },
    { id: 19, username: 'Magma' },
    { id: 20, username: 'Tornado' }
  ];

  chatrooms = [
    { id: 0, name: 'aa', ownerId : 11, messages :  [{id : 0, content : 'test0' }, {id : 1, content : 'test1' }]},
    { id: 11, name: 'zae', ownerId : 12, messages :  [{id : 0, content : 'test0' }, {id : 1, content : 'test1' }] },
    { id: 12, name: 'azezaea', ownerId : 13, messages :  [{id : 0, content : 'test0' }, {id : 1, content : 'test1' }] },
    { id: 13, name: 'ezaeae', ownerId : 14, messages :  [{id : 0, content : 'test0' }, {id : 1, content : 'test1' }] },
    { id: 14, name: 'zaere', ownerId : 15, messages :  [{id : 0, content : 'test0' }, {id : 1, content : 'test1' }] },
    { id: 15, name: 'fsdfsf', ownerId : 16, messages :  [{id : 0, content : 'test0' }, {id : 1, content : 'test1' }] },
    { id: 16, name: 'rezrc', ownerId : 17, messages :  [{id : 0, content : 'test0' }, {id : 1, content : 'test1' }] },
    { id: 17, name: 'yetet', ownerId : 18, messages :  [{id : 0, content : 'test0' }, {id : 1, content : 'test1' }] },
    { id: 18, name: 'zazdae', ownerId : 19, messages :  [{id : 0, content : 'test0' }, {id : 1, content : 'test1' }] },
    { id: 19, name: 'vdaeze', ownerId : 20, messages :  [{id : 0, content : 'test0' }, {id : 1, content : 'test1' }] },
    { id: 20, name: 'gzerr', ownerId : 0, messages :  [{id : 0, content : 'test0' }, {id : 1, content : 'test1' }] }
  ];

  ngOnInit(): void {
  }

}
