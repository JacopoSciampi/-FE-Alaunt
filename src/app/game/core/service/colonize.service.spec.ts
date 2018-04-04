import { TestBed, inject } from '@angular/core/testing';

import { ColonizeService } from './colonize.service';

describe('ColonizeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColonizeService]
    });
  });

  it('should be created', inject([ColonizeService], (service: ColonizeService) => {
    expect(service).toBeTruthy();
  }));
});
