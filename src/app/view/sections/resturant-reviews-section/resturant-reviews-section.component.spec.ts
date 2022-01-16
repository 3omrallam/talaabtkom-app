import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantReviewsSectionComponent } from './resturant-reviews-section.component';

describe('ResturantReviewsSectionComponent', () => {
  let component: ResturantReviewsSectionComponent;
  let fixture: ComponentFixture<ResturantReviewsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturantReviewsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantReviewsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
