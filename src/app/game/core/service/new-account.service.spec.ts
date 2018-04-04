import { TestBed, inject } from '@angular/core/testing';

import { NewAccountService } from './new-account.service';

describe('NewAccountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewAccountService]
    });
  });

  it('should be created', inject([NewAccountService], (service: NewAccountService) => {
    expect(service).toBeTruthy();
  }));
});
