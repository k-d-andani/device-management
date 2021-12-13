import { TestBed } from '@angular/core/testing';

import { LogMessagesService } from './log-messages.service';

describe('LogMessagesService', () => {
  let service: LogMessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogMessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
