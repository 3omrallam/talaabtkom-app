import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReviewBlockComponent } from './card-review-block.component';

describe('CardReviewBlockComponent', () => {
  let component: CardReviewBlockComponent;
  let fixture: ComponentFixture<CardReviewBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardReviewBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardReviewBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
