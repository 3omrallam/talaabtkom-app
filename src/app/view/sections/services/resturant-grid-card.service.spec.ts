import { TestBed } from '@angular/core/testing';

import { ResturantGridCardService } from './resturant-grid-card.service';

describe('ResturantGridCardService', () => {
  let service: ResturantGridCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResturantGridCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
