import { TestBed } from '@angular/core/testing';

import { ResturantCardService } from './resturant-card.service';

describe('ResturantCardService', () => {
  let service: ResturantCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResturantCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
