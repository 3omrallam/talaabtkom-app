import { TestBed } from '@angular/core/testing';

import { MyReviewsListService } from './my-reviews-list.service';

describe('MyReviewsListService', () => {
  let service: MyReviewsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyReviewsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
