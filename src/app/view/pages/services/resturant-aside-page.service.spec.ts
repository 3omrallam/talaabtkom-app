import { TestBed } from '@angular/core/testing';

import { ResturantAsidePageService } from './resturant-aside-page.service';

describe('ResturantAsidePageService', () => {
  let service: ResturantAsidePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResturantAsidePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
