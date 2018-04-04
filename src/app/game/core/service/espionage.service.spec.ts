import { TestBed, inject } from '@angular/core/testing';

import { EspionageService } from './espionage.service';

describe('EspionageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EspionageService]
    });
  });

  it('should be created', inject([EspionageService], (service: EspionageService) => {
    expect(service).toBeTruthy();
  }));
});
