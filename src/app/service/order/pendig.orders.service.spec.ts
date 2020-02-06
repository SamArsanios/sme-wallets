import { TestBed } from '@angular/core/testing';

import { Pendig.OrdersService } from './pendig.orders.service';

describe('Pendig.OrdersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Pendig.OrdersService = TestBed.get(Pendig.OrdersService);
    expect(service).toBeTruthy();
  });
});
