import { TestBed } from '@angular/core/testing';

import { AccountsettingsService } from './accountsettings.service';

describe('AccountsettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountsettingsService = TestBed.get(AccountsettingsService);
    expect(service).toBeTruthy();
  });
});
