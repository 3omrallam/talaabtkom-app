import { TestBed } from '@angular/core/testing';

import { OrderProccessService } from './order-proccess.service';

describe('OrderProccessService', () => {
  let service: OrderProccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderProccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
