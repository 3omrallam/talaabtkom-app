import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReviewsSectionComponent } from './my-reviews-section.component';

describe('MyReviewsSectionComponent', () => {
  let component: MyReviewsSectionComponent;
  let fixture: ComponentFixture<MyReviewsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyReviewsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyReviewsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
