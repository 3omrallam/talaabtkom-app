import { TestBed } from '@angular/core/testing';

import { UserProfileAsidePageService } from './user-profile-aside-page.service';

describe('UserProfileAsidePageService', () => {
  let service: UserProfileAsidePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserProfileAsidePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
