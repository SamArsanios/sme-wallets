import { TestBed } from '@angular/core/testing';

import { HtpsService } from './htps.service';

describe('HtpsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HtpsService = TestBed.get(HtpsService);
    expect(service).toBeTruthy();
  });
});
