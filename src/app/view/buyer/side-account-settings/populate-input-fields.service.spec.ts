import { TestBed } from '@angular/core/testing';

import { PopulateInputFieldsService } from './populate-input-fields.service';

describe('PopulateInputFieldsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PopulateInputFieldsService = TestBed.get(PopulateInputFieldsService);
    expect(service).toBeTruthy();
  });
});
