import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackCardBlockComponent } from './feedback-card-block.component';

describe('FeedbackCardBlockComponent', () => {
  let component: FeedbackCardBlockComponent;
  let fixture: ComponentFixture<FeedbackCardBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackCardBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackCardBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
