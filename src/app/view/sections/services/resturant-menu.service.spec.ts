import { TestBed } from '@angular/core/testing';

import { ResturantMenuService } from './resturant-menu.service';

describe('ResturantMenuService', () => {
  let service: ResturantMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResturantMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
