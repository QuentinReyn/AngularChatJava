import { getTestBed, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { ChatroomsService } from './chatrooms.service';

describe('ChatroomsService', () => {
  let injector: TestBed;
  let service: ChatroomsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ChatroomsService],
    });
    injector = getTestBed();
    service = TestBed.inject(ChatroomsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable<string[]>', () => {
    const dummyUsers = ['test', 'encore'];

    service.getChatrooms().subscribe((chatrooms) => {
      expect(chatrooms.length).toBe(2);
      expect(chatrooms).toEqual(dummyUsers);
    });

    const req = httpMock.expectOne(`${service.serverUrl1}/chatrooms`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyUsers);
  });
});
