import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackOrderSectionComponent } from './track-order-section.component';

describe('TrackOrderSectionComponent', () => {
  let component: TrackOrderSectionComponent;
  let fixture: ComponentFixture<TrackOrderSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackOrderSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackOrderSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
