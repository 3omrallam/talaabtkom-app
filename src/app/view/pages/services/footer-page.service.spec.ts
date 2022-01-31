import { TestBed } from '@angular/core/testing';

import { FooterPageService } from './footer-page.service';

describe('FooterPageService', () => {
  let service: FooterPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FooterPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
