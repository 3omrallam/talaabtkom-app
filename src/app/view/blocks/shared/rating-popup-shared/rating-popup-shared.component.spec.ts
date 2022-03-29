import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingPopupSharedComponent } from './rating-popup-shared.component';

describe('RatingPopupSharedComponent', () => {
  let component: RatingPopupSharedComponent;
  let fixture: ComponentFixture<RatingPopupSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingPopupSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingPopupSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
